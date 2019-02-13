import React, { Component } from "react";
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
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SvgUri from "react-native-svg-uri";
import FallSvg from "../assets/autumn-leaf-svgrepo-com.svg";
const deviceWidth = Dimensions.get("window").width;
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
    const malID = navigation.getParam("mal", 1);
    const res = await fetch(`https://api.jikan.moe/v3/anime/${malID}`);
    const d = await res.json();

    this.setState({
      data: d,
      loading: false
    });
  }
  render() {
    if (this.state.loading) {
      return <View style={{ flex: 1, backgroundColor: "#212121" }} />;
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
          backgroundColor: "#7717E4"
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 32,
            top: 32,
            height: 32,
            width: 32,
            backgroundColor: "transparent",
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
            resizeMode={"cover"}
            style={styles.bgImg}
            blurRadius={1}
          />
          <Image source={{ uri: data.image_url }} style={styles.mainImg} />
        </View>
        <View
          style={{
            position: "absolute",
            top: 220,
            right: 32,
            width: 48,
            height: 48,
            backgroundColor: "#212121",
            zIndex: 100,
            borderRadius: 48 / 2,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Feather size={20} color="#FF4081" name="heart" />
        </View>
        <View style={styles.detView}>
          <Image
            source={require("../assets/curve.png")}
            style={{
              position: "absolute"
            }}
          />
          <Text
            style={{
              marginTop: 16,
              fontSize: 21,
              fontFamily: "Med",
              color: "#fff",
              textAlign: "center"
            }}
          >
            {data.title ? data.title : " "}
          </Text>
          <Text
            style={{
              color: "#EEE",
              textAlign: "center",
              fontFamily: "Reg"
            }}
          >
            {data.genres
              ? data.genres
                  .map(gen => gen.name)
                  .slice(0, 3)
                  .join(" | ")
              : " "}
          </Text>
          <View
            style={{
              marginTop: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontFamily: "Med", fontSize: 12, color: "#fff" }}>
              {data.score || " "}
            </Text>
            <Feather
              name={"star"}
              color="#e0e0e0"
              size={14}
              style={{ marginLeft: 8 }}
            />
          </View>
          <Text
            style={{
              marginTop: 8,
              color: "#e0e0e0",
              letterSpacing: 0.6,
              textAlign: "center",
              fontSize: 10
            }}
          >
            {data.rating || " "}
          </Text>
        </View>

        <View
          style={{
            marginTop: 50,
            marginBottom: 16,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
                marginTop: 12,
                fontFamily: "Med"
              }}
            >
              {data.rank || " "}
            </Text>
            <Text
              style={{
                fontSize: 12,

                lineHeight: 16,
                color: "#eee"
              }}
            >{`MAL\nRank`}</Text>
          </View>
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
                marginTop: 12,
                fontFamily: "Med"
              }}
            >
              {data.popularity || " "}
            </Text>
            <Text
              style={{
                fontSize: 12,

                lineHeight: 16,
                color: "#eee"
              }}
            >
              Popularity
            </Text>
          </View>
          <View style={styles.circ}>
            <Text
              style={{
                fontSize: 22,
                color: "#fff",
                marginTop: -8,
                fontFamily: "Med"
              }}
            >
              {data.members && data.members > MIO
                ? `${(data.members / MIO).toFixed(2)}M`
                : `${(data.members / Math.pow(10, 3)).toFixed(0)}k`}
            </Text>
            <Text style={{ fontSize: 12, color: "#fff" }}>Members</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 36,
            height: 38,
            marginTop: 24,
            alignItems: "center"
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: "#DAEAF0", fontFamily: "Reg" }}>
              {data.episodes > 0 ? `${data.episodes} Episodes` : " "}
            </Text>
            <Text style={{ fontSize: 10, color: "#DAEAF0", fontFamily: "Reg" }}>
              {data.aired.string || " "}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            {(() => {
              const season = data.premiered.split(" ")[0];
              if (season == "Winter") {
                return (
                  <Image
                    style={styles.weatherIco}
                    source={{
                      uri:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARaSURBVGhD7ZpZ6FVVFIdvI2g2aJpGZJNok70olGRRkRgNmqIPgs0+FQVWDz4YKga9RAkVRFA0kUagpWL2YBoVQWpUliiBIZqkPhRNmI3fd+5Zerjce//nf+cD9wcfZ+/L2eecPa299tq31Fd7dAn8DE8kuQLrNvgP1ie5gupZsBLBATgbOqKT0+tgdWJ6HQE3l5Ol5fArWImj8A2cBQ63SaBOSK8t1VD4AVYnufw6HWztrbAd/PCrQVUbWl/A3/A6/AF3QUs1Fnzp3iSXX6fBLrCs/AOXg6qsiD3+AcS9f8Gd0FI1WhHlkPkN4gNt6WUwJ81bkRtgR5oPHoGm9ADMhxjbqlZFhsFjcF2Sq67zwHng8HoT/gWfZYWyV/kOnk/TS6BhnQp2qQ/aBteAqqyIE/EecPz7+4dQTxeClVY+83OwXPAL2CC+X10KjRqXY7od/GBfYOvZik5Q8/5u+rM0L1tgAtTTLXAR2Mv3QzRA4Nx5Gc6Fk2AuDIemNQRccaPb/0yv9pYvNW2l5sFAZvIC8P49kG2AaKxDEO9xpd+Qpp+Clskh9Q7Ey8Xx/iRokfLIYfU7RPloAHvevJPd9UPTHvdIU3OkUg6JnZB9gbwPjuOBNBJ+gihnb9o4qto68h7EvfIwNKVxsBbigTEMbNnDadrh9jRoXmvJBfFTeAPWgIvdVeBcuRd8jobC+9TH4PBaBJrj2dCwlkLMCVtTe35xmrdCuhovQFi3H+EOGEhaoTHlZOk1sGyguzIa9CB8ftNykttqDoEXwaGhqq0jV8Jm8PdP/GEQWgi6PJa1lzdB3jmXW1PginLymGotiMpV2Qk9WN0KPnNdkuuQ6lWkUZ0D9qReRMd0PliR75NcgeVqq51vqW3vq68CScfPFXhVkiuwzgStku5B4TQDZoG9UVkR3Ym74dok1+MK19o9wvQ0bUX0eL9N8zpuPS8jFJU7tSxW5noohNxHPwfZCri9XQynQCHkPHgQYn+RRZ8qzza2J6TDFh/+UXo9Akb74nc3RD0tW/pL2A1arqzVikjHfngXuiG30fV2njXVS+uIu0g3d1pT5a4xt2Jn6K6t29LIhDV1yLtbNXiXW0Y1ur0AaoAeB2NdMU+NG8+EtqhdpnkaRAXEpcCITlt0BhyElUmutTL26zC6CSJgtwDaoti/f53k8stevBHcbebRZWDYyJhxy/Qo2DKO4cqKGDLyvCOO1WrJxddyBt+6IqOAWjQ/wrVHr9i0oVSDdxES3Qj1NBW8z/XJBhkPBsonQsekRfMQxg+phrHgPEPgK/B+r3Hg8wp0VE7ElyBbAXvKs4yB5CKnI2p4Ncp6uGPo1VBpx6S78AxEvDeLi5cuTfaoLqvKY4VgMnRUrvqOa19uRd5O03oBEfuVV6Ga/COA7sZb4P4mzghXQEel2TQw4TGDR8uVVkunUyPgnwDyyGdYfl+S66IaXUeyegjuKye7p1GgxbGXCi+dy0aOEvo6rlLpf6FZZUzk2KnNAAAAAElFTkSuQmCC"
                    }}
                  />
                );
              }
              if (season == "Fall") {
                return (
                  <Image
                    style={styles.weatherIco}
                    source={{
                      uri:
                        "data:image/png;base64,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"
                    }}
                  />
                );
              }
              if (season == "Summer") {
                return (
                  <Image
                    style={styles.weatherIco}
                    source={{
                      uri:
                        "data:image/png;base64,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"
                    }}
                  />
                );
              }
              if (season == "Spring") {
                return (
                  <Image
                    style={styles.weatherIco}
                    source={{
                      uri:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALMSURBVGhD7dlLqE1RHMfx4/1mgEKUPGJiIK8BEyaKvMJEKRMyMRODKwYGBpQYkAETpcRMKa8USSiFpMgjBsozr7wf3597Vi2r/91nn7PXWfuq/atP95x99rn7/z9nn73X2rtWpUqV0tOj/ve/zjjcxIq/z7p55qBn58N/MgoP8Bs/sBRWZmJg58PysgC/cAcLtaCeAbgFNeF8wiy46Ns6Br3/oBaUlX64B1eoCtoO/SYO1JeFHmMo5uJVfZn8xGyUkvXwi3QuQE1Zr8kVfA6WyRmUknDXKUrNT0bSTIRVTFFbkTQbYBVS1DkkjY4yViFFvUTSnIVVSAzDkCzXYBURw3gky21YRcQwDclyFVYRMeiMnyynYRURwyAky25YRRT1CEmzClYhRR1H0gzGB1jFFLESydPVCLdVz9AXyTMCOhNbRbViNUrLInyFVVgzDqH0LMFbWAU2oqH7PnSbCxRjoGnrN1gFW25gPpKlmU9rODbiCK7DL/wJTmIHmh2GRPnGNHV9jfPYA10N6Y888RtZrAU5Mh0dOIGH0O43EoWjT9cvSN5hPyYgK/57shrRsGQT7sN/j7yHdbmp6WgD4T93vmMvdIK04q/bVSNr8Bz+ur5LiJJ5sDbge4oZCOOvEzYyBKfgr2PRUS1K+iDP4fUjlsOP/7rfiIbqeec0OldFy2FYGwldhh//NdeIfrjuUmojbxB12KIjibWhUKNGekH7vL88y05ET54LDo0a2Rwsy6JddTSiZyq+wNqok9XIWjQzlNmCtmUbrI06WY3cDZ5n0T2V3mhbNFTQLM7auGQ1kpfmJWPR9uimzEVYRRRtRLcarPNR26JD4lGEhRRpRBcepqCU6AesY70rptVGNEDUyLnUqIBd0OAubET3Dq3CHd3xKuWCQ1Y0cAwnShr6h8W/gOYly9DWI1PM6H7hOmgX1JR4EqpUqVKl1dRqfwCH7Mda7vGRKQAAAABJRU5ErkJggg=="
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
                textAlignVertical: "center",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "Reg"
              }}
            >
              {data.premiered || " "}
            </Text>
          </View>
        </View>

        <View>
          <View style={{ paddingHorizontal: 36, paddingVertical: 80 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Reg",
                lineHeight: 16 * 1.5,
                color: "#DAEAF0",
                textAlign: "justify"
              }}
            >
              {data.synopsis || ""}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginVertical: 14 }}>
          <Text style={{ fontFamily: "Med", fontSize: 20, color: "#ffffff" }}>
            CREDITS
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 36,
            backgroundColor: "#7717E4",
            paddingVertical: 52
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Med", color: "#E505CA" }}>
            Manga
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#ffffff",
              marginTop: 8,
              fontFamily: "Reg",
              color: "#DAEAF0",
              marginBottom: 26
            }}
          >
            {data.related.Adaptation[0].name || ""}
          </Text>

          <Text style={{ fontSize: 16, fontFamily: "Med", color: "#E505CA" }}>
            Studio
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "#ffffff",
              marginTop: 8,
              fontFamily: "Reg",
              color: "#DAEAF0",
              marginBottom: 26
            }}
          >
            {data.studios[0].name || " "}
          </Text>

          <Text style={{ fontSize: 16, fontFamily: "Med", color: "#E505CA" }}>
            Producers
          </Text>

          <Text
            style={{
              lineHeight: 16 * 1.5,
              fontSize: 16,
              color: "#ffffff",
              marginTop: 8,
              fontFamily: "Reg",
              color: "#DAEAF0",
              marginBottom: 26
            }}
          >
            {data.producers.map(prod => prod.name).join("\n") || ""}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bgImgCont: {
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth
  },
  bgImg: {
    width: deviceWidth,
    height: 240,
    position: "absolute"
  },
  mainImg: {
    width: 168,
    height: 240,
    alignSelf: "center"
  },
  circ: {
    height: 54,
    width: 84,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column-reverse"
  },
  detView: {
    minHeight: 160,
    backgroundColor: "#7717E4",
    width: deviceWidth,
    paddingVertical: 8
  },
  weatherIco: {
    height: 32,
    width: 32
  }
});
