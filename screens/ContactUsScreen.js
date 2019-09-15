import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

export default class ContactUsScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect2} />
        <View style={styles.rect3} />
        <Text style={styles.text2}>CONTACT US</Text>
        <Text style={styles.text3}>Please use below liks to contact us</Text>
        <View style={styles.rect4} />
        <Image
          source={require("../assets/images/mobile-recharge.svg")}
          resizeMode={"contain"}
          style={styles.image2}
        />
        <Image
          source={require("../assets/images/info.svg")}
          resizeMode={"contain"}
          style={styles.image3}
        />
        <Image
          source={require("../assets/images/calendar.svg")}
          resizeMode={"contain"}
          style={styles.image4}
        />
        <Text style={styles.text4}>Locate a nearby Location</Text>
        <Image
          source={require("../assets/images/Screen-Shot-2013-04-30-at-12.02.35-PM.png")}
          resizeMode={"contain"}
          style={styles.image5}
        />
        <Text style={styles.text5}>You can also write to us at</Text>
        <Text style={styles.text6}>
          Electronic Banking Unit, 21st Floor, Bank Of Ceylon Head Office, No
          01, Bank Of Ceylon Mawatha, Colombo 01
        </Text>
        <Text style={styles.text7}>ebank@boc.lk</Text>
        <TextInput
          placeholder={
            "Privacy & Security | Terms of use @ 2017 Bank Of Ceylon.  All           Rights Reserved"
          }
          style={styles.textInput}
        />
      </View>
    );
  }
}

ContactUsScreen.navigationOptions = {
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
    top: 15.42,
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
  rect3: {
    top: 71.03,
    left: 0,
    width: 376.06,
    height: 71.02,
    backgroundColor: "rgba(228,221,134,1)",
    position: "absolute"
  },
  text2: {
    top: 96.54,
    left: 126.29,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold"
  },
  text3: {
    top: 165.95,
    left: 14.33,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  rect4: {
    top: 207.84,
    left: 0,
    width: 376.06,
    height: 74.25,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  image2: {
    top: 223.26,
    left: 142.97,
    width: 84.26,
    height: 40.2,
    position: "absolute"
  },
  image3: {
    top: 224.87,
    left: 251.58,
    width: 72.1,
    height: 40.2,
    position: "absolute"
  },
  image4: {
    top: 223.26,
    left: 60.89,
    width: 41.04,
    height: 44.6,
    position: "absolute"
  },
  text4: {
    top: 302.76,
    left: 14.33,
    color: "#121212",
    position: "absolute",
    fontSize: 16,
    fontWeight: "bold"
  },
  image5: {
    top: 332.56,
    left: 37.99,
    width: 300.08,
    height: 200,
    backgroundColor: "rgba(213,208,148,1)",
    position: "absolute"
  },
  text5: {
    top: 553.23,
    left: 7.16,
    color: "#121212",
    position: "absolute",
    fontWeight: "bold"
  },
  text6: {
    top: 581.03,
    left: 13,
    color: "#121212",
    position: "absolute",
    fontWeight: "bold"
  },
  text7: {
    top: 644.05,
    left: 12.87,
    color: "#121212",
    position: "absolute",
    fontWeight: "bold"
  },
  textInput: {
    top: 695.75,
    left: 6.88,
    width: 356.44,
    height: 42,
    color: "#121212",
    position: "absolute"
  }
});
