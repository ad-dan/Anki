import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  AsyncStorage
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import OVCard from './OVCard';
import { DeckSwiper } from 'native-base';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeList: [],
      ani: {}
    };
  }
  async componentDidMount() {
    try {
      //
      console.log('SEETPYE', this.props.seeType);
      const animemes = await AsyncStorage.getItem(
        `anime-${this.props.seeType}`
      );
      // console.log(animemes);
      if (!animemes) {
        throw 'Error';
      }
      // console.log('cached');
      const list = JSON.parse(animemes);
      this.setState({
        animeList: list
      });
    } catch (e) {
      const { seeType } = this.props;

      const data = await fetch(
        `https://api.jikan.moe/v3/top/anime/1/${seeType}`
      );
      const list = await data.json();
      await AsyncStorage.setItem(
        `anime-${this.props.seeType}`,
        JSON.stringify(list.top)
      );
      this.setState({
        animeList: list.top
      });
    }
  }
  async componentWillReceiveProps() {
    try {
      //

      const animemes = await AsyncStorage.getItem(
        `asadnime-${this.props.seeType}`
      );
      // console.log(animemes);
      if (!animemes) {
        throw 'Error';
      }
      console.log('cached');
      const list = JSON.parse(animemes);
      this.setState({
        animeList: list
      });
    } catch (e) {
      const { seeType } = this.props;
      console.log('SEETPYE', this.props.seeType);
      const data = await fetch(
        `https://api.jikan.moe/v3/top/anime/1/${seeType}`
      );

      const list = await data.json();
      console.log(list);
      await AsyncStorage.setItem(
        `anime12-${this.props.seeType}`,
        JSON.stringify(list.top)
      );
      this.setState(
        {
          animeList: list.top
        },
        () => {
          console.log('sadasfd');
        }
      );
    }
  }
  render() {
    const navigate = this.props.handleNav;
    console.log('NEUE', this.state.animeList[0], 'neue');
    return (
      <LinearGradient
        colors={['#c31432', '#240b36']}
        style={{
          flex: 1,
          width: '100%',
          paddingTop: 24,
          justifyContent: 'flex-start'
        }}
      >
        {this.state.animeList.length > 1 ? (
          <DeckSwiper
            // key={this.state.animeList[0].name}
            dataSource={this.state.animeList}
            renderItem={item => {
              console.log('render');
              return (
                <OVCard anime={item} key={item.index} handleNav={navigate} />
              );
            }}
          />
        ) : null}
      </LinearGradient>
    );
  }
}

export default Main;
