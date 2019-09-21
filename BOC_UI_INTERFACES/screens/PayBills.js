import React, { Component } from "react";
import { StyleSheet, View, Image, Text,TouchableOpacity, Alert } from "react-native";
import MaterialButtonViolet9 from "../symbols/MaterialButtonViolet9";
import { Dropdown } from 'react-native-material-dropdown';
import { } from 'react-navigation';
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';
export default class PayBills extends Component {
  constructor(props) {
    super(props);
    this.state = {showPayeeDetails: false}
  }

  render() {
    const {navigate} = this.props.navigation;

    const customerList = [{
      value: 'S.A. Withanage',
    }, {
      value: 'D.S. Amarasinghe',
    }, {
      value: 'Navod Hewathunga',
    },
    {
      value: 'Pasindu Kulasooriya',
    }];
    const showPayeeDetails = () =>{
      this.setState({ showPayeeDetails: false })
   }
    const payeeList = [{
        value: 'Electricity Bill',
      }, {
        value: 'Water Bill',
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
      <Text style={styles.text2}>PAY BILLS</Text>

      <View style={styles.customerCategoryListStyle}>
        <Dropdown
        label='Select Customer'
        data={customerList}
      /></View>
      <View style={styles.payeeCategoryListStyle}>
      <Dropdown
        label='Select Payee'
        data={payeeList}
      />
      </View>
        <View style={styles.materialButtonViolet7}>
        <TouchableOpacity style={[styles.payBillsRoot, this.props.style]} onPress = { () => navigate('AddPayBills')}>
        <Text style={styles.payBillsCaption}>NEXT</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.materialButtonViolet8}>
            <TouchableOpacity style={[styles.cancelroot,this.props.style]} onPress = { () => navigate('Dashboard')}>
            <Text style={styles.cancelcaption}>CANCEL</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
PayBills.navigationOptions = {
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
  payBillsRoot: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 5,
    borderWidth: 3,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  payBillsCaption: {
    color: "white",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
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
  customerCategoryListStyle: {
    top: 250,
    left: "7.2%",
    width: 321.26,
    height: 43,
    position: "absolute"
  },
  payeeCategoryListStyle: {
    top: 350,
    left: "7.2%",
    width: 321.26,
    height: 43,
    position: "absolute"
  },
  text2: {
    top: 96.54,
    left: 140.29,
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
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 5,
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
    color: "white",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
