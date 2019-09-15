import React, { Component } from "react";
import { StyleSheet, View, Image, Text,TouchableOpacity, Alert , TextInput, Button} from "react-native";
import { Dropdown } from 'react-native-material-dropdown';
import { } from 'react-navigation';
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';
import DialogInput from 'react-native-dialog-input';
import DateTimePicker from "react-native-modal-datetime-picker";

export default class AddPayBills extends Component {
  constructor(props) {
    super(props);
  
    this.state = { accountName: 'From Account'||'',
                   billAmt:0||0 , 
                   showPayNowSuccess: false,
                   showPayOnSuccess: false,                  
                   showPayNowAbort: false,
                   showPayOnAbort: false,  
                   isPayOnDialogVisible: false, 
                   isPayPeriodicallyModalVisible_perweek: false,
                   isPayPeriodicallyModalVisible_permonth: false,
                   isPayPeriodicallyModalVisible: false,
                   isDateTimePickerVisible: false,
                   date: '',
                   showAbort: false
                } 
  }

  showPayOnDialog(isShow){
    this.setState({isPayOnDialogVisible: isShow});
  }
  showPayPeriodicallyModal(isShow){
    this.setState({isPayPeriodicallyModalVisible: isShow});
  }
  showPayPeriodicallyModal_PerWeek(isShow){
    this.setState({isPayPeriodicallyModalVisible_perweek: isShow});
  }
  showPayPeriodicallyModal_PerMonth(isShow){
    this.setState({isPayPeriodicallyModalVisible_permonth: isShow});
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = date => {
    this.hideDateTimePicker();
    this.setState({ date: date })
    this.showPayOnSuccessAlert();

  };
  showPayOnSuccessAlert = () =>{
    this.setState({ showPayOnSuccess: true })
  }
 closePayOnSuccessAlert = () =>{
   this.setState({ showPayOnSuccess: false })
 }

  showPayOnAbortAlert = () =>{
   this.setState({ showPayOnAbort: true })
  }
  render() {
    const {navigate} = this.props.navigation;

   //Pay Now

    const showPayNowSuccessAlert = () =>{
       this.setState({ showPayNowSuccess: true })
     }
    const closePayNowSuccessAlert = () =>{
      this.setState({ showPayNowSuccess: false })
    }

     const showPayNowAbortAlert = () =>{
      this.setState({ showPayNowAbort: true })
     }
     const showAbortAlert = () =>{
        this.setState({ showAbort: true })
       }
       
    const accountList = [{
      value: 'ACCC0001',
    }, {
      value: 'ACCC0002',
    }, {
      value: 'ACCC0003',
    }];

    const dayList = [{
      value: 'Monday',
    }, {
      value: 'Tuesday',
    }, {
      value: 'Wednesday',
    }, {
      value: 'Thursday',
    }, {
      value: 'Friday',
    }, {
      value: 'Saturday',
    }, {
      value: 'Sunday',
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

      <View style={styles.accountListStyle}>
        <Dropdown
        label='From Account'
        data={accountList}
        editable={true}
      /></View>
       <View style={[styles.billAmtRoot, this.props.style]}>
        <TextInput
          keyboardType='numeric'
          placeholder={this.props.inputStyle || "Bill Amount"}
          editable={true}
          style={styles.billAmtInputStyle}
          onChangeText={(billAmt) => this.setState({ billAmt })}
          value={this.state.billAmt}
        />
      </View>
        <View style={styles.materialButtonViolet7} >
        <TouchableOpacity style={[styles.addBillBtnRoot, this.props.style]} onPress = {showPayNowSuccessAlert}>
        <Text style={styles.addBillBtnCaption}>PAY NOW</Text>
      </TouchableOpacity>
      <SCLAlert
          theme="success"
          show={this.state.showPayNowSuccess}
          title="Bill Payment"
          subtitle={'From account : '+this.state.accountName +' :Rs. '+this.state.billAmt}
        >
          <SCLAlertButton theme="success" onPress={closePayNowSuccessAlert}>Done</SCLAlertButton>
        </SCLAlert>
       </View>
        <View style={styles.materialButtonViolet8}>
            <TouchableOpacity style={[styles.cancelroot,this.props.style]} onPress={this.showDateTimePicker}>
            <Text style={styles.cancelcaption}>PAY ON</Text>
            </TouchableOpacity>
            <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
            />
            <SCLAlert
                theme="success"
                show={this.state.showPayOnSuccess}
                title="Bill Payment"
                subtitle={'From account : '+this.state.accountName +' :Rs. '+this.state.billAmt+ ' , On '+this.state.date}
            >
          <SCLAlertButton theme="success" onPress={this.closePayOnSuccessAlert}>Confirm</SCLAlertButton>
          <SCLAlertButton theme="danger" onPress={this.closePayOnSuccessAlert}>Cancel</SCLAlertButton>
        </SCLAlert>
        </View>

        <View style={styles.materialButtonViolet9} >
        <TouchableOpacity style={[styles.addBillBtnRoot, this.props.style]} >
        <Text style={styles.addBillBtnCaption}>PAY PERIODICALLY</Text>
        </TouchableOpacity>
       </View>
        <View style={styles.materialButtonViolet10}>
            <TouchableOpacity style={[styles.cancelroot,this.props.style]} onPress = { showAbortAlert}>
            <Text style={styles.cancelcaption}>CANCEL</Text>
            </TouchableOpacity>
            <SCLAlert
          theme="danger"
          show={this.state.showAbort}
          title="Abort"
          subtitle='Payment aborted'
        >
          <SCLAlertButton theme="danger" onPress = { () => navigate('PayBills')}>Abort</SCLAlertButton>
        </SCLAlert>
        </View>
       
      </View>
    );
  }
}
AddPayBills.navigationOptions = {
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
  billAmtRoot: {
    flex: 1,
    backgroundColor: "transparent",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    top: 360,
    left: "7.2%",
    width: 321.26,
    height: 43,
    backgroundColor: "rgba(255,255,255,100)",
    position: "absolute",
    borderRadius: 10
  },
  billAmtInputStyle: {
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
  },
  addBillBtnRoot: {
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
    borderColor: "#000000",
    borderWidth: 3,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  addBillBtnCaption: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  accountListStyle: {
    top: 250,
    left: "7.2%",
    width: 321.26,
    height: 43,
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
    top: 480.00,
    left: 28.26,
    width: 150,
    height: 100,
    position: "absolute"
  },
  materialButtonViolet9: {
    top: 590.00,
    left: 28.26,
    width: 150,
    height: 100,
    position: "absolute"
  },
  billListStyle: {
    top: 160,
    left: "7.2%",
    width: 321.26,
    height: 43,
    position: "absolute"
  },
  billAmtStyle: {
    top: 280,
    left: "7.2%",
    width: 321.26,
    height: 43,
    backgroundColor: "rgba(255,255,255,100)",
    position: "absolute",
    borderRadius: 10
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
    top: 480.00,
    left: 200.38,
    width: 150,
    height: 100,
    position: "absolute"
  },
  materialButtonViolet10: {
    top: 590.00,
    left: 200.38,
    width: 150,
    height: 100,
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
    borderColor: "#000000",
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
