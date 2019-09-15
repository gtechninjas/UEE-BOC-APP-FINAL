import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { List, ListItem } from 'react-native-elements'
   
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
                     onPress = {() => this.alertItemName(this.props.item.body)}>
                     <Image style={styles.cardImage}  source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}/>   
                     <Text style = {styles.text}>
                        {this.props.item.title}
                     </Text>
                     
                  </TouchableOpacity>
              
            }
         </View>
      )
   }
}
export default Message

const styles = StyleSheet.create ({
   messages: {
      padding: 10,
      marginTop: 3,
      marginLeft:'2%',
      backgroundColor: '#D7DBDD',
      width:'96%',
      shadowColor:'#000',
      shadowOpacity:0.2,
      shadowRadius:1,
      shadowOffset:{
         width:3,
         height:3
      },
   },
   text: {
      alignSelf:"flex-end",
      fontSize:16,
      color: '#4f603c',
   },
   container:{
    top: 150,
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