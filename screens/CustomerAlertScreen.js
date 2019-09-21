import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialFixedLabelTextbox1 from "../symbols/alert/MaterialFixedLabelTextbox1";
import MaterialFixedLabelTextbox2 from "../symbols/alert/MaterialFixedLabelTextbox2";
import CupertinoButtonWhiteTextColor1 from "../symbols/alert/CupertinoButtonWhiteTextColor1";
import CupertinoButtonWhiteTextColor from "../symbols/alert/CupertinoButtonWhiteTextColor";
import {
    SCLAlert,
    SCLAlertButton
  } from 'react-native-scl-alert';
import { } from 'react-navigation'

export default class CustomerAlertScreen extends Component {
    constructor(props) {
        super(props);
      
        this.state = {showSuccess: false, showAbort: false} 
      }
  render() {
    const {navigate} = this.props.navigation;
      const showSuccessAlert = () =>{
        this.setState({ showSuccess: true })
      }
     const closeSuccessAlert = () =>{
       this.setState({ showSuccess: false })
    }
 
    const showAbortAlert = () =>{
     this.setState({ showAbort: true })
   }
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <Text style={styles.text}>Customer Alert</Text>
        <View style={styles.rect3} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <MaterialFixedLabelTextbox1 style={styles.materialFixedLabelTextbox1} />
        <MaterialFixedLabelTextbox2 style={styles.materialFixedLabelTextbox2} />
        <Text style={styles.text3}>Customer Name:</Text>
        <View style={styles.cupertinoButtonWhiteTextColor1}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = {showSuccessAlert}>
            <Text style={styles.acaption}>Add</Text>
            </TouchableOpacity>
            <SCLAlert
                theme="success"
                title="Customer Details"
                subtitle="Successfully Added"
            >
            <SCLAlertButton theme="success" onPress={closeSuccessAlert}>Done</SCLAlertButton>
            </SCLAlert>
        </View>
        <Text style={styles.text4} />
        <Text style={styles.text2}>Customer ID:</Text>
        <View style={styles.cupertinoButtonWhiteTextColor}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('Links')}>
            <Text style={styles.acaption}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

CustomerAlertScreen.navigationOptions = {
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
    left: 115.23,
    width: 151.17,
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
  image: {
    top: 9,
    left: 80,
    width: 200,
    height: 34,
    position: "absolute"
  },
  materialFixedLabelTextbox1: {
    top: 176.5,
    left: 18,
    width: 322.41,
    height: 43,
    position: "absolute"
  },
  materialFixedLabelTextbox2: {
    top: 275.5,
    left: 18.79,
    width: 322.41,
    height: 43,
    position: "absolute"
  },
  text3: {
    top: 259.5,
    left: 18,
    width: 136,
    height: 32,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  cupertinoButtonWhiteTextColor1: {
    top: 509.28,
    left: 230.41,
    width: 110,
    height: 44,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  aroot: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  acaption: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "roboto-regular",
    fontWeight: "500"
  },
  text4: {
    top: 132,
    left: 154,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  text2: {
    top: 160.5,
    left: 18,
    width: 116,
    height: 32,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  cupertinoButtonWhiteTextColor: {
    top: 509.28,
    left: 18,
    width: 116,
    height: 44,
    backgroundColor: "rgba(11,10,10,1)",
    position: "absolute"
  }
});
