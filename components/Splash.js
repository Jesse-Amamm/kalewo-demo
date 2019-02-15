/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View, 
  StatusBar
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start();
  }
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <View style={{flex: 1,}}>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='dark-content'/>
      <LottieView source={require('../data.json')} 
      progress={this.state.progress}
      imageAssetsFolder='lottie/images' 
        
      /></View>
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
