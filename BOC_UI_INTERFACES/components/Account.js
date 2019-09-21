import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

class Message extends Component {
   state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      names: [
         {
            id: 0,
            name: 'Ben',
            description: 'BOC just got upgraded to serve you better ! Update yours today - http://bit.ly/UpdateBOC'
         },
         {
            id: 1,
            name: 'Susan',
            description: ''
         },
         {
            id: 2,
            name: 'Robert',
            description: ''
         },
         {
            id: 3,
            name: 'Mary',
            description: ''
         },
         {
            id: 4,
            name: 'Mary',
            description: ''
         },
         {
            id: 5,
            name: 'Mary',
            description: ''
         },
         {
            id: 6,
            name: 'Mary',
            description: ''
         }
      ]
   }
   alertItemName = (item) => {
      alert(item)
   }
   render() {
      const { navigate } = this.props.navigation;
      var BContent =<View></View>;
      
      return (
         <View style = {styles.container}>
            {
               
              
                  <TouchableOpacity
                     
                     style = {styles.messages}
                     onPress={() => this.setState({isOpen: true})}>
                     <Image style={styles.cardImage}  source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}/>   
      <Text style = {styles.textAccNo}>
         {this.props.item.accNo}
      </Text>
      <Text style = {styles.textDesc}>
         {this.props.item.description}
      </Text>
                     
                  </TouchableOpacity>
               
            }

            <Modal isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})} style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
            <Button onPress={() => this.setState({isOpen: false})}>X</Button>
            <Button onPress={() => navigate('MyAccount')} >View My Account</Button>
            </Modal>

         </View>
         
      )
   }
}
export default withNavigation(Message)

const styles = StyleSheet.create ({
   btn: {
      margin: 10,
      backgroundColor: "#3B5998",
      color: "white",
      padding: 10
    },
  
    btnModal: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 50,
      height: 50,
      backgroundColor: "transparent"
    },
   modal4: {
      height: 300,
      backgroundColor: '#F1C40F',

    },
   messages: {
      padding: 10,
      marginTop: 3,
      marginLeft:'2%',
      backgroundColor: '#808B96',
      height:150,
      width:'96%',
      borderRadius:20,
      shadowColor:'#000',
      shadowOpacity:0.2,
      shadowRadius:1,
      shadowOffset:{
         width:3,
         height:3
      },
   },
   textAccNo: {
      fontSize:30,
      color: '#fff',
   },
   textDesc:{
    fontSize:20,
    color: '#fff',
   },
   container:{
    top: 150,
    height:'100%'
   },
   card:{

   },
   cardImage:{
      width: 40,
      height: 29.81,
      resizeMode:'contain',
      alignItems:'flex-start',
      borderRadius:10
   }
})