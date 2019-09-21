import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialButtonDark4 from "../symbols/alert/MaterialButtonDark4";
import MaterialButtonDark5 from "../symbols/alert/MaterialButtonDark5";
import MaterialButtonDark6 from "../symbols/alert/MaterialButtonDark6";
import { } from 'react-navigation'

export default class AlertLinksScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <Text style={styles.text}>Manage Alerts</Text>
        <View style={styles.rect3} />
        <View style={styles.materialButtonDark4}>
          <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('Settings')}>
          <Text style={styles.acaption}>User Alerts</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.materialButtonDark5}>
          <TouchableOpacity style={[styles.broot, this.props.style]} onPress = { () => navigate('customer')}>
          <Text style={styles.bcaption}>Customer Alerts</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.materialButtonDark6}>
          <TouchableOpacity style={[styles.croot, this.props.style]} onPress = { () => navigate('account')}>
          <Text style={styles.ccaption}>Account Alerts</Text>
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

AlertLinksScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 0
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
  text: {
    top: 60.51,
    left: 114.26,
    width: 131.47,
    height: 29.96,
    color: "#121212",
    position: "absolute",
    fontSize: 20
  },
  rect3: {
    top: 585.6,
    left: 0,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  materialButtonDark4: {
    top: 128.35,
    left: 18.41,
    width: 323.01,
    height: 37.66,
    position: "absolute",
    borderRadius: 9,
    borderColor: "#000000",
    borderWidth: 1
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
    fontSize: 16,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  materialButtonDark5: {
    top: 189.93,
    left: 18.41,
    width: 323.01,
    height: 37.66,
    position: "absolute",
    borderRadius: 9,
    borderColor: "#000000",
    borderWidth: 1
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
    fontSize: 16,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  materialButtonDark6: {
    top: 251.5,
    left: 18.41,
    width: 323.01,
    height: 40.99,
    position: "absolute",
    borderRadius: 9,
    borderColor: "#000000",
    borderWidth: 1
  },
  croot: {
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
  ccaption: {
    color: "#fff",
    fontSize: 16,
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
