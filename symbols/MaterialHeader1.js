import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class MaterialHeader1 extends Component {
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(250,164,51,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  }
});
