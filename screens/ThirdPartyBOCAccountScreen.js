import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import MaterialButtonTransparentHamburger from "../symbols/MaterialButtonTransparentHamburger";
import MaterialUnderlineTextbox12 from "../symbols/MaterialUnderlineTextbox12";
import MaterialUnderlineTextbox13 from "../symbols/MaterialUnderlineTextbox13";
import MaterialUnderlineTextbox14 from "../symbols/MaterialUnderlineTextbox14";
import MaterialUnderlineTextbox15 from "../symbols/MaterialUnderlineTextbox15";
import MaterialButtonDark30 from "../symbols/MaterialButtonDark30";
import MaterialButtonDark31 from "../symbols/MaterialButtonDark31";
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';


export default class ThirdPartyBOCAccountScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {showSuccess: false, showAbort: false} 
  }

  render() {
    const {navigate} = this.props.navigation;

    const showSuccessAlert = () =>{
      this.setState({ showSuccess: true })
    }
   const closeSuccessAlert = () =>{
     this.setState({ showSuccess: false })
  }

  const showAbortAlert = () =>{
   this.setState({ showAbort: true })
 }
const closeAbortAlert = () =>{
  this.setState({ showAbort: false })
}

    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect2} />
        <TextInput
          placeholder={
            "Privacy & Security | Terms of use @ 2017 Bank Of Ceylon.  All           Rights Reserved"
          }
          style={styles.textInput}
        />
        <Text style={styles.text2}>Welcome S A Vithanage</Text>
        <Text style={styles.text3}>Last login Aug 05 2019</Text>
        <Text style={styles.text4}>Dashboard</Text>
        <View style={styles.rect3} />
        <MaterialButtonTransparentHamburger
          style={styles.materialButtonTransparentHamburger}
        />
        <Text style={styles.text5}>Third Party - BOC Accounts Beneficiary</Text>
        <Text style={styles.text6}>Beneficiary Info</Text>
        <MaterialUnderlineTextbox12 style={styles.materialUnderlineTextbox12} />
        <MaterialUnderlineTextbox13 style={styles.materialUnderlineTextbox13} />
        <MaterialUnderlineTextbox14 style={styles.materialUnderlineTextbox14} />
        <MaterialUnderlineTextbox15 style={styles.materialUnderlineTextbox15} />
        {/* <MaterialButtonDark30 style={styles.materialButtonDark30} /> */}
        <View style={styles.materialButtonDark30}>
            <TouchableOpacity style={[styles.aroot,this.props.style]} onPress = { showAbortAlert}>
            <Text style={styles.acaption}>Cancel</Text>
            </TouchableOpacity>
            <SCLAlert
          theme="danger"
          show={this.state.showAbort}
          title="Abort"
          subtitle='submission aborted'
        >
          <SCLAlertButton theme="danger" onPress = { () => navigate('ThirdPartyTransferMenu')}>Abort</SCLAlertButton>
        </SCLAlert>
        </View>
        <View style={styles.materialButtonDark31} >
        <TouchableOpacity style={[styles.thirdPartyBOCAcctScreenBtnRoot, this.props.style]} onPress = {showSuccessAlert}>
        <Text style={styles.thirdPartyBOCAcctScreenBtnCaption}>Submit</Text>
        </TouchableOpacity>
        <SCLAlert
          theme="success"
          show={this.state.showSuccess}
          title="Success"
          subtitle="Successfully Submitted"
        >
          <SCLAlertButton theme="success" onPress={closeSuccessAlert}>Done</SCLAlertButton>
        </SCLAlert>
        </View>
        <Text style={styles.text7}>
          Entered beneficiary name will be displayed on the E-Receipt
        </Text>
      </View>
    );
  }
}

ThirdPartyBOCAccountScreen.navigationOptions = {
  header : null,
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  thirdPartyBOCAcctScreenBtnRoot:{
    flex: 1,
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  thirdPartyBOCAcctScreenBtnCaption:{
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  aroot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    backgroundColor: "black",
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  acaption: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200",
    borderRadius: 5
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 78,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  image: {
    top: 18,
    left: 3.5,
    width: 78,
    height: 29.81,
    position: "absolute"
  },
  rect2: {
    top: 570,
    left: 0,
    width: 375.26,
    height: 78.44,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  textInput: {
    top: 578,
    left: 1,
    width: 356.44,
    height: 42,
    color: "#121212",
    position: "absolute"
  },
  text2: {
    top: 50,
    fontSize: 10,
    left: 12.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text3: {
    top: 60,
    fontSize: 10,
    left: 12.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text4: {
    top: 23,
    left: 145.18,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  rect3: {
    top: 77,
    left: 0,
    width: 382,
    height: 78.44,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonTransparentHamburger: {
    top: 97.64,
    left: 310.11,
    width: 52,
    height: 46,
    position: "absolute"
  },
  text5: {
    top: 160,
    left: 22,
    color: "rgba(250,164,51,1)",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  text6: {
    top: 180,
    left: 23.76,
    color: "#121212",
    position: "absolute",
    fontSize: 16,
    fontWeight: "bold"
  },
  materialUnderlineTextbox12: {
    top: 220,
    left: 1,
    width: 357,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox13: {
    top: 280,
    left: 1,
    width: 357,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox14: {
    top: 340,
    left: 1,
    width: 357,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox15: {
    top: 400,
    left: 1,
    width: 357,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonDark30: {
    top: 500,
    left: 37.9,
    width: 122.68,
    height: 47,
    position: "absolute",
    borderRadius: 5
  },
  materialButtonDark31: {
    top: 500,
    left: 213.43,
    width: 122.68,
    height: 47,
    position: "absolute",
    borderRadius: 5
  },
  text7: {
    top: 460,
    left: 12.81,
    color: "rgba(250,164,51,1)",
    position: "absolute",
    fontWeight: "bold"
  }
});
