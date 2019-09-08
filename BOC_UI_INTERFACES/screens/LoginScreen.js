import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import MaterialUnderlineTextbox from "../symbols/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../symbols/MaterialUnderlineTextbox1";
import MaterialButtonDark7 from "../symbols/MaterialButtonDark7";
import MaterialButtonDark8 from "../symbols/MaterialButtonDark8";
import MaterialButtonDark9 from "../symbols/MaterialButtonDark9";
import { } from 'react-navigation';

export default class LoginScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect2} />
        <MaterialUnderlineTextbox style={styles.materialUnderlineTextbox} />
        <MaterialUnderlineTextbox1 style={styles.materialUnderlineTextbox1} />
        <View style={styles.materialButtonDark7}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('ForgotPassword')}>
            <Text style={styles.acaption}>FORGOT PASSWORD</Text>
            </TouchableOpacity>
        </View>
        <MaterialButtonDark8 style={styles.materialButtonDark8} />
        <View style={styles.materialButtonDark9}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('Dashboard')}>
            <Text style={styles.acaption}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
        {/* <MaterialButtonDark9 style={styles.} /> */}
        <View style={styles.rect3} />
        <Text style={styles.text2}>Trouble Logging in ?</Text>
        <View style={styles.rect4} />
        <Text style={styles.text3}>011 220 4444</Text>
        <View style={styles.rect2} />
        <TextInput
          placeholder={
            "Privacy & Security | Terms of use @ 2017 Bank Of Ceylon.  All Rights Reserved"
          }
          style={styles.textInput}
        />
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  header : null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  rect: {
    top: 0,
    left: 0.13,
    width: 375,
    height: 72.64,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  image: {
    top: 25,
    left: 87.63,
    width: 200,
    height: 41.81,
    position: "absolute"
  },
  rect2: {
    top: 670.53,
    left: 0,
    width: 375.26,
    height: 78.44,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  materialUnderlineTextbox: {
    top: 160,
    left: "7.2%",
    width: 321.26,
    height: 43,
    backgroundColor: "rgba(240,218,160,1)",
    position: "absolute",
    borderRadius: 10
  },
  materialUnderlineTextbox1: {
    top: 240,
    left: "7.2%",
    width: 321.26,
    height: 43,
    backgroundColor: "rgba(240,218,160,1)",
    position: "absolute",
    borderRadius: 10
  },
  materialButtonDark7: {
    top: 300,
    left: 51.21,
    width: 122.6,
    height: 44.07,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute",
    borderRadius: 7
  },
  aroot: {
    flex: 1,
    // backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  acaption: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  materialButtonDark8: {
    top: 300,
    left: 202.2,
    width: 122.6,
    height: 44.07,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute",
    borderRadius: 7
  },
  materialButtonDark9: {
    top: 360,
    left: 25.33,
    width: 319.53,
    height: 50.53,
    position: "absolute",
    backgroundColor: "rgba(250,164,51,1)",
    borderRadius: 10
  },
  rect3: {
    top: 420,
    left: 63.38,
    width: 224.25,
    height: 48.42,
    backgroundColor: "rgba(32,6,34,1)",
    position: "absolute"
  },
  text2: {
    top: 430,
    left: 112.51,
    width: 126,
    height: 20,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  rect4: {
    top: 460,
    left: 63.38,
    width: 224.25,
    height: 40.35,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  text3: {
    top: 470,
    left: 125.08,
    color: "#121212",
    position: "absolute",
    fontSize: 16,
    fontWeight: "bold"
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
    top: 590,
    left: 6.88,
    width: 356.44,
    height: 28,
    color: "#121212",
    position: "absolute"
  }
});
