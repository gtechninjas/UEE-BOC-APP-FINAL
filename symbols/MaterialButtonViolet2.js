import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class MaterialButtonViolet2 extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>ADD EXPENSE</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(250,164,51,1)",
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
    color: "rgba(0,0,0,1)",
    paddingTop: 50,
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200",
    textAlign: "center"
  }
});
