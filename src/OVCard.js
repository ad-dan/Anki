import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo';
import Feather from "@expo/vector-icons/Feather";

import { TouchableNativeFeedback } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const CoolText = ({ children }) => {
  return <Text style={{ fontFamily: "Reg" }}>{children}</Text>;
};

class OVCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const anime = this.props.anime;
    console.log("ANIME -->", anime.title);
    return (
      <View style={styles.mainCard}>
        <Image
          source={{ uri: anime["image_url"] }}
          style={[styles.bgImg, { zIndex: -2 }]}
          blurRadius={2}
        />
        <View style={[styles.bgImg, { backgroundColor: "rgba(0,0,0,0.3)" }]} />
        <View style={styles.itemCard}>
          <View
            style={{
              backgroundColor: "#212121",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8
            }}
          >
            <Image
              source={{ uri: anime["image_url"] }}
              style={styles.itemImg}
            />
          </View>
          <View style={styles.itemDesc}>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.handleNav("Det", {
                  mal: anime["mal_id"]
                });
              }}
            >
              <View
                style={{
                  marginLeft: 10,
                  width: 180,
                  alignSelf: "center",
                  borderLeftWidth: 3,
                  borderLeftColor: "#A569EA",
                  paddingVertical: 4,
                  marginTop: 16,
                  paddingLeft: 12
                }}
                onPress={() => {
                  console.log("xd");
                }}
              >
                <Text style={styles.title}>{anime.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Feather
                    color="#9e9e9e"
                    name="star"
                    size={14}
                    style={styles.ico}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Med",
                      color: "#9e9e9e"
                    }}
                  >
                    {anime.score === 0 ? "TBD" : anime.score}
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
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  },
  bgImg: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  itemCard: {
    minHeight: 390,
    width: 215
  },
  itemImg: {
    width: 215,
    height: 300,
    borderRadius: 8
  },
  itemDesc: {
    backgroundColor: "#212121",
    minHeight: 84,
    paddingBottom: 26,
    paddingLeft: 4,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8
  },
  title: {
    fontSize: 21,
    fontFamily: "Med",
    color: "#fff"
  },
  ico: {
    marginRight: 8
  }
});

export default OVCard;
