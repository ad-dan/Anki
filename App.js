import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import DetailView from './src/DetailView';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      FontAwesome: require('native-base/Fonts/FontAwesome.ttf')
    });
    this.setState({ loading: false });
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation);
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return <Main handleNav={navigate} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
