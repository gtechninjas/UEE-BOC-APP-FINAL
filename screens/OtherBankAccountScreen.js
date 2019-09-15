import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity} from "react-native";
import MaterialButtonTransparentHamburger from "../symbols/MaterialButtonTransparentHamburger";
import MaterialUnderlineTextbox16 from "../symbols/MaterialUnderlineTextbox16";
import MaterialUnderlineTextbox17 from "../symbols/MaterialUnderlineTextbox17";
import MaterialUnderlineTextbox18 from "../symbols/MaterialUnderlineTextbox18";
import MaterialButtonDark34 from "../symbols/MaterialButtonDark34";
import MaterialButtonDark35 from "../symbols/MaterialButtonDark35";

export default class OtherBankAccountScreen extends Component {
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
        <Text style={styles.text5}>Other Bank Accounts</Text>
        <Text style={styles.text6}>Beneficiary Details</Text>
        <MaterialUnderlineTextbox16 style={styles.materialUnderlineTextbox16} />
        <MaterialUnderlineTextbox17 style={styles.materialUnderlineTextbox17} />
        <MaterialUnderlineTextbox18 style={styles.materialUnderlineTextbox18} />
        <MaterialButtonDark34 style={styles.materialButtonDark34} />
        <MaterialButtonDark35 style={styles.materialButtonDark35} />
      </View>
    );
  }
}


OtherBankAccountScreen.navigationOptions = {
  header : null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
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
  text5: {
    top: 180,
    left: 101.17,
    color: "rgba(250,164,51,1)",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold"
  },
  text6: {
    top: 200,
    left: 39.48,
    color: "#121212",
    position: "absolute",
    fontSize: 17,
    fontWeight: "bold"
  },
  materialUnderlineTextbox16: {
    top: 260,
    left: 6,
    width: 350,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox17: {
    top: 320,
    left: 6,
    width: 350,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox18: {
    top: 380,
    left: 6,
    width: 350,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonDark34: {
    top: 430,
    left: 31.9,
    width: 300,
    height: 64.8,
    position: "absolute"
  },
  materialButtonDark35: {
    top: 520,
    left: 133.9,
    width: 100,
    height: 44,
    position: "absolute"
  }
});
