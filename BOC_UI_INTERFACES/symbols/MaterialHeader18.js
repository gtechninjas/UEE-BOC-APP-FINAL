import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

export default class MaterialHeader18 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.textWrapper}>
          <TextInput
            placeholder={"ADD EXPENSE"}
            numberOfLines={1}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.rightIconButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(213,208,148,1)",
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
  },
  textWrapper: {
    left: 126.05,
    position: "absolute",
    bottom: 22
  },
  textInput: {
    width: 122.91,
    height: 18,
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-regular",
    fontWeight: "600",
    lineHeight: 18
  },
  rightIconButton: {
    top: 5,
    position: "absolute",
    alignItems: "center",
    right: 5,
    padding: 11
  }
});
