import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class CupertinoButtonWhiteTextColor extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>Cancel</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "roboto-regular",
    fontWeight: "500"
  }
});
