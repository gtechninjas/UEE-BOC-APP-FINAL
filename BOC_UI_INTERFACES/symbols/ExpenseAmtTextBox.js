import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class ExpenseAmtTextbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      expenseAmt: 0
    }
  }
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput
          keyboardType='numeric'
          placeholder={this.props.inputStyle || "Expense Amount"}
          editable={true}
          style={styles.inputStyle}
          onChangeText={(expenseAmt) => this.setState({ expenseAmt })}
          value={this.state.expenseAmt}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    top: 0,
    left: 0,
    width: 360,
    height: 42,
    flex: 1,
    color: "#000",
    position: "absolute",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    borderRadius: 20,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});
