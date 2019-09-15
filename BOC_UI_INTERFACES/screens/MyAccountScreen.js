import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Center } from "@builderx/utils";
import MaterialBasicTab from "../components/MaterialBasicTab";

export default class MyAccountScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect3} />
        <Text style={styles.text2}>My Account</Text>
        <Center horizontal>
          <Text style={styles.text}>Text Added</Text>
        </Center>
        <MaterialBasicTab style={styles.materialBasicTab} />
        <Center horizontal>
          <Text style={styles.text2}>Text Added</Text>
        </Center>
        <Text style={styles.text3}>Text Added</Text>
        <Text style={styles.text4}>Text Added</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  rect: {
    top: 240,
    left: 36.2,
    width: 304,
    height: 166,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  materialHeader2: {
    top: 111.97,
    left: 0,
    width: 375,
    height: 83,
    position: "absolute"
  },
  materialHeader1: {
    top: 30.47,
    width: 375,
    height: 83,
    position: "absolute"
  },
  image: {
    top: 26.28,
    left: 134.39,
    width: 104.24,
    height: 92.5,
    position: "absolute"
  },
  text: {
    top: 290.4,
    color: "#121212",
    position: "absolute"
  },
  materialBasicTab: {
    top: 418.06,
    left: "0%",
    width: 375,
    height: 331.91,
    backgroundColor: "rgba(244,67,54,1)",
    position: "absolute"
  },
  text2: {
    top: 264.2,
    color: "#121212",
    position: "absolute"
  },
  text3: {
    top: 337.2,
    left: 151.82,
    color: "#121212",
    position: "absolute"
  },
  text4: {
    top: 363.2,
    left: 151.82,
    color: "#121212",
    position: "absolute"
  }
});
