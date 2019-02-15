import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo';
import Feather from '@expo/vector-icons/Feather';

import { TouchableNativeFeedback } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const CoolText = ({ children }) => {
  return <Text style={{ fontFamily: 'Reg' }}>{children}</Text>;
};

class OVCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const anime = this.props.anime;
    console.log('ANIME -->', anime.title);
    return (
      <View style={styles.mainCard}>
        <Image
          source={{ uri: anime['image_url'] }}
          style={[styles.bgImg, { zIndex: -2 }]}
          blurRadius={2}
        />
        <View style={[styles.bgImg, { backgroundColor: 'rgba(0,0,0,0.3)' }]} />
        <View style={styles.itemCard}>
          <View
            style={{
              backgroundColor: '#212121',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8
            }}
          >
            <Image
              source={{ uri: anime['image_url'] }}
              style={styles.itemImg}
            />
          </View>
          <View style={styles.itemDesc}>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.handleNav('Det', {
                  mal: anime['mal_id']
                });
              }}
            >
              <View
                style={{
                  width: '80%',
                  alignSelf: 'center',
                  paddingVertical: 4,
                  marginTop: 16
                }}
                onPress={() => {
                  console.log('xd');
                }}
              >
                <Text style={styles.title}>{anime.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Feather
                    color="#ffffff"
                    name="star"
                    size={14}
                    style={styles.ico}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Med',
                      color: '#ffffff'
                    }}
                  >
                    {anime.score === 0 ? 'TBD' : anime.score}
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCard: {
    height: deviceHeight - 20,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgImg: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  itemCard: {
    minHeight: 400,
    width: 215,
    marginTop: -80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  itemImg: {
    width: 215,
    height: 300,
    borderRadius: 8
  },
  itemDesc: {
    backgroundColor: '#212121',
    minHeight: 100,
    paddingBottom: 16,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8
  },
  title: {
    fontSize: 20,
    fontFamily: 'Med',
    color: '#E91E63',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 1.2 * 20
  },
  ico: {
    marginRight: 8
  }
});

export default OVCard;
