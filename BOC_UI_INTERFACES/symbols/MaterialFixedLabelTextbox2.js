import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class MaterialFixedLabelTextbox2 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput style={styles.inputStyle} />
        <TextInput placeholder={""} style={styles.textInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    paddingLeft: 30,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  textInput: {
    width: 0,
    height: 24,
    color: "#000",
    alignSelf: "flex-start",
    opacity: 0.5,
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});
