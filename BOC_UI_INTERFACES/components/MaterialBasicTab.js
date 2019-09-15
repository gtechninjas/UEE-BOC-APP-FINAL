import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TabView, TabContent } from "@builderx/tab-view";
import MaterialList1 from "../components/MaterialList1";

export default class MaterialBasicTab extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TabView
          tabIndicatorStyle={{
            backgroundColor: "#ffffff",
            elevation: 3,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.2
          }}
          activeTabIndex={0}
          style={styles.tabView1}
          tabBarStyle={styles.tabView1_tabBarStyle}
        >
          <TabContent title={"ACTIVITY"} style={styles.tabContent1}>
            <View style={styles.rect1}>
              <Text style={styles.text}>
                13-08-2019 LKR 5. 00{"\n"}
                {"\n"}
                {"\n"}ATM SERVICE CHARGE DR{"\n"}
                {"\n"}
                {"\n"}13-08-2019 LKR 200.00{"\n"}
                {"\n"}
                {"\n"}WD ATM SAV ICBS DR{"\n"}
                {"\n"}
                {"\n"}31-07-2019 LKR 0.40
              </Text>
            </View>
          </TabContent>
          <TabContent title={"DETAILS"} style={styles.tabContent2}>
            <View
              style={[
                styles.rect2,
                {
                  backgroundColor: this.props.rect2 || "#eeeeee"
                }
              ]}
            >
              <MaterialList1
                text={"Apply Online"}
                style={styles.materialList13}
              />
            </View>
          </TabContent>
        </TabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(39,220,92,1)",
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 0
  },
  tabView1: {
    width: 375,
    height: 500,
    borderWidth: 0,
    borderColor: "#000000",
    backgroundColor: "rgba(255,255,255,1)"
  },
  tabView1_tabBarStyle: {
    backgroundColor: "#3F51B5"
  },
  tabContent1: {
    flex: 1
  },
  rect1: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  text: {
    top: 25,
    left: 28,
    color: "#121212",
    position: "absolute"
  },
  tabContent2: {
    flex: 1
  },
  rect2: {
    flex: 1
  },
  materialList13: {
    top: 1,
    left: 0,
    width: 375,
    height: 500,
    position: "absolute"
  }
});
