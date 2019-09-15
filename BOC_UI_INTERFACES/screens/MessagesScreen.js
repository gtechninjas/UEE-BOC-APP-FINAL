import React, { Component } from "react";
import { StyleSheet, View, Image, Text,FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { List, ListItem } from "react-native-elements";
import Message from "../components/Message";
import MaterialButtonMessage from "../symbols/MaterialButtonMessage";
import { Dropdown } from 'react-native-material-dropdown';
import { } from 'react-navigation';
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';


export default class MessagesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      items: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this._get('https://jsonplaceholder.typicode.com/posts')
    .then(
      data => {
        this.setState({items: data})
      }
    );
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
   
  _get = async(endpoint) => {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  }

  render() {
    const {navigate} = this.props.navigation;
    
    if(this.state.items.length == 0){
      return(
        <View style={styles.loader}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }


    return (
      <View style={styles.root}>
        <FlatList 
          style={styles.container}
          data={this.state.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item})  => <Message item={item} />}
        />
        
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect3} />
        <Text style={styles.text2}>Messages</Text>


            <MaterialButtonMessage
          iconFamily={"MaterialCommunityIcons"}
          iconName={"message-text"}
          style={styles.materialButtonMessage}
        />
      </View>
    );
  }
}

MessagesScreen.navigationOptions = {
  header : null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  loader:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  container:{
    marginTop:3
  },
  materialButtonMessage: {
    top: 550,
    left: 286.99,
    width: 56,
    height: 56,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute",
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(63,62,62,1)",
    shadowOpacity: 0.1
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
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 5,
    borderColor: "rgba(57,173,11,1)",
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
    color: "rgba(0,0,0,1)",
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
