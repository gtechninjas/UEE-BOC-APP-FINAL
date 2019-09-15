import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import MaterialButtonTransparentHamburger from "../symbols/MaterialButtonTransparentHamburger";
import MaterialButtonDark28 from "../symbols/MaterialButtonDark28";
import MaterialButtonDark29 from "../symbols/MaterialButtonDark29";

export default class ThirdPartyTransferMenuScreen extends Component {
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
        <TextInput
          placeholder={
            "Privacy & Security | Terms of use @ 2017 Bank Of Ceylon.  All           Rights Reserved"
          }
          style={styles.textInput}
        />
        <Text style={styles.text2}>Welcome S A Vithanage</Text>
        <Text style={styles.text3}>Last login Aug 05 2019</Text>
        <Text style={styles.text4}>Dashboard</Text>
        <View style={styles.rect3} />
        <MaterialButtonTransparentHamburger
          style={styles.materialButtonTransparentHamburger}
        />
        {/* <MaterialButtonDark28 style={styles.materialButtonDark28} /> */}
        <View style={styles.materialButtonDark28}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('ThirdPartyBOCAccount')}>
            <Text style={styles.acaption}>Third Party - BOC Accounts</Text>
            </TouchableOpacity>
        </View>
        {/* <MaterialButtonDark29 style={styles.materialButtonDark29} /> */}
        <View style={styles.materialButtonDark29}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('OtherBankAccCreditMenu')}>
            <Text style={styles.acaption}>Other Banks Accounts & Cards</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ThirdPartyTransferMenuScreen.navigationOptions = {
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
  aroot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    backgroundColor: "black",
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  acaption: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200",
    borderRadius: 5
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
    left: 310.11,
    width: 52,
    height: 46,
    position: "absolute"
  },
  materialButtonDark28: {
    top: 241.67,
    left: 17,
    width: 328,
    height: 88.5,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute",
    borderRadius: 10
  },
  materialButtonDark29: {
    top: 376.17,
    left: 17,
    width: 328,
    height: 88.5,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0
  }
});
