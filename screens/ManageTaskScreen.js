import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import MaterialCheckboxWithLabel8 from "../symbols/alert/MaterialCheckboxWithLabel8";
import MaterialCheckboxWithLabel9 from "../symbols/alert/MaterialCheckboxWithLabel9";
import { Center } from "@builderx/utils";
import MaterialCheckboxWithLabel10 from "../symbols/alert/MaterialCheckboxWithLabel10";
import MaterialCheckboxWithLabel11 from "../symbols/alert/MaterialCheckboxWithLabel11";
import MaterialCheckboxWithLabel12 from "../symbols/alert/MaterialCheckboxWithLabel12";
import MaterialCheckboxWithLabel13 from "../symbols/alert/MaterialCheckboxWithLabel13";
import MaterialButtonDark7 from "../symbols/alert/MaterialButtonDark7";
import MaterialButtonDark8 from "../symbols/alert/MaterialButtonDark8";
import { } from 'react-navigation'

export default class ManageTaskScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <View style={styles.rect3} />
        <Text style={styles.text}>Manage Tasks</Text>
        <MaterialCheckboxWithLabel8 style={styles.materialCheckboxWithLabel8} />
        <MaterialCheckboxWithLabel9 style={styles.materialCheckboxWithLabel9} />
        <Center>
          <MaterialCheckboxWithLabel10
            style={styles.materialCheckboxWithLabel10}
          />
        </Center>
        <Center horizontal>
          <MaterialCheckboxWithLabel11
            style={styles.materialCheckboxWithLabel11}
          />
        </Center>
        <MaterialCheckboxWithLabel12 style={styles.materialCheckboxWithLabel12} />
        <MaterialCheckboxWithLabel13 style={styles.materialCheckboxWithLabel13} />
        <View style={styles.materialButtonDark7}>
          <TouchableOpacity style={[styles.broot, this.props.style]} onPress = { () => navigate('UnTasks')}>
          <Text style={styles.bcaption}>Unsubscribe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.materialButtonDark8}>
            <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('Tasks')}>
            <Text style={styles.acaption}>Subscribe</Text>
            </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
    );
  }
}

ManageTaskScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
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
  rect3: {
    top: 585.6,
    left: 0,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  text: {
    top: 60.51,
    left: 114.26,
    width: 131.47,
    height: 29.96,
    color: "#121212",
    position: "absolute",
    fontSize: 20
  },
  materialCheckboxWithLabel8: {
    top: 135.01,
    left: 18.41,
    width: 322.99,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel9: {
    top: 243.62,
    left: 17.31,
    width: 324.09,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel10: {
    width: 315.77,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel11: {
    top: 190,
    width: 321.4,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel12: {
    top: 352.23,
    left: 18.3,
    width: 323.4,
    height: 40,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialCheckboxWithLabel13: {
    top: 430.66,
    left: 17.81,
    width: 324.39,
    height: 64,
    backgroundColor: "rgba(250,178,34,1)",
    position: "absolute"
  },
  materialButtonDark7: {
    top: 522,
    left: 30.3,
    width: 122,
    height: 36,
    position: "absolute"
  },
  broot: {
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
  bcaption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  materialButtonDark8: {
    top: 522,
    left: 200,
    width: 127.4,
    height: 36,
    position: "absolute"
  },
  aroot: {
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
  acaption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  image: {
    top: 9,
    left: 80,
    width: 200,
    height: 34,
    position: "absolute"
  }
});
