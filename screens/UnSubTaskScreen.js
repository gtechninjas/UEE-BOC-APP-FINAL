import React, { Component } from "react";
import { StyleSheet, View, Image, Text,ImageBackground, TouchableOpacity} from "react-native";
import MaterialButtonDark from "../symbols/alert/MaterialButtonDark";
import MaterialButtonDark1 from "../symbols/alert/MaterialButtonDark1";
import MaterialButtonDark2 from "../symbols/alert/MaterialButtonDark2";
import MaterialButtonDark3 from "../symbols/alert/MaterialButtonDark3";
import { Center } from "@builderx/utils";
import { } from 'react-navigation'

export default class UnSubTaskScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect2} />
        <Text style={styles.text}>Tasks</Text>
        <View style={styles.materialButtonDark}>
          <TouchableOpacity style={[styles.aroot, this.props.style]} onPress = { () => navigate('Links')}>
          <Text style={styles.acaption}>Manage Alerts</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.materialButtonDark1}>
          <TouchableOpacity style={[styles.broot, this.props.style]} onPress = { () => navigate('Task')}>
          <Text style={styles.bcaption}>Manage Tasks</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect3} />
        <View style={styles.rect4} />
        <MaterialButtonDark2 style={styles.materialButtonDark2}/>
        <MaterialButtonDark3 style={styles.materialButtonDark3} />
        <View style={styles.rect5} />
        <ImageBackground
          style={styles.rect6}
          source={require("../assets/images/Gradient_CLPxtnw.png")}
        />
        <ImageBackground
          style={styles.rect7}
          source={require("../assets/images/Gradient_CLPxtnw.png")}
        />
        <Text style={styles.text3}>Forex Rate Task</Text>
        <ImageBackground
          style={styles.rect8}
          source={require("../assets/images/Gradient_CLPxtnw.png")}
        />
        <Text style={styles.text4}>Login Task</Text>
        {/* <ImageBackground
          style={styles.rect9}
          source={require("../assets/images/Gradient_CLPxtnw.png")}
        />
        <Text style={styles.text5}>Limit Utilized Task</Text>
        <ImageBackground
          style={styles.rect10}
          source={require("../assets/images/Gradient_CLPxtnw.png")}
        />
        <Text style={styles.text6}>Peer Beneficiary Task</Text> */}
        <Text style={styles.text7}>Limit Threshold Task</Text>
      </View>
    );
  }
}

UnSubTaskScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 0
  },
  rect: {
    top: 0,
    left: 0.18,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  image: {
    top: 9.17,
    left: 80,
    width: 200,
    height: 33.58,
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
    left: 150.88,
    width: 58.25,
    height: 29.96,
    color: "#121212",
    position: "absolute",
    fontSize: 20
  },
  materialButtonDark: {
    top: 128.35,
    left: 23.49,
    width: 313.02,
    height: 36,
    position: "absolute",
    borderRadius: 9,
    borderColor: "#000000",
    borderWidth: 1
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
  materialButtonDark1: {
    top: 176,
    left: 25.16,
    width: 309.68,
    height: 36,
    position: "absolute",
    borderRadius: 9,
    borderColor: "#000000",
    borderWidth: 1
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
  rect3: {
    top: 585.6,
    left: 0,
    width: 359.82,
    height: 54.4,
    backgroundColor: "rgba(251,162,17,1)",
    position: "absolute"
  },
  rect4: {
    top: 238.3,
    left: 18.48,
    width: 322.86,
    height: 336.06,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  materialButtonDark2: {
    top: 240.08,
    left: 18.69,
    width: 161.58,
    height: 41.5,
    position: "absolute"
  },
  materialButtonDark3: {
    top: 240.08,
    left: 180,
    width: 161.16,
    height: 34.45,
    position: "absolute"
  },
  rect5: {
    top: 276.3,
    left: 179.64,
    width: 161.43,
    height: 7,
    backgroundColor: "rgba(248,243,126,1)",
    position: "absolute"
  },
  rect6: {
    top: 283.3,
    left: 18.48,
    width: 322.68,
    height: 49.4,
    position: "absolute"
  },
  rect7: {
    top: 336.25,
    left: 18.39,
    width: 322.68,
    height: 50.4,
    position: "absolute"
  },
  text3: {
    top: 350.7,
    left: 36.73,
    width: 286,
    height: 21.5,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 20
  },
  rect8: {
    top: 389.6,
    left: 17.75,
    width: 322.68,
    height: 50,
    position: "absolute"
  },
  text4: {
    top: 401.1,
    left: 36.73,
    width: 286,
    height: 21.5,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 20
  },
  rect9: {
    top: 442.6,
    left: 18.75,
    width: 322.68,
    height: 50,
    position: "absolute"
  },
  text5: {
    top: 456.85,
    left: 37,
    width: 286,
    height: 21.5,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 20
  },
  rect10: {
    top: 495.6,
    left: 18.66,
    width: 322.68,
    height: 50,
    position: "absolute"
  },
  text6: {
    top: 510.85,
    left: 36.09,
    width: 286,
    height: 25.5,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 20
  },
  text7: {
    top: 297.75,
    left: 36.73,
    width: 286,
    height: 21.5,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 20
  }
});
