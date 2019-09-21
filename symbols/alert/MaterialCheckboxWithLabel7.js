import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, CheckBox } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialCheckboxWithLabel7 extends Component {
  constructor(){
    super();
    this.state={
      check:false
    }
  }
  checkBoxTest(){
    this.setState({
      check:!this.state.check
    })
  }
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}/>
        <Text style={styles.checkLabel}>{this.props.label || "Email"}</Text>
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
    borderRadius: 20
  },
  checkIcon: {
    color: "#3F51B5",
    fontFamily: "roboto-regular",
    fontSize: 28,
    lineHeight: 28
  },
  checkLabel: {
    color: "rgba(255,255,255,1)",
    marginLeft: 2,
    fontSize: 16
  }
});
