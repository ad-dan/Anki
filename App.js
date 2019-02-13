import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import DetailView from './src/DetailView';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation';
import { Ionicons } from '@expo/vector-icons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      seeType: 'airing'
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      FontAwesome: require('native-base/Fonts/FontAwesome.ttf'),
      Reg: require('./assets/Futura-Book.otf'),
      Med: require('./assets/Futura-Medium.otf'),
      Demi: require('./assets/Futura-Demi.otf')
    });
    this.setState({ loading: false });
  }
  render() {
    const { navigate } = this.props.navigation;
    tabs = [
      {
        key: 'games',
        icon: 'md-flame',
        set: 'airing',
        label: 'Airing',
        barColor: '#D81B60',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'movies-tv',
        icon: 'md-medal',
        set: 'bypopularity',
        label: 'Top',
        barColor: '#B71C1C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'music',
        icon: 'md-jet',
        set: 'upcoming',
        label: 'Upcoming',
        barColor: '#E64A19',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      }
    ];
    console.log(this.props.navigation);
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Main
          handleNav={navigate}
          key={this.state.seeType}
          seeType={this.state.seeType}
        />

        <BottomNavigation
          onTabPress={newTab => {
            console.log('TAB', newTab);
            this.setState({
              seeType: newTab.set
            });
          }}
          // style={{
          //   position: 'absolute',
          //   zIndex: 1000,
          //   bottom: 0,
          //   height: 100
          // }}
          renderTab={({ tab }) => (
            <FullTab
              isActive={false}
              key={tab.key}
              style={{ zIndex: 1001 }}
              label={tab.label}
              renderIcon={() => (
                <Ionicons name={tab.icon} size={24} color="#ffffff" />
              )}
            />
          )}
          tabs={tabs}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
const A = createStackNavigator(
  {
    Home: { screen: App },
    Det: { screen: DetailView }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export default createAppContainer(A);
