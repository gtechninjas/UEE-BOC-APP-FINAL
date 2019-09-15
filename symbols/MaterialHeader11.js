import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Center } from "@builderx/utils";

export default class MaterialHeader11 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput placeholder={"Budget Calculator"} style={styles.textInput} />
        <Center>
          <View style={styles.rect}>
            <TextInput
              placeholder={"BUDGET CALCULATOR"}
              numberOfLines={1}
              style={styles.textInput2}
            />
          </View>
        </Center>
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
    opacity: 0.94,
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
  textInput: {
    top: 28,
    left: 152.59,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    color: "rgba(18,18,18,1)",
    position: "absolute",
    alignSelf: "flex-start",
    fontSize: 18,
    fontFamily: "roboto-regular",
    fontWeight: "600",
    lineHeight: 18
  },
  rect: {
    position: "absolute"
  },
  textInput2: {
    width: 190.16,
    height: 23,
    backgroundColor: "transparent",
    color: "rgba(18,18,18,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    fontWeight: "600",
    lineHeight: 18
  }
});
