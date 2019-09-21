import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCheckboxWithLabel1 from "../symbols/alert/MaterialCheckboxWithLabel1";
import MaterialCheckboxWithLabel3 from "../symbols/alert/MaterialCheckboxWithLabel3";
import { Center } from "@builderx/utils";
import MaterialCheckboxWithLabel4 from "../symbols/alert/MaterialCheckboxWithLabel4";
import MaterialCheckboxWithLabel5 from "../symbols/alert/MaterialCheckboxWithLabel5";
import MaterialCheckboxWithLabel6 from "../symbols/alert/MaterialCheckboxWithLabel6";
import MaterialCheckboxWithLabel7 from "../symbols/alert/MaterialCheckboxWithLabel7";
import MaterialButtonDark7 from "../symbols/alert/MaterialButtonDark7";
import MaterialButtonDark8 from "../symbols/alert/MaterialButtonDark8";
import { } from 'react-navigation'

export default class AlertSettingsScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <View style={styles.rect3} />
        <Text style={styles.text}>User Alerts</Text>
        <MaterialCheckboxWithLabel1 style={styles.materialCheckboxWithLabel1} />
        <MaterialCheckboxWithLabel3 style={styles.materialCheckboxWithLabel3} />
        <Center>
          <MaterialCheckboxWithLabel4
            style={styles.materialCheckboxWithLabel4}
          />
        </Center>
        <Center horizontal>
          <MaterialCheckboxWithLabel5
            style={styles.materialCheckboxWithLabel5}
          />
        </Center>
        <MaterialCheckboxWithLabel6 style={styles.materialCheckboxWithLabel6} />
        <MaterialCheckboxWithLabel7 style={styles.materialCheckboxWithLabel7} />
        <View style={styles.materialButtonDark7}>
          <TouchableOpacity style={[styles.broot, this.props.style]} onPress = { () => navigate('Un')}>
          <Text style={styles.bcaption}>Unsubscribe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.materialButtonDark8}>
          <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('Alerts')}>
          <Text style={styles.acaption}>Subscribe</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
    );
  }
}

AlertSettingsScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  rect: {
    top: 0,
    left: 0.18,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  rect2: {
    top: 54.4,
    left: 0.18,
    width: 359.82,
    height: 42.18,
    backgroundColor: "rgba(232,212,48,1)",
    position: "absolute"
  },
  rect3: {
    top: 585.6,
    left: 0,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  text: {
    top: 60.51,
    left: 126.65,
    width: 106.51,
    height: 29.96,
    color: "#121212",
    position: "absolute",
    fontSize: 20
  },
  materialCheckboxWithLabel1: {
    top: 135.01,
    left: 18.41,
    width: 322.99,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel3: {
    top: 243.62,
    left: 17.31,
    width: 324.09,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel4: {
    width: 315.77,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel5: {
    top: 190,
    width: 321.4,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel6: {
    top: 352.23,
    left: 18.3,
    width: 323.4,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel7: {
    top: 430.66,
    left: 17.81,
    width: 324.39,
    height: 64,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialButtonDark7: {
    top: 522,
    left: 30.3,
    width: 122,
    height: 36,
    position: "absolute"
  },
  broot: {
    flex: 1,
    backgroundColor: "#212121",
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
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  materialButtonDark8: {
    top: 522,
    left: 200,
    width: 127.4,
    height: 36,
    position: "absolute"
  },
  aroot: {
    flex: 1,
    backgroundColor: "#212121",
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
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  image: {
    top: 9,
    left: 80,
    width: 200,
    height: 34,
    position: "absolute"
  }
});
