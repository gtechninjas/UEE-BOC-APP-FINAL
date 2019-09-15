import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default class MaterialList1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <FlatList
          renderItem={({ item, separators }) => (
            <View style={styles.rect}>
              <Text style={styles.text}>Single-line Item</Text>
            </View>
          )}
          horizontal={false}
          ItemSeparatorComponent={() => <View style={styles.rect2} />}
          data={[{}, {}]}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 8
  },
  list: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  rect: {
    height: 48,
    flexDirection: "row",
    marginLeft: 16,
    padding: 16,
    paddingLeft: 0
  },
  text: {
    color: "#212121",
    fontSize: 16
  },
  rect2: {
    width: "100%",
    height: 1,
    backgroundColor: "black"
  }
});
