import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TextInput
} from "react-native";
import MaterialUnderlineTextbox2 from "../symbols/MaterialUnderlineTextbox2";
import MaterialUnderlineTextbox3 from "../symbols/MaterialUnderlineTextbox3";
import MaterialUnderlineTextbox4 from "../symbols/MaterialUnderlineTextbox4";
import MaterialButtonDark12 from "../symbols/MaterialButtonDark12";
import MaterialButtonDark13 from "../symbols/MaterialButtonDark13";

export default class ForgotPasswordScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect4} />
        <StatusBar style={styles.statusBar} />
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect2} />
        <Text style={styles.text} />
        <View style={styles.rect3} />
        <Text style={styles.text2}>FORGOT PASSWORD</Text>
        <Text style={styles.text3}>EXISTING CUSTOMER</Text>
        <TextInput
          placeholder={
            "Privacy & Security | Terms of use @ 2017 Bank Of Ceylon. All          Rights Reserved"
          }
          style={styles.textInput}
        />
        <MaterialUnderlineTextbox2 style={styles.materialUnderlineTextbox2} />
        <MaterialUnderlineTextbox3 style={styles.materialUnderlineTextbox3} />
        <MaterialUnderlineTextbox4 style={styles.materialUnderlineTextbox4} />
        <MaterialButtonDark12 style={styles.materialButtonDark12} />
        <MaterialButtonDark13 style={styles.materialButtonDark13} />
      </View>
    );
  }
}

ForgotPasswordScreen.navigationOptions = {
    // tabBarLabel: 'Settings',
    // tabBarIcon: ({ focused }) => (
    //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    // ),
    header : null,
  };

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rect4: {
    top: 141,
    left: -0.13,
    width: 376.06,
    height: 74.25,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  statusBar: {},
  rect: {
    top: 0,
    left: 0.13,
    width: 375,
    height: 72.64,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  image: {
    top: 27,
    left: 87.5,
    width: 200,
    height: 41.81,
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
  text: {
    top: 500,
    left: 6.75,
    color: "#121212",
    position: "absolute"
  },
  rect3: {
    top: 71,
    left: -0.13,
    width: 376.06,
    height: 71.02,
    backgroundColor: "#f5af56",
    position: "absolute"
  },
  text2: {
    top: 92,
    left: 90.44,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold"
  },
  text3: {
    top: 160,
    left: 93.87,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  textInput: {
    top: 585,
    left: 4,
    width: 356.44,
    height: 42,
    color: "#121212",
    position: "absolute"
  },
  materialUnderlineTextbox2: {
    top: 250,
    left: 6,
    width: 345.87,
    height: 43,
    backgroundColor: "rgba(240,218,160,1)",
    position: "absolute",
    borderRadius: 10
  },
  materialUnderlineTextbox3: {
    top: 320,
    left: 6,
    width: 344.9,
    height: 43,
    backgroundColor: "rgba(240,218,160,1)",
    position: "absolute",
    borderRadius: 10
  },
  materialUnderlineTextbox4: {
    top: 390,
    left: 6,
    width: 345.87,
    height: 43,
    backgroundColor: "rgba(240,218,160,1)",
    position: "absolute",
    borderRadius: 10
  },
  materialButtonDark12: {
    top: 460,
    left: 32.5,
    width: 110,
    height: 44,
    position: "absolute",
    borderRadius: 5
  },
  materialButtonDark13: {
    top: 460,
    left: 221.07,
    width: 110,
    height: 44,
    position: "absolute",
    borderRadius: 5
  }
});
