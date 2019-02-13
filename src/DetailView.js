import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  AsyncStorage,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SvgUri from 'react-native-svg-uri';
import FallSvg from '../assets/autumn-leaf-svgrepo-com.svg';
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
          backgroundColor: '#7717E4'
        }}
      >
        <View
          style={{
            position: 'absolute',
            left: 32,
            top: 32,
            height: 32,
            width: 32,
            backgroundColor: 'transparent',
            zIndex: 100
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Feather
              name="arrow-left"
              size={32}
              color="#ffffff"
              style={{ elevation: 2 }}
            />
          </TouchableOpacity>
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
            backgroundColor: '#4B0699',
            zIndex: 100,
            borderRadius: 48 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 100
          }}
        >
          <Feather size={20} color="#FF4081" name="heart" />
        </View>
        <View style={styles.detView}>
          <Image
            source={require('../assets/curve.png')}
            style={{
              position: 'absolute'
            }}
          />
          <Text
            style={{
              marginTop: 16,
              fontSize: 21,
              fontFamily: 'Med',
              color: '#fff',
              textAlign: 'center'
            }}
          >
            {data.title ? data.title : ' '}
          </Text>
          <Text
            style={{
              color: '#EEE',
              textAlign: 'center',
              fontFamily: 'Reg'
            }}
          >
            {data.genres
              ? data.genres
                  .map(gen => gen.name)
                  .slice(0, 3)
                  .join(' | ')
              : ' '}
          </Text>
          <View
            style={{
              marginTop: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <Text style={{ fontFamily: 'Med', fontSize: 12, color: '#fff' }}>
              {data.score || ' '}
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
              marginTop: 8,
              color: '#e0e0e0',
              letterSpacing: 0.6,
              textAlign: 'center',
              fontSize: 10
            }}
          >
            {data.rating || ' '}
          </Text>
        </View>

        <View
          style={{
            marginTop: 50,
            marginBottom: 16,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                marginTop: 12,
                fontFamily: 'Med'
              }}
            >
              {data.rank || ' '}
            </Text>
            <Text
              style={{
                fontSize: 12,

                lineHeight: 16,
                color: '#eee'
              }}
            >{`MAL\nRank`}</Text>
          </View>
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                marginTop: 12,
                fontFamily: 'Med'
              }}
            >
              {data.popularity || ' '}
            </Text>
            <Text
              style={{
                fontSize: 12,

                lineHeight: 16,
                color: '#eee'
              }}
            >
              Popularity
            </Text>
          </View>
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 22,
                color: '#fff',
                marginTop: -8,
                fontFamily: 'Med'
              }}
            >
              {data.members && data.members > MIO
                ? `${(data.members / MIO).toFixed(2)}M`
                : `${(data.members / Math.pow(10, 3)).toFixed(0)}k`}
            </Text>
            <Text style={{ fontSize: 12, color: '#fff' }}>Members</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 36,
            height: 38,
            marginTop: 24,
            alignItems: 'center'
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: '#DAEAF0', fontFamily: 'Reg' }}>
              {data.episodes > 0 ? `${data.episodes} Episodes` : ' '}
            </Text>
            <Text style={{ fontSize: 10, color: '#DAEAF0', fontFamily: 'Reg' }}>
              {data.aired.string || ' '}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            {(() => {
              if (!data.premiered) return;
              const season = data.premiered.split(' ')[0];
              if (season == 'Winter') {
                return (
                  <Image
                    style={styles.weatherIco}
                    source={{
                      uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPnSURBVGiB7dnLjxVFFAbw08MENSEsAMND5BGGxNfSiNG/wARcIIlbI0u3mhhX+IpGiBtQYyIaYGMcYwisRHSlgPEPIBrAR1ReEg1DIPPi5+LWZGru9J3bcx/TY+RLbrr71KlT3+l7qurr7og76A/wA07VzaNrSJhvv4F+kOkEeBq3sutb2FG1f62JYABP4q6IEBGDWfNgw8XdeAJFP4l0VM84il/xWaqkV7K2GaWFl5PpU5zF52UxB8uM88CjHfYbj4gN6RcRcWUO36vp+Gw6/tThmK3R6cRMJXXaNCbxEdZmthV4DxOZ7Tt0fvOxHc8012lZIiiwC0+1iXkBI/gAYynUSEb6r3Qcx4dp8p/rOIk06D8p6Blsa5UIHsf3yfx3m5gbsTWdP4STZuMkHk4+W7GxVbyqq9bzEXEpIrZFxGkcwrqM1DocjohTEfFYRFyMiN1tYhbRWKkiIsYi4nqJz/WIGK3IsRqwHPtalMHU+VjyWV4h3jncxPsYbSqn/Hw0+dzE+V4m9CBOlJTBCTxQMcagxsSdwoTGxF6R2com+7fozd6HTRguSWQYmyrG+LKp7+6sDTPm3e4m32NlMStnh2V4MyLORsSuiLiRNd9ItrN4A8vahBuIiN8iYjhd3zuH7+p0HE597qnKeRawE3+kO3JbmuzZXVqHw6lN8t1ZIe4SDYmyVNJaWcxb2IG7ks+SjhNIgxW4kYLPZ/kdMQ99lEiPZ4mMY3tX5FsMsquZWHMiyTa1IXZEoixm39GPQTWky8I+WNVy91qgW/V7JqZ35zu4g/8dsBf76ubRNdJOfbtuHlUwQ2thA7ZkpiL9ptqHsCEWO/BnkgYHzJbUB1Lb73XzbAvsyfTO1SyR/Pl5T908KyGVz3GzcRxDdfNrhbLnkYGImCyxT7bwX3zAa6afyctKawyv1s2zLXC5wmS/VDfPtsDmfPltVrfYgs01cTuI81jRSedJlM2XBQe+SPf1ExzD/ry9nYx/OxaBTMeqiBhJl8+l44/1sOkC+LlpKziElblPtw9W+WB7I6IoiuLFXsXM8FVErImIa9H4R5YVRXGtD+MsjMBMq+cFHOxl0E35Tl+ywg3h/jYx7sMVjRd/9UB7gTmhjcBMiUxovKBemWzrMdebx95CjwRmWkrhYw09N4lf+p/BTBKP4Buz8bX0gaZN/zU40tR3FO/Ml0u3q9ZYTK/vOUai8cGzJfBuRLwQEUsz85GIeKkoistd8qoOvK4LgYmLqYyOaezWcHTBEsiITAnM/XNM9pYCE6uxPp2v0nj7PiH7pLcg0F5gDpmHwMRbuIa1veY6L6hZYPZMosQiEZj/efwLBqYXH+k6nl8AAAAASUVORK5CYII='
                    }}
                  />
                );
              }
              if (season == 'Fall') {
                return (
                  <Image
                    style={styles.weatherIco}
                    source={{
                      uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2wAAAdsBV+WHHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGPSURBVEiJ7ZW9SgNBFIXPxHRWSWEhmBfwJxHJE4j4AmqT3kb7vINWaQUttfAF/C3SBCubNAFBDARFDMTCQJDEzyITXDZrMptkbeIHw+7euXPPnTMwK/3jCHAIHPy16BrQAdrASpRCVeAYyNjvS364sLEMcAI8TVK46BG6px9vrOhSM+aofe15Xw2Y98auJil845gnSbchcgcDxIH3AIv9NIAZl5pOOzbGtCW5nF3RGNOZmLDFxcLxbAYqwCmwAcRsbNnB6iWbG7Nrz4BKGOGSp9gLUADSQG2AaM3mFOyaHiUXwRiwCZQDCn8BrQHCLZvjp2xrBh8rkKd7Q0VFFcj39LxdpOyIipSkhd92nQOaEey2CeQGtgXsRCC87dcJOvD1UXwcQl9N4w8Aj5LmJL1JepVUt2NL0uwQgQ9J55KSkhL2mZRUN8akQ7cLZEPYmnWp6Xpl7ofoc88lqc/qIIAHSZ+SniU17Ni100fq2pqQNC9JxpjFEI2Go+frqOvD/J0myvQJx8dYeydp5DOePr4B1HvxvgzQc60AAAAASUVORK5CYII='
                    }}
                  />
                );
              }
              if (season == 'Summer') {
                return (
                  <Image
                    style={styles.weatherIco}
                    source={{
                      uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVKSURBVGiB5ZpdiFVVFMf/exwcP0YlzaApJUqnyMh0bKqHNMOKSistqB58jh6DSOihzKnMGUazKDIiCOpNCC20ND8wsCjHYNK+RH3IKUzND8jM5s6vh73O3M2Zc8+5c++53qwFm3vPWuv819p77X322uscqYYEjAa+AHYDo2ppq6YEvEqR1tTbn4oIuBXoBwrW+oFb6u3XsAhoBg5ZJF4GVtr/g8DYevtXNgGrzfFeoMlar/G66+1fWQTMtal0HpgV8GcZrwDcXk8fMwkYa9MH4IUE+QqT/QiMvpCObQT6gE1AB/AQMDVF/xVzdB/QlCBvMhnAyhScqWarw2z3ARvSfHUZHTki6YoE0TFJPdb2WrtB0ocmv805t6cE5s2SdtvlYkn7JM221mZtcsKtR5xzU9L8TevIRzZ67wCdwHbgFOm0ogzcjgyMU2ar02wDbEzDbMyw2SNpoaTfnXPPmBNO0nT5kZtjv9eb/npJQ9ZGAi2XH/Uldv2d2dpjvwecc5i9rsCXygi430ZjR8UgVRKw03y4L00va420SOqTdErSxGiUMu5plfSIpHslXSZpkolOSDoqabOk9c65A2VgOUknJU2Q1OKc+zXrnjSwX2xEpmXozQK2ZMz9kD4BZmZgTjfdvoo7EIBFC/7REvJGfHJYML2jwNv4x+cMYLK1GcBik/1mugWgGxhRAvuxchZ6uR1ZbmCrEmQTgij8CbwENJeBOQ6ff50LojM+Qa/T5M/n0ZFowW+P8ZuAz012GLixAuyZdi/ALmKbKLDDZKkLvVxjLQZ2PMZfZ/yfgSurwJ8CHDGsN2KyE8a/vFL8EOweAzsZ8NqBAeAPgsSwChttwFnDnB3wz5jtu6sBH4nfgc8bWHcg22q8zF18GPZejNZLwItOmOfxCefI4YLOAb41kAL+fDHCZK3RVAPG5diR8cFUmma8RmANxSdiL9BWDlizzf0Bu/EbYs964FmTrcurEwF2lFcti/Hbgf0mGzAfk0+aphyl2AUL65gEvc9M54EadGSxYW9JkI0B1gbR2YfPpAcV4lHYD7SnGPspDH/OHbnWsH9I0UmKTrOAL4MorE2KQgwoepLktj4C7PGGfTpDLx6d3Q0qJo4F+eSwP8NepD9QndvJPsZslKJ+eV8Lg/r2ZFgG/GW9OwjML2nJn7cBpufgeBz7OsP+PkVnPsW6wDnzvTFUCBf73/jz95AyJ7CtTot9FLDKfBu62GPKUXSiZO4wsCCm87TJ3q1BR94z7Kdi/AUUc7KhUUgBjG+Ig6k2F35DXM1wN8QYcFqKEqXutUhRNge86lKUmIGkpPEmG6W8k8Z+guMAeSSNAVipND6q7+aZxnfFZLmm8Q8a2NYYvwFfiQQ4BtxRAfadttYANgANMXnZ6VBDloKkaOrsDZnOuQFJSyVtlXSppM1AFzBJGQRMsjW3Sb7K8qmkpYYZUmSz6ulbSfHhDPA+sAT/hBtlrRV4GPggmPsXtPhwUZSDalGgu1rSIkl3SbpG0lUmOizpoPxU/Ng5d6gMrHwKdMAiG5FtFQHkQPhiNsDCNL2sxR7tooMFZMDZfH/c5vdOm/NngTdLzfeYcyOAt+yeM4bRbZitFomIItupO3pWvhLdPBHolK++z5YPdRI9Kem4pOcycJdLeiK4nmctotPAXvnq/CUxXxLpf/Oi56J59ZYr4feUHnN0yGtoimlND+Wk4fUkfEIZvYaeG/DnUXxtnbp//GuI4jvCQ/gqTfglRG6pf80Jf5aJvnR4DXjd/vdSzZmiHsR/4aOaiCie+gA66u1PxYT/8Oxr4Ctq/OHZP4KFuxq4WY4zAAAAAElFTkSuQmCC'
                    }}
                  />
                );
              }
              if (season == 'Spring') {
                return (
                  <Image
                    style={styles.weatherIco}
                    source={{
                      uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2wAAAdsBV+WHHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFySURBVEiJ7dVNSxVRGAfwmTYGpd/EKOii0TbbVrQvCgxs5UJwaUtxl4s+QG2CWloQbe6uSyL5ARS3oZJuBPNGPzfHmm53OmeOI7Twv5qX53l+Z96YojjP/x4sYfGskYdYwXjYn/c7c+HYFbzDg7bQy9gNyAGeoV+B+1gI52AHl9qAH2ueR7G5FxLsexnrjfakwFcz4GuxgjJWgMOiKEYawt/Lsrz4r4KUK86JWEEKvJ0Bf20D7mXA0Z4U+FUG/DKj5+/gfYNveKUVNMBj+JiAfsBoa3DAS9zFW2xVsC28wR1EP88Yso81vMCtYQNP1JoFToXeNew1gVcHbuEXdGIwOlgf6P3cBF4e8vyOMF0H44k//1oned4EvjlkwCD0ax/TdfW4kQyHYb0UGBPhbgzLp0ZoGNzBjwS4W4P2cb0xHIY/TYDrMpOFVoBZlZcmAf6J+VOhFWRSeOYReAO3W0EHFjBR2e7iGzbxGvdxVv/38+TnGN1cIbZY12RMAAAAAElFTkSuQmCC'
                    }}
                  />
                );
              }
            })()}

            <Text
              style={{
                marginLeft: 8,
                height: 32,
                fontSize: 12,
                textAlignVertical: 'center',
                color: '#DAEAF0',
                fontFamily: 'Reg'
              }}
            >
              {data.premiered || ' '}
            </Text>
          </View>
        </View>

        <View>
          <View style={{ paddingHorizontal: 36, paddingVertical: 80 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Reg',
                lineHeight: 16 * 1.5,
                color: '#DAEAF0',
                textAlign: 'justify'
              }}
            >
              {data.synopsis || ''}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginVertical: 14 }}>
          <Text style={{ fontFamily: 'Demi', fontSize: 20, color: '#ffffff' }}>
            CREDITS
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 36,
            backgroundColor: '#7717E4',
            paddingVertical: 52
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: 'Demi', color: '#E505CA' }}>
            Manga
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#ffffff',
              marginTop: 8,
              fontFamily: 'Reg',
              color: '#DAEAF0',
              marginBottom: 26
            }}
          >
            {data.related.Adaptation[0].name || ''}
          </Text>

          <Text style={{ fontSize: 16, fontFamily: 'Demi', color: '#E505CA' }}>
            Studio
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#ffffff',
              marginTop: 8,
              fontFamily: 'Reg',
              color: '#DAEAF0',
              marginBottom: 26
            }}
          >
            {data.studios[0].name || ' '}
          </Text>

          <Text style={{ fontSize: 16, fontFamily: 'Demi', color: '#E505CA' }}>
            Producers
          </Text>

          <Text
            style={{
              lineHeight: 16 * 1.5,
              fontSize: 16,
              color: '#ffffff',
              marginTop: 8,
              fontFamily: 'Reg',
              color: '#DAEAF0',
              marginBottom: 26
            }}
          >
            {data.producers.map(prod => prod.name).join('\n') || ''}
          </Text>
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
    height: 54,
    width: 84,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column-reverse'
  },
  detView: {
    minHeight: 160,
    backgroundColor: '#7717E4',
    width: deviceWidth,
    paddingVertical: 8
  },
  weatherIco: {
    height: 32,
    width: 32
  }
});
