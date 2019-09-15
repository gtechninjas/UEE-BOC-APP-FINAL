import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class Message extends Component {
   state = {
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
      return (
         <View style = {styles.container}>
            {
               
                  <TouchableOpacity
                     
                     style = {styles.messages}
                     onPress={() => {
                        this.props.navigation.navigate('MyAccount');
                      }}>
                     <Image style={styles.cardImage}  source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}/>   
                     <Text style = {styles.textAccNo}>
                        {this.props.item.accNo}
                     </Text>
                     <Text style = {styles.textDesc}>
                        {this.props.item.description}
                     </Text>
                     
                  </TouchableOpacity>
              
            }
         </View>
      )
   }
}
export default withNavigation(Message)

const styles = StyleSheet.create ({
   messages: {
      padding: 10,
      marginTop: 3,
      marginLeft:'2%',
      backgroundColor: '#D7DBDD',
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
      color: '#4f603c',
   },
   textDesc:{
    fontSize:20,
    color: '#4f603c',
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