import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";

export default class MaterialButtonViolet7 extends Component {
  render() {
    const showAlert = () =>{
      Alert.alert(
         'Expenses added Succesfully!'
      )
   }
    return (
      <TouchableOpacity style={[styles.root, this.props.style]} onPress = {showAlert}>
        <Text style={styles.caption}>ADD</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 5,
    borderColor: "rgba(57,173,11,1)",
    borderWidth: 3,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
