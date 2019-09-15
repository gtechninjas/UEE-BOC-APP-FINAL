import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialButtonMessage extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]} onPress = { () => navigate('ThirdPartyTransfer')}>
        <Icon
          name={this.props.iconName || "share-variant"}
          type={this.props.iconFamily || "MaterialCommunityIcons"}
          style={styles.icon}
        />

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#3F51B5",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "#fff",
    fontFamily: "roboto-regular",
    fontSize: 24,
    alignSelf: "center"
  }

});
