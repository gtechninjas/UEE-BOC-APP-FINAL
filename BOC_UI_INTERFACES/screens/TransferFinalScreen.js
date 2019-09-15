import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import MaterialButtonTransparentHamburger from "../symbols/MaterialButtonTransparentHamburger";
import MaterialUnderlineTextbox23 from "../symbols/MaterialUnderlineTextbox23";
import MaterialUnderlineTextbox24 from "../symbols/MaterialUnderlineTextbox24";
import MaterialButtonDark33 from "../symbols/MaterialButtonDark33";
import MaterialButtonDark38 from "../symbols/MaterialButtonDark38";
import MaterialButtonDark39 from "../symbols/MaterialButtonDark39";
import MaterialButtonDark40 from "../symbols/MaterialButtonDark40";
import MaterialUnderlineTextbox25 from "../symbols/MaterialUnderlineTextbox25";
import MaterialUnderlineTextbox26 from "../symbols/MaterialUnderlineTextbox26";
import { Dropdown } from 'react-native-material-dropdown';
import axios from 'axios';
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';

export default class TransferFinalScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {showSuccess: false, showAbort: false }
  }
  render() {
    const showSuccessAlert = () => {
      this.setState({ showSuccess: true })
    }
    const closeSuccessAlert = () => {
      this.setState({ showSuccess: false })
    }

    const showAbortAlert = () => {
      this.setState({ showAbort: true })
    }
    const closeAbortAlert = () => {
      this.setState({ showAbort: false })
    }
    const payList = [{
      value: 'Suren 213123123',
    }, {
      value: 'Test 2321313',
    }, {
      value: 'CBC 21323232',
    },
    {
      value: 'HNB 234324234',
    }];

    const sourceList = [{
      value: 'BOC 34234234',
    }, {
      value: 'HNB 234234234',
    }, {
      value: 'CBC 2342342',
    },
    {
      value: 'HNB 123242342',
    }];
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
        <Text style={styles.text5}>Source</Text>
        <Text style={styles.text6}>Pay</Text>
        <Text style={styles.text7}>Transfer</Text>
        <MaterialUnderlineTextbox23 style={styles.materialUnderlineTextbox23} />
        <MaterialUnderlineTextbox24 style={styles.materialUnderlineTextbox24} />
        <MaterialButtonDark33 style={styles.materialButtonDark33} />
        <MaterialButtonDark39 style={styles.materialButtonDark39} />
        <MaterialButtonDark40 style={styles.materialButtonDark40} />
        <View style={styles.materialButtonDark38} >
          <TouchableOpacity style={[styles.transferFinalBtnRoot, this.props.style]} onPress={showSuccessAlert}>
            <Text style={styles.transferFinalBtnCaption}>PayOn</Text>
          </TouchableOpacity>
          <SCLAlert
            theme="success"
            show={this.state.showSuccess}
            title="Success"
            subtitle="Successfully transfered"
          >
            <SCLAlertButton theme="success" onPress={closeSuccessAlert}>Done</SCLAlertButton>
          </SCLAlert>
        </View>
        {/* <MaterialUnderlineTextbox25 style={styles.materialUnderlineTextbox25} /> */}
        <View style={styles.materialUnderlineTextbox25}>
          <Dropdown
            label='Select Pay'
            data={payList}
          />
        </View>
        <View style={styles.materialUnderlineTextbox26}>
          <Dropdown
            label='Select Source'
            data={sourceList}
          />
        </View>
        {/* <MaterialUnderlineTextbox26 style={styles.materialUnderlineTextbox26} /> */}
      </View>
    );
  }
}


TransferFinalScreen.navigationOptions = {
  header : null,
};

const styles = StyleSheet.create({
  transferFinalBtnRoot: {
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
  transferFinalBtnCaption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  root: {
    flex: 1,
    backgroundColor: "white"
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
    top: 58.64,
    left: 12.81,
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  text4: {
    top: 12.41,
    left: 145.17,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold"
  },
  rect3: {
    top: 72.63,
    left: 0,
    width: 382,
    height: 96,
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
    top: 250,
    left: 23.68,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "800"
  },
  text6: {
    top: 170,
    left: 29.27,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "800"
  },
  text7: {
    top: 320,
    left: 20.34,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontWeight: "800"
  },
  materialUnderlineTextbox23: {
    top: 350,
    left: 13.9,
    width: 360,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialUnderlineTextbox24: {
    top: 400,
    left: 13.9,
    width: 360,
    height: 43,
    backgroundColor: "rgba(24,24,24,1)",
    position: "absolute"
  },
  materialButtonDark33: {
    top: 460,
    left: 45.4,
    width: 119.18,
    height: 54,
    position: "absolute",
    borderRadius: 5
  },
  materialButtonDark38: {
    top: 460,
    left: 222.1,
    width: 114,
    height: 54,
    position: "absolute",
    borderRadius: 5
  },
  materialButtonDark39: {
    top: 520,
    left: 45.4,
    width: 119.18,
    height: 50,
    position: "absolute",
    borderRadius: 5
  },
  materialButtonDark40: {
    top: 520,
    left: 222.1,
    width: 114,
    height: 50,
    position: "absolute",
    borderRadius: 5
  },
  materialUnderlineTextbox25: {
    top: 160,
    left: 13.9,
    width: 360,
    height: 43,
    position: "absolute"
  },
  materialUnderlineTextbox26: {
    top: 240,
    left: 13.9,
    width: 360,
    height: 43,
    position: "absolute"
  }
});
