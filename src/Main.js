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
      animeList: []
    };
  }
  async componentDidMount() {
    try {
      //
      const animemes = await AsyncStorage.getItem('anime');
      console.log(animemes);
      if (!animemes) {
        throw 'Error';
      }
      console.log('cached');
      const list = JSON.parse(animemes);
      this.setState({
        animeList: list
      });
    } catch (e) {
      const data = await fetch(
        'https://api.jikan.moe/v3/top/anime/1/bypopularity'
      );
      const list = await data.json();
      await AsyncStorage.setItem('anime', JSON.stringify(list.top));
      this.setState({
        animeList: list.top
      });
    }
  }
  render() {
    const navigate = this.props.handleNav;
    return (
      <LinearGradient
        colors={['#fe455a', '#81000D']}
        style={{
          flex: 1,
          width: '100%',
          paddingTop: 24,
          justifyContent: 'flex-start'
        }}>
        {this.state.animeList.length > 1 ? (
          <DeckSwiper
            dataSource={this.state.animeList}
            renderItem={item => {
              // console.log(item);
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
