import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  AsyncStorage,
  Dimensions
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo';

const deviceWidth = Dimensions.get('window').width;
export default class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true
    };
  }
  async componentDidMount() {
    const { navigation } = this.props;
    const malID = navigation.getParam('mal', 1);
    const res = await fetch(`https://api.jikan.moe/v3/anime/${malID}`);
    const d = await res.json();

    this.setState({
      data: d,
      loading: false
    });
  }
  render() {
    if (this.state.loading) {
      return <View style={{ flex: 1, backgroundColor: '#212121' }} />;
    }
    // const data = {
    //   request_hash: 'request:anime:f59830319b6464544c1289856d6a60a7fa2d2220',
    //   request_cached: true,
    //   request_cache_expiry: 31360,
    //   mal_id: 30276,
    //   url: 'https://myanimelist.net/anime/30276/One_Punch_Man',
    //   image_url: 'https://myanimelist.cdn-dena.com/images/anime/12/76049.jpg',
    //   trailer_url:
    //     'https://www.youtube.com/embed/tMblzsXwAKo?enablejsapi=1&wmode=opaque&autoplay=1',
    //   title: 'One Punch Man',
    //   title_english: 'One Punch Man',
    //   title_japanese: 'ワンパンマン',
    //   title_synonyms: ['One Punch-Man', 'One-Punch Man', 'OPM'],
    //   type: 'TV',
    //   source: 'Web manga',
    //   episodes: 12,
    //   status: 'Finished Airing',
    //   airing: false,
    //   aired: {
    //     from: '2015-10-05T00:00:00+00:00',
    //     to: '2015-12-21T00:00:00+00:00',
    //     prop: {
    //       from: {
    //         day: 5,
    //         month: 10,
    //         year: 2015
    //       },
    //       to: {
    //         day: 21,
    //         month: 12,
    //         year: 2015
    //       }
    //     },
    //     string: 'Oct 5, 2015 to Dec 21, 2015'
    //   },
    //   duration: '24 min per ep',
    //   rating: 'R - 17+ (violence & profanity)',
    //   score: 8.71,
    //   scored_by: 758537,
    //   rank: 46,
    //   popularity: 5,
    //   members: 1120769,
    //   favorites: 33708,
    //   synopsis:
    //     "The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle. In fact, all it takes to defeat evildoers with just one punch has led to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored. This all changes with the arrival of Genos, a 19-year-old cyborg, who wishes to be Saitama's disciple after seeing what he is capable of. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society, and Saitama, shocked that no one knows who he is, quickly agrees. And thus begins the story of One Punch Man, an action-comedy that follows an eccentric individual who longs to fight strong enemies that can hopefully give him the excitement he once felt and just maybe, he'll become popular in the process. [Written by MAL Rewrite]",
    //   background:
    //     "Episodes 1 and 2 were previewed at a screening in Saitama city cultural center (small hall) on September 6, 2015. Regular broadcasting began on October 5, 2015. One Punch Man is based on Yusuke Murata's manga remake of ONE's original web comic. The anime adapts the first 7 volumes of the manga.",
    //   premiered: 'Fall 2015',
    //   broadcast: 'Mondays at 01:05 (JST)',
    //   related: {
    //     Adaptation: [
    //       {
    //         mal_id: 44347,
    //         type: 'manga',
    //         name: 'One Punch-Man',
    //         url: 'https://myanimelist.net/manga/44347/One_Punch-Man'
    //       }
    //     ],
    //     'Side story': [
    //       {
    //         mal_id: 31704,
    //         type: 'anime',
    //         name: 'One Punch Man: Road to Hero',
    //         url:
    //           'https://myanimelist.net/anime/31704/One_Punch_Man__Road_to_Hero'
    //       },
    //       {
    //         mal_id: 31772,
    //         type: 'anime',
    //         name: 'One Punch Man Specials',
    //         url: 'https://myanimelist.net/anime/31772/One_Punch_Man_Specials'
    //       }
    //     ],
    //     Sequel: [
    //       {
    //         mal_id: 34134,
    //         type: 'anime',
    //         name: 'One Punch Man 2',
    //         url: 'https://myanimelist.net/anime/34134/One_Punch_Man_2'
    //       }
    //     ]
    //   },
    //   producers: [
    //     {
    //       mal_id: 16,
    //       type: 'anime',
    //       name: 'TV Tokyo',
    //       url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo'
    //     },
    //     {
    //       mal_id: 23,
    //       type: 'anime',
    //       name: 'Bandai Visual',
    //       url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual'
    //     },
    //     {
    //       mal_id: 104,
    //       type: 'anime',
    //       name: 'Lantis',
    //       url: 'https://myanimelist.net/anime/producer/104/Lantis'
    //     },
    //     {
    //       mal_id: 142,
    //       type: 'anime',
    //       name: 'Asatsu DK',
    //       url: 'https://myanimelist.net/anime/producer/142/Asatsu_DK'
    //     },
    //     {
    //       mal_id: 1121,
    //       type: 'anime',
    //       name: 'Banpresto',
    //       url: 'https://myanimelist.net/anime/producer/1121/Banpresto'
    //     },
    //     {
    //       mal_id: 1261,
    //       type: 'anime',
    //       name: 'Good Smile Company',
    //       url: 'https://myanimelist.net/anime/producer/1261/Good_Smile_Company'
    //     },
    //     {
    //       mal_id: 1365,
    //       type: 'anime',
    //       name: 'Shueisha',
    //       url: 'https://myanimelist.net/anime/producer/1365/Shueisha'
    //     },
    //     {
    //       mal_id: 1501,
    //       type: 'anime',
    //       name: 'East Japan Marketing & Communications',
    //       url:
    //         'https://myanimelist.net/anime/producer/1501/East_Japan_Marketing___Communications'
    //     }
    //   ],
    //   licensors: [
    //     {
    //       mal_id: 119,
    //       type: 'anime',
    //       name: 'Viz Media',
    //       url: 'https://myanimelist.net/anime/producer/119/Viz_Media'
    //     }
    //   ],
    //   studios: [
    //     {
    //       mal_id: 11,
    //       type: 'anime',
    //       name: 'Madhouse',
    //       url: 'https://myanimelist.net/anime/producer/11/Madhouse'
    //     }
    //   ],
    //   genres: [
    //     {
    //       mal_id: 1,
    //       type: 'anime',
    //       name: 'Action',
    //       url: 'https://myanimelist.net/anime/genre/1/Action'
    //     },
    //     {
    //       mal_id: 24,
    //       type: 'anime',
    //       name: 'Sci-Fi',
    //       url: 'https://myanimelist.net/anime/genre/24/Sci-Fi'
    //     },
    //     {
    //       mal_id: 4,
    //       type: 'anime',
    //       name: 'Comedy',
    //       url: 'https://myanimelist.net/anime/genre/4/Comedy'
    //     },
    //     {
    //       mal_id: 20,
    //       type: 'anime',
    //       name: 'Parody',
    //       url: 'https://myanimelist.net/anime/genre/20/Parody'
    //     },
    //     {
    //       mal_id: 31,
    //       type: 'anime',
    //       name: 'Super Power',
    //       url: 'https://myanimelist.net/anime/genre/31/Super_Power'
    //     },
    //     {
    //       mal_id: 37,
    //       type: 'anime',
    //       name: 'Supernatural',
    //       url: 'https://myanimelist.net/anime/genre/37/Supernatural'
    //     },
    //     {
    //       mal_id: 42,
    //       type: 'anime',
    //       name: 'Seinen',
    //       url: 'https://myanimelist.net/anime/genre/42/Seinen'
    //     }
    //   ]
    // };
    const data = this.state.data;
    const MIO = Math.pow(10, 6);
    return (
      <ScrollView
        style={{
          paddingTop: 24,
          backgroundColor: '#212121'
        }}>
        <View
          style={{
            position: 'absolute',
            left: 32,
            top: 32,
            height: 32,
            width: 32,
            backgroundColor: 'transparent',
            zIndex: 100
          }}>
          <Feather
            name="arrow-left"
            size={32}
            color="#ffffff"
            style={{ elevation: 2 }}
          />
        </View>

        <View style={styles.bgImgCont}>
          <Image
            source={{ uri: data.image_url }}
            resizeMode={'cover'}
            style={styles.bgImg}
            blurRadius={1}
          />
          <Image source={{ uri: data.image_url }} style={styles.mainImg} />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 220,
            right: 32,
            width: 48,
            height: 48,
            backgroundColor: '#212121',
            zIndex: 100,
            borderRadius: 48 / 2,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Feather size={20} color="#FF4081" name="heart" />
        </View>
        <View style={styles.detView}>
          <Image
            source={require('../assets/curve.png')}
            style={{ position: 'absolute' }}
          />
          <Text
            style={{
              marginTop: 16,
              fontSize: 21,
              fontWeight: '600',
              color: '#fff',
              textAlign: 'center'
            }}>
            {data.title}
          </Text>
          <Text style={{ color: '#757575', textAlign: 'center' }}>
            {data.genres
              .map(gen => gen.name)
              .slice(0, 3)
              .join(' | ')}
          </Text>
          <View
            style={{
              marginTop: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <Text style={{ fontWeight: '600', fontSize: 12, color: '#fff' }}>
              {data.score}
            </Text>
            <Feather
              name={'star'}
              color="#e0e0e0"
              size={14}
              style={{ marginLeft: 8 }}
            />
          </View>
          <Text
            style={{
              marginTop: 16,
              color: '#707070',
              letterSpacing: 0.6,
              textAlign: 'center',
              fontSize: 10
            }}>
            {data.rating}
          </Text>
        </View>

        <View
          style={{
            marginTop: 50,
            marginBottom: 16,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 22,
                color: '#fff',
                marginTop: -8,
                fontWeight: '600'
              }}>
              #{data.rank}
            </Text>
            <Text style={{ fontSize: 8, color: '#fff' }}>MAL Rank</Text>
          </View>
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 22,
                color: '#fff',
                marginTop: -8,
                fontWeight: '600'
              }}>
              {data.popularity}
            </Text>
            <Text style={{ fontSize: 8, color: '#fff' }}>Popularity</Text>
          </View>
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 22,
                color: '#fff',
                marginTop: -8,
                fontWeight: '600'
              }}>
              {data.members > MIO
                ? `${(data.members / MIO).toFixed(1)}M`
                : `${data.members / Math.pow(10, 3)}k`}
            </Text>
            <Text style={{ fontSize: 8, color: '#fff' }}>Members</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 36,
            height: 38,
            marginTop: 24
          }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: '#fff' }}>12 Episodes</Text>
            <Text style={{ fontSize: 10, color: '#fff' }}>
              {data.aired.string}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Feather
              name="cloud-snow"
              size={32}
              color="#ffffff"
              style={{ elevation: 2, marginRight: 8 }}
            />
            <Text
              style={{
                fontSize: 12,
                textAlignVertical: 'center',
                color: 'rgba(255,255,255,0.4)'
              }}>
              Fall 2015
            </Text>
          </View>
        </View>

        <View>
          <View style={{ paddingHorizontal: 36, paddingVertical: 80 }}>
            <Text
              style={{
                fontSize: 14,
                letterSpacing: 0.3,
                lineHeight: 21,
                color: '#fbfbfb',
                textAlign: 'justify'
              }}>
              {data.synopsis}
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 36,
            backgroundColor: '#616161',
            paddingVertical: 52
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30
            }}>
            <Text
              style={{
                fontWeight: '600',
                color: '#ffffff',
                textAlign: 'right'
              }}>
              Manga
            </Text>
            <Text style={{ marginLeft: 50, color: '#ffffff', width: 100 }}>
              {data.related.Adaptation[0].name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  color: '#ffffff',
                  textAlign: 'right'
                }}>
                Studio
              </Text>
            </View>
            <View>
              <Text style={{ marginLeft: 50, color: '#ffffff', width: 100 }}>
                {data.studios[0].name}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  color: '#ffffff',
                  textAlign: 'right'
                }}>
                Producers
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 50,
                  color: '#ffffff',
                  maxWidth: 120,
                  lineHeight: 16 * 1.5
                }}>
                {data.producers.map(prod => prod.name).join('\n')}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bgImgCont: {
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth
  },
  bgImg: {
    width: deviceWidth,
    height: 240,
    position: 'absolute'
  },
  mainImg: {
    width: 168,
    height: 240,
    alignSelf: 'center'
  },
  circ: {
    height: 78,
    width: 78,
    borderRadius: 78 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#707070'
  },
  detView: {
    height: 160,
    backgroundColor: '#212121',
    width: deviceWidth
  }
});
