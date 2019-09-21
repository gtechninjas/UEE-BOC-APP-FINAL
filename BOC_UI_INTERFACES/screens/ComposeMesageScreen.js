import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import MaterialFixedLabelTextbox1 from "../symbols/MaterialFixedLabelTextbox1";
import MaterialFixedLabelTextbox2 from "../symbols/MaterialFixedLabelTextbox2";
import CupertinoButtonWhiteTextColor from "../symbols/CupertinoButtonWhiteTextColor";
import CupertinoButtonWhiteTextColor1 from "../symbols/CupertinoButtonWhiteTextColor1";
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';
import { Dropdown } from 'react-native-material-dropdown';

export default class ComposeMesageScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      subject:'',
      showSuccess: false, showAbort: false
    }
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

    const accountList = [{
      value: '1234567234563456',
    }, {
      value: '8653215643127896',
    }];

    const subjectList = [{
      value: 'Account locked',
    }, {
      value: 'Card Stolen',
    }];
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <Text style={styles.text}>Composed Message</Text>
        <View style={styles.rect3} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.materialFixedLabelTextbox1}>
        <Dropdown
          label='Select Account'
          data={accountList}
        />
        </View>
        <View style={styles.materialFixedLabelTextbox2}>
        <Dropdown
          label='Select Subject'
          data={subjectList}
        />
        </View>
        <CupertinoButtonWhiteTextColor
          style={styles.cupertinoButtonWhiteTextColor}
        />
        <View style={styles.cupertinoButtonWhiteTextColor1} >
          <TouchableOpacity style={[styles.composeBtnRoot, this.props.style]} onPress={showSuccessAlert}>
            <Text style={styles.composeBtnCaption}>Submit</Text>
          </TouchableOpacity>
          <SCLAlert
            theme="success"
            show={this.state.showSuccess}
            title="Success"
            subtitle="Successfully sumitted"
          >
            <SCLAlertButton theme="success" onPress={closeSuccessAlert}>Done</SCLAlertButton>
          </SCLAlert>
        </View>
        <View style={styles.rect4} />
        <Text style={styles.text4} />
        <TextInput placeholder={""} style={styles.textInput} />
        <Text style={styles.text5}>Message:</Text>
      </View>
    );
  }
}

ComposeMesageScreen.navigationOptions = {
  header : null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 0
  },
  composeBtnRoot: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  composeBtnCaption: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "roboto-regular",
    fontWeight: "500"
  },
  rect: {
    top: 0,
    left: 0.18,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  rect2: {
    top: 54.4,
    left: 0.18,
    width: 359.82,
    height: 42.18,
    backgroundColor: "rgba(232,212,48,1)",
    position: "absolute"
  },
  text: {
    top: 60.51,
    left: 87.36,
    width: 185.47,
    height: 29.96,
    color: "#121212",
    position: "absolute",
    fontSize: 20
  },
  rect3: {
    top: 585.6,
    left: 0,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  image: {
    top: 9,
    left: 80,
    width: 200,
    height: 34,
    position: "absolute"
  },
  materialFixedLabelTextbox1: {
    top: 176.5,
    left: 18,
    width: 322.41,
    height: 43,
    position: "absolute"
  },
  materialFixedLabelTextbox2: {
    top: 254,
    left: 18.79,
    width: 322.41,
    height: 43,
    position: "absolute"
  },
  text2: {
    top: 160.5,
    left: 18,
    width: 85.95,
    height: 32,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  text3: {
    top: 238,
    left: 18,
    width: 85.95,
    height: 32,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  cupertinoButtonWhiteTextColor: {
    top: 520,
    left: 18,
    width: 116,
    height: 44,
    backgroundColor: "rgba(11,10,10,1)",
    position: "absolute"
  },
  cupertinoButtonWhiteTextColor1: {
    top: 520,
    left: 225,
    width: 110,
    height: 44,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  rect4: {
    top: 350,
    left: "5.22%",
    width: 322.41,
    height: 146,
    backgroundColor: "rgba(242,238,238,1)",
    position: "absolute"
  },
  text4: {
    top: 132,
    left: 154,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  textInput: {
    top: 350,
    left: 18.79,
    width: 322.41,
    height: 146,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  },
  text5: {
    top: 318,
    left: 18,
    width: 85.95,
    height: 32,
    color: "rgba(8,8,8,1)",
    position: "absolute",
    fontSize: 18
  }
});
