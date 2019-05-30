/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  StatusBar,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert
} from 'react-native';
import axios from "axios";
var SharedPreferences = require("react-native-shared-preferences");
import LinearGradient from 'react-native-linear-gradient';

export default class AppInfo extends Component {
    constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      regLoader: false
    }
  }
 
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <ImageBackground resizeMode="cover"
      style={{width: '100%', height: '100%',}}
      source={require('../movieBanners.png')}>
      <View style={{
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(0,0,0,0.90)',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center'
        }}>
        <View style={{alignSelf: 'center', height: 140, justifyContent: 'space-between',
        flexDirection:'column', alignItems: 'center', alignSelf: 'center', width: 290}}>
        <Text style={{fontFamily: 'latoBold', color: 'white',
        fontSize: 30}}>Kalewo</Text>
        <Text style={{fontFamily: 'latoReg', color: 'white',
        fontSize: 10}}>Version 1.10</Text>
        <Image resizeMode="contain"
                                   style={{width: 286, height: 78, alignSelf: 'center' }}
                                   source={require('../kl.png')}/>
        <Text style={{fontFamily: 'latoBold', color: 'white',
        fontSize: 14}}>© Copyright 2018. </Text>
        <Text style={{fontFamily: 'latoBold', color: '#FCAA4A',
        fontSize: 14}}>LICENSE</Text>
        </View> 
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bottomButton:{
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  /*  position:'absolute',
    bottom: 0*/
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
/**
 <View style={{width: '60%', height: 50, flexDirection: 'row', alignSelf: 'center',
      justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 10, marginTop: 10}}>
      <View style={{width: 50, height: 50, borderRadius: 25, borderColor: 'white', borderWidth: 2, 
      alignContent: 'center', justifyContent: 'center'}}>
      <Image resizeMode="contain" style={{width: 30, height: 30, alignSelf: 'center'}} source={require('../fb.png')}/>
      </View>
      <View style={{width: 50, height: 50, borderRadius: 25, borderColor: 'white', borderWidth: 2, 
      alignContent: 'center', justifyContent: 'center'}}>
       <Image resizeMode="contain" style={{width: 20, height: 20, alignSelf: 'center'}} source={require('../twitter.png')}/>
      </View>
      <View style={{width: 50, height: 50, borderRadius: 25, borderColor: 'white', borderWidth: 2, 
      alignContent: 'center', justifyContent: 'center'}}>
       <Image resizeMode="contain" style={{width: 20, height: 20, alignSelf: 'center'}} source={require('../gplus.png')}/>
      </View>
      </View>
 */