import React, { Component } from "react";
import { StyleSheet, View, Image, Text,TouchableOpacity, Alert } from "react-native";
import MaterialButtonViolet7 from "../symbols/MaterialButtonViolet7";
import { Dropdown } from 'react-native-material-dropdown';
import { } from 'react-navigation';
import ExpenseAmtTextBox from "../symbols/ExpenseAmtTextBox";
import ExpenseDescrTextBox from "../symbols/ExpenseDescrTextBox";

export default class AddExpense extends Component {
  constructor(props) {
    super(props);
  
    this.state = { amount: '', description: '' }

  
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  
  
  handleAmountChange(amount) {
    this.setState({ amount });
  }
  handleDescriptionChange(description) {
    this.setState({ description });
  }
  render() {
    const {navigate} = this.props.navigation;
    
    const expenseCategoryList = [{
      value: 'Food & Grocerries',
    }, {
      value: 'Utility Bills',
    }, {
      value: 'Travel',
    },
    {
      value: 'Debts Repayment',
    },{
      value: 'Family Expenses',
    },{
      value: 'Other Monthly Expenses',
    }];
    return (
      <View style={styles.root}>
      <View style={styles.rect} />
      <Image
        source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
        resizeMode={"contain"}
        style={styles.image}
      />
      <View style={styles.rect3} />
      <Text style={styles.text2}>ADD EXPENSE</Text>

      <View style={styles.expenseCategoryListStyle}>
        <Dropdown
        label='Expense Category'
        data={expenseCategoryList}
      /></View>
      <ExpenseAmtTextBox style={styles.expenseAmtStyle} />
      <ExpenseDescrTextBox style={styles.expenseDescriptionStyle} />
        <MaterialButtonViolet7 style={styles.materialButtonViolet7} />
        <View style={styles.materialButtonViolet8}>
            <TouchableOpacity style={[styles.cancelroot,this.props.style]} onPress = { () => navigate('BudgetCalculator')}>
            <Text style={styles.cancelcaption}>CANCEL</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
AddExpense.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    top: 0,
    left: 0.13,
    width: 375,
    height: 72.64,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  rect2: {
    top: 670.53,
    left: 0,
    width: 375.26,
    height: 78.44,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  rect3: {
    top: 71.03,
    left: 0,
    width: 376.06,
    height: 71.02,
    backgroundColor: "rgba(228,221,134,1)",
    position: "absolute"
  },
  materialHeader4: {
    top: 28.88,
    left: 0,
    width: 375,
    height: 83,
    position: "absolute"
  },
  materialHeader18: {
    top: 111.97,
    left: -1.2,
    width: 375,
    height: 56,
    position: "absolute"
  },
  image: {
    top: 15.42,
    left: 87.63,
    width: 200,
    height: 41.81,
    position: "absolute"
  },
  materialButtonViolet7: {
    top: 580.00,
    left: 62.26,
    width: 100,
    height: 36,
    position: "absolute"
  },
  expenseCategoryListStyle: {
    top: 160,
    left: "7.2%",
    width: 321.26,
    height: 43,
    position: "absolute"
  },
  expenseAmtStyle: {
    top: 280,
    left: "7.2%",
    width: 321.26,
    height: 43,
    backgroundColor: "rgba(255,255,255,100)",
    position: "absolute",
    borderRadius: 10
  },
  expenseDescriptionStyle: {
    top: 390,
    left: "7.2%",
    width: 321.26,
    height: 43,
    backgroundColor: "rgba(255,255,255,100)",
    position: "absolute",
    borderRadius: 10
  },
  text2: {
    top: 96.54,
    left: 100.29,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold"
  },
  materialButtonViolet8: {
    top: 580.00,
    left: 219.38,
    width: 100,
    height: 36,
    position: "absolute"
  },
  cancelroot: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 5,
    borderColor: "rgba(208,2,27,1)",
    borderWidth: 3,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  cancelcaption: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
