import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialFixedLabelTextbox1 from "../symbols/alert/MaterialFixedLabelTextbox1";
import MaterialFixedLabelTextbox2 from "../symbols/alert/MaterialFixedLabelTextbox2";
import CupertinoButtonWhiteTextColor1 from "../symbols/alert/CupertinoButtonWhiteTextColor1";
import CupertinoButtonWhiteTextColor from "../symbols/alert/CupertinoButtonWhiteTextColor";

export default class AccountAlertScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <Text style={styles.text}>Account Alert</Text>
        <View style={styles.rect3} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <MaterialFixedLabelTextbox1 style={styles.materialFixedLabelTextbox1} />
        <MaterialFixedLabelTextbox2 style={styles.materialFixedLabelTextbox2} />
        <Text style={styles.text3}>Account Name:</Text>
        <CupertinoButtonWhiteTextColor1
          style={styles.cupertinoButtonWhiteTextColor1}
        />
        <Text style={styles.text4} />
        <Text style={styles.text2}>Account ID:</Text>
        <CupertinoButtonWhiteTextColor
          style={styles.cupertinoButtonWhiteTextColor}
        />
      </View>
    );
  }
}

AccountAlertScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 0
  },
  rect: {
    top: 0,
    left: 0.18,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  rect2: {
    top: 54.4,
    left: 0.18,
    width: 359.82,
    height: 42.18,
    backgroundColor: "rgba(232,212,48,1)",
    position: "absolute"
  },
  text: {
    top: 60.51,
    left: 115.23,
    width: 151.17,
    height: 29.96,
    color: "#121212",
    position: "absolute",
    fontSize: 20
  },
  rect3: {
    top: 585.6,
    left: 0,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  image: {
    top: 9,
    left: 80,
    width: 200,
    height: 34,
    position: "absolute"
  },
  materialFixedLabelTextbox1: {
    top: 176.5,
    left: 18,
    width: 322.41,
    height: 43,
    position: "absolute"
  },
  materialFixedLabelTextbox2: {
    top: 275.5,
    left: 18.79,
    width: 322.41,
    height: 43,
    position: "absolute"
  },
  text3: {
    top: 259.5,
    left: 18,
    width: 136,
    height: 32,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  cupertinoButtonWhiteTextColor1: {
    top: 509.28,
    left: 230.41,
    width: 110,
    height: 44,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  text4: {
    top: 132,
    left: 154,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  text2: {
    top: 160.5,
    left: 18,
    width: 116,
    height: 32,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  cupertinoButtonWhiteTextColor: {
    top: 509.28,
    left: 18,
    width: 116,
    height: 44,
    backgroundColor: "rgba(11,10,10,1)",
    position: "absolute"
  }
});
