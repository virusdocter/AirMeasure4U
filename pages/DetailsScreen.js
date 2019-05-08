//This is an example code for Bottom Navigation//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used

import { WebView } from 'react-native';

export default class DetailsScreen extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
  return(
    <WebView
       source={{uri: 'https://aqicn.org/map/thailand/'}}
       style={{marginTop: 20}}
     />
  );
}
}
