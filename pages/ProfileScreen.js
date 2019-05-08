//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';
//import all the basic component we have used
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent:'center',
  },
});
export default class ProfileScreen extends React.Component {
  //Profile Screen to show from Open profile button
  render() {
    return (
      <View style={styles.container}>
      <Image
      style={{width:250,height:250}}
       source={{url:'https://i.ibb.co/0rHh5t8/aqi2.png'}}/>
      </View>
    );
  }
}
