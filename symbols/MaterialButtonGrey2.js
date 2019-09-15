import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class MaterialButtonGrey2 extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>My Assets</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#999999",
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
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
