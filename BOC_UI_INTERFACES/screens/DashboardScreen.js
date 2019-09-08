import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialButtonGrey2 from "../symbols/MaterialButtonGrey2";
import MaterialButtonTransparentHamburger from "../symbols/MaterialButtonTransparentHamburger";
import MaterialButtonGrey3 from "../symbols/MaterialButtonGrey3";
import MaterialButtonDark20 from "../symbols/MaterialButtonDark20";
import MaterialButtonDark21 from "../symbols/MaterialButtonDark21";
import MaterialButtonDark22 from "../symbols/MaterialButtonDark22";
import MaterialButtonDark23 from "../symbols/MaterialButtonDark23";

export default class DashboardScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.root}>
        <MaterialButtonGrey2 style={styles.materialButtonGrey2} />
        <StatusBar style={styles.statusBar} />
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
        <Text style={styles.text4}>DASHBOARD</Text>
        <View style={styles.rect3} />
        <MaterialButtonTransparentHamburger
          style={styles.materialButtonTransparentHamburger}
        />
        <MaterialButtonGrey3 style={styles.materialButtonGrey3} />
        <Text style={styles.text5}>LKR 50,000.00</Text>
        <Text style={styles.text6}>LKR 0.00</Text>
        <View style={styles.rect4} />
        <MaterialButtonDark20 style={styles.materialButtonDark20}  />
        {/* <MaterialButtonDark21 style={styles.materialButtonDark21} onPress = { () => navigate('ThirdPartyTransfer')}/> */}
        <View style={styles.materialButtonDark21}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('ThirdPartyTransfer')}>
            <Text style={styles.acaption}>Third Party Transfers</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.materialButtonDark22}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('PayBills')}>
            <Text style={styles.acaption}>Pay Bills</Text>
            </TouchableOpacity>
        </View>
        {/* <MaterialButtonDark23 style={styles.materialButtonDark23} /> */}
        <View style={styles.materialButtonDark23}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('ThirdPartyTransferMenu')}>
            <Text style={styles.acaption}>Own Account Transfer</Text>
            </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/img_289761.png")}
          resizeMode={"contain"}
          style={styles.image2}
        />
        <Image
          source={require("../assets/images/512px-Calendar_font_awesome.svg.png")}
          resizeMode={"contain"}
          style={styles.image3}
          onPress = { () => navigate('Reminder')}
        />
        <Image
          source={require("../assets/images/51-512.png")}
          resizeMode={"contain"}
          style={styles.image4}
        />
      </View>
    );
  }
}

DashboardScreen.navigationOptions = {
  header : null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1
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
    fontWeight: "200"
  },
  materialButtonGrey2: {
    top: 160,
    left: 3,
    width: 353.88,
    height: 60,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  statusBar: {},
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 72.64,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  image: {
    top: 15,
    left: 0,
    width: 78,
    height: 29.81,
    position: "absolute"
  },
  rect2: {
    top: 700.36,
    left: -0.13,
    width: 375.26,
    height: 78.44,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  textInput: {
    top: 725.58,
    left: 6.75,
    width: 356.44,
    height: 42,
    color: "#121212",
    position: "absolute"
  },
  text2: {
    top: 45,
    fontSize: 10,
    left: 9.31,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text3: {
    top: 58,
    left: 9.31,
    fontSize: 10,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text4: {
    top: 23,
    left: 141.68,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  rect3: {
    top: 72,
    left: -3.5,
    width: 382,
    height: 76,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonTransparentHamburger: {
    top: 86,
    left: 311.19,
    width: 52,
    height: 46,
    position: "absolute"
  },
  materialButtonGrey3: {
    top: 240,
    left: 3,
    width: 353.88,
    height: 60,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  text5: {
    top: 180,
    left: 254,
    color: "#121212",
    position: "absolute"
  },
  text6: {
    top: 260,
    left: 254,
    color: "#121212",
    position: "absolute"
  },
  rect4: {
    top: 320,
    left: -8.5,
    width: 392,
    height: 92,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonDark20: {
    top: 450,
    left: 34,
    width: 138,
    height: 54,
    position: "absolute"
  },
  materialButtonDark21: {
    top: 550,
    left: 34,
    width: 138,
    height: 54,
    position: "absolute"
  },
  materialButtonDark22: {
    top: 450,
    left: 199.19,
    width: 138,
    height: 53.47,
    position: "absolute"
  },
  materialButtonDark23: {
    top: 550,
    left: 199.19,
    width: 138,
    height: 54,
    position: "absolute"
  },
  image2: {
    top: 340,
    left: -32,
    width: 182,
    height: 53.77,
    position: "absolute"
  },
  image3: {
    top: 340,
    left: 100.5,
    width: 174,
    height: 56.82,
    position: "absolute"
  },
  image4: {
    top: 340,
    left: 222.41,
    width: 168.39,
    height: 59.86,
    position: "absolute"
  }
});
