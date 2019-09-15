import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text } from "react-native";
import MaterialUnderlineTextbox7 from "../symbols/MaterialUnderlineTextbox7";
import MaterialUnderlineTextbox8 from "../symbols/MaterialUnderlineTextbox8";
import MaterialUnderlineTextbox9 from "../symbols/MaterialUnderlineTextbox9";
import MaterialUnderlineTextbox10 from "../symbols/MaterialUnderlineTextbox10";
import MaterialUnderlineTextbox11 from "../symbols/MaterialUnderlineTextbox11";
import MaterialButtonDark24 from "../symbols/MaterialButtonDark24";
import MaterialButtonDark25 from "../symbols/MaterialButtonDark25";

export default class ReminderScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect3} />
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect2} />
        <TextInput
          placeholder={
            "Privacy & Security | Terms of use @ 2017 Bank Of Ceylon.  All           Rights Reserved"
          }
          style={styles.textInput}
        />
        <Text style={styles.text2}>Welcome S A Vithanage</Text>
        <Text style={styles.text3}>Last login Aug 05 2019</Text>
        <Text style={styles.text4}>Dashboard</Text>
        <MaterialUnderlineTextbox7 style={styles.materialUnderlineTextbox7} />
        <MaterialUnderlineTextbox8 style={styles.materialUnderlineTextbox8} />
        <MaterialUnderlineTextbox9 style={styles.materialUnderlineTextbox9} />
        <MaterialUnderlineTextbox10 style={styles.materialUnderlineTextbox10} />
        <MaterialUnderlineTextbox11 style={styles.materialUnderlineTextbox11} />
        <MaterialButtonDark24 style={styles.materialButtonDark24} />
        <MaterialButtonDark25 style={styles.materialButtonDark25} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  rect3: {
    top: 72.64,
    left: 0,
    width: 390,
    height: 92,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  rect: {
    top: 0,
    left: 7.5,
    width: 375,
    height: 72.64,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  image: {
    top: 6.51,
    left: 7.5,
    width: 78,
    height: 29.81,
    position: "absolute"
  },
  rect2: {
    top: 670.53,
    left: 7.37,
    width: 375.26,
    height: 78.44,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  textInput: {
    top: 695.75,
    left: 14.25,
    width: 356.44,
    height: 42,
    color: "#121212",
    position: "absolute"
  },
  text2: {
    top: 36.32,
    left: 16.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text3: {
    top: 58.64,
    left: 16.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text4: {
    top: 12.41,
    left: 149.18,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  materialUnderlineTextbox7: {
    top: 200.17,
    left: "3.85%",
    width: 360,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox8: {
    top: 269.35,
    left: 15,
    width: 360,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox9: {
    top: 333.17,
    left: "3.85%",
    width: 360,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox10: {
    top: 399.68,
    left: "3.85%",
    width: 360,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox11: {
    top: 469.94,
    left: 15,
    width: 360,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonDark24: {
    top: 545.38,
    left: 35.5,
    width: 144,
    height: 58.79,
    position: "absolute"
  },
  materialButtonDark25: {
    top: 545.38,
    left: 209.5,
    width: 144,
    height: 58.79,
    position: "absolute"
  }
});
