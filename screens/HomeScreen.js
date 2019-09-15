import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text  } from "react-native";
import MaterialButtonDark from "../symbols/MaterialButtonDark";
import MaterialButtonDark1 from "../symbols/MaterialButtonDark1";
import MaterialButtonDark2 from "../symbols/MaterialButtonDark2";
import MaterialButtonDark3 from "../symbols/MaterialButtonDark3";
import MaterialButtonDark4 from "../symbols/MaterialButtonDark4";
import MaterialButtonDark5 from "../symbols/MaterialButtonDark5";
import MaterialButtonDark6 from "../symbols/MaterialButtonDark6";
import { } from 'react-navigation';

export default class HomeScreen extends Component {
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
        <MaterialButtonDark style={styles.materialButtonDark} />
        <View style={styles.materialButtonDark1}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('Login')}>
            <Text style={styles.acaption}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.materialButtonDark2}>
            <TouchableOpacity style={[styles.broot, this.props.style]} onPress = { () => navigate('ContactUs')}>
            <Text style={styles.bcaption}>CONTACT US</Text>
            </TouchableOpacity>
        </View>
        <MaterialButtonDark3 style={styles.materialButtonDark3} />
        <MaterialButtonDark4 style={styles.materialButtonDark4} />
        <View style={styles.materialButtonDark6}>
            <TouchableOpacity style={[styles.calculatorroot, this.props.style]} onPress = { () => navigate('BudgetCalculator')}>
            <Text style={styles.calculatorcaption}>CALCULATOR</Text>
            </TouchableOpacity>
        </View>
        <MaterialButtonDark5 style={styles.materialButtonDark5} />
        <View style={styles.rect2} />
        <TextInput readonly="true"
          placeholder={
            "Privacy & Security | Terms of use @ 2017 Bank Of Ceylon.  All           Rights Reserved"
          }
          style={styles.textInput}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
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
    top: 27,
    left: 87.63,
    width: 200,
    height: 41.81,
    position: "absolute"
  },
  materialButtonDark: {
    top: 30,
    left: 260,
    borderRadius: 5,
    width: 88,
    height: 29.54,
    position: "absolute"
  },
  materialButtonDark1: {
    top: 143.66,
    left: "8.29%",
    width: 313.07,
    height: 68.28,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute",
    borderRadius: 10
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
  materialButtonDark2: {
    top: 238.9,
    left: "8.5%",
    width: 313.07,
    height: 71.51,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute",
    borderRadius: 10
  },
  broot: {
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
  bcaption: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  materialButtonDark3: {
    top: 380,
    left: 28.35,
    width: 316.61,
    height: 36,
    position: "absolute",
    borderRadius: 10
  },
  materialButtonDark4: {
    top: 420,
    left: 28.35,
    width: 316.61,
    height: 36,
    position: "absolute",
    borderRadius: 10
  },
  materialButtonDark5: {
    top: 460,
    left: 28.35,
    width: 316.61,
    height: 36,
    position: "absolute",
    borderRadius: 10
  },
  materialButtonDark6: {
    top: 500,
    left: 27.55,
    width: 320.16,
    height: 36,
    position: "absolute",
    borderRadius: 10
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
    top: 570,
    left: 6.88,
    width: 356.44,
    height: 42,
    color: "#121212",
    position: "absolute"
  },
  calculatorroot: {
    flex: 1,
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  calculatorcaption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
