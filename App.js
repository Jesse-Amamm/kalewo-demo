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
  TouchableNativeFeedback,
  ScrollView,
  TextInput

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './components/Login';
import Home from './components/Home';
import Details from './components/Details';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const Screens = createStackNavigator({
    
  Home: {
      screen: Login,
  },
  Details:{
    screen: Details
  },
  Films: {
    screen: Home
  },
 
}, {
    initialRouteName: "Home"
  },
  );
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Screens/>
  //  <Home/>
 // <Details/>
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
