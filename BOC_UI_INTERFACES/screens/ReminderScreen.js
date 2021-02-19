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

ReminderScreen.navigationOptions = {
  header : null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 78,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  image: {
    top: 18,
    left: 3.5,
    width: 78,
    height: 29.81,
    position: "absolute"
  },
  rect2: {
    top: 570,
    left: 0,
    width: 375.26,
    height: 78.44,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  textInput: {
    top: 578,
    left: 1,
    width: 356.44,
    height: 42,
    color: "#121212",
    position: "absolute"
  },
  text2: {
    top: 50,
    fontSize: 10,
    left: 12.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text3: {
    top: 60,
    fontSize: 10,
    left: 12.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text4: {
    top: 23,
    left: 145.18,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  rect3: {
    top: 77,
    left: 0,
    width: 382,
    height: 78.44,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonTransparentHamburger: {
    top: 97.64,
    left: 310.1,
    width: 52,
    height: 46,
    position: "absolute"
  },
  materialUnderlineTextbox7: {
    top:  180,
    left: 2,
    width: 355,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox8: {
    top: 240,
    left: 2,
    width: 355,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox9: {
    top: 310,
    left: 2,
    width: 355,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox10: {
    top: 370,
    left: 2,
    width: 355,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox11: {
    top: 440,
    left: 2,
    width: 355,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonDark24: {
    top: 490,
    left: 20,
    width: 144,
    height: 58.79,
    position: "absolute",
    borderRadius: 10
  },
  materialButtonDark25: {
    top: 490,
    left: 195,
    width: 144,
    height: 58.79,
    position: "absolute",
    borderRadius: 10
  }
});
