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

export default class Signup extends Component {
    constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      regLoader: false
    }
  }
  reg() {
    let regg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(regg.test(this.state.email) === false)
            {
            Alert.alert(
                'Error',
                'Valid Email address is required',
                [
                  {text: 'OK'},
                ],  ); 
           }
           else if (this.state.password.length < 8) {
            Alert.alert(
                'Error',
                'Password is too short, It must be up to 8 characters',
                [
                  {text: 'OK'},
                ],  ); 
        }
            else if(this.state.email.length < 1){
            Alert.alert(
                'Error',
                'Email cannot be empty and must contain a valid Email Address',
                [
                  {text: 'OK'},
                ],  ); 
        }
    else{
    
    this.setState({regLoader: true});
      var bodyParameters = {
        email: this.state.email,
        password: this.state.password,
      };
      axios
        .post("http://app.kalewo.ng/api/login", bodyParameters)
        .then(response => {
          console.log(response);
          console
          SharedPreferences.setItem("key1", response.data.success.token);
          SharedPreferences.setItem("key2", JSON.stringify(response.data.success.id));
          this.props.navigation.navigate("Described", 
          {});
          this.setState({regLoader: false});
        })
        .catch(error => {
          this.setState({regLoader: false});
          Alert.alert(
            "Error",
            (error.response.data.error.email?JSON.stringify(error.response.data.error.email)+'\n':'\n')+
            (error.response.data.error.password?JSON.stringify(error.response.data.error.password)+'\n':'\n'),
            [{ text: "OK" }]
          );
          console.log(JSON.stringify(error.response.data.error));
        });
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
         flexDirection: 'column'
        }}>
        <ScrollView contentContainerstyle={{flexGrow:1}} 
                                    keyboardShouldPersistTaps='always'
                                                         showsHorizontalScrollIndicator={false}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
         <Image resizeMode="contain"
                                   style={{width: 198, height: 48,
                                   marginTop: 150, alignSelf: 'center' }}
                                   source={require('../kl.png')}/>
         <View style={{flexDirection: 'row', width: '82%', alignSelf: 'center', 
         justifyContent: 'space-between', height: 34, marginTop: '11%'}}>
          <View style={{width: 30, height: 34, justifyContent: 'center', 
          backgroundColor: '#494646', borderRadius: 3}}>
          <Image resizeMode="contain"
                                   style={{width: 16, height: 16, alignSelf: 'center' }}
                                   source={require('../envelope.png')}/> 
          </View>
          <View style={{width: '85%', height: 34, backgroundColor: 'rgba(79, 76, 76, 0.48)',
          borderRadius: 3}}>
          <TextInput            returnKeyType={'next'}
                            underlineColorAndroid={'transparent'}
                            placeholder="Email address"
                            value={this.state.email}
                            onChangeText={(email) => this.setState({email})}
                                       placeholderStyle={{fontSize: 14, fontFamily: 'camptonLight'}}
                                       placeholderTextColor="#A09E9E"
style={{
                                           alignSelf: 'center',
                                           justifyContent: 'center',
                                           height: 34,
                                           width: '95%',
                                           backgroundColor: 'transparent',
                                           fontSize: 14, fontFamily: 'camptonLight', color: '#A09E9E',
                                       }}/>
          </View>
         </View>  
         <View style={{flexDirection: 'row', width: '82%', alignSelf: 'center', 
         justifyContent: 'space-between', height: 34, marginTop:28}}>
          <View style={{width: 30, height: 34, justifyContent: 'center', 
          backgroundColor: '#494646', borderRadius: 3}}>
          <Image resizeMode="contain"
                                   style={{width: 16, height: 16, alignSelf: 'center' }}
                                   source={require('../lock.png')}/> 
          </View>
          <View style={{width: '85%', height: 34, backgroundColor: 'rgba(79, 76, 76, 0.48)',
          borderRadius: 3}}>
          <TextInput            returnKeyType={'next'}
                            underlineColorAndroid={'transparent'}
                            placeholder="Password"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                                       placeholderStyle={{fontSize: 14, fontFamily: 'camptonLight'}}
                                       placeholderTextColor="#A09E9E"
style={{
                                           alignSelf: 'center',
                                           justifyContent: 'center',
                                           height: 34,
                                           width: '95%',
                                           backgroundColor: 'transparent',
                                           fontSize: 14, fontFamily: 'camptonLight', color: '#A09E9E',
                                       }}/>
          </View>
         </View> 
         <TouchableWithoutFeedback onPress={() =>
                this.props.navigation.navigate('ResetPassword', 
                )}>
         <View>
         <Text style={{fontFamily: 'camptonLight', fontSize: 10, 
         color: '#878383', alignSelf: 'center', marginTop: 17, 
         textDecorationLine: 'underline'}}>
         Forgot your email and password?</Text></View></TouchableWithoutFeedback>
         <TouchableWithoutFeedback  onPress={this.reg.bind(this)}>
                <View style={{backgroundColor: '#FCAA4A', width: 98, height: 27, 
         alignSelf: 'center', justifyContent: 'center', marginTop: 50, marginBottom: 20}}>
         {this.state.regLoader ? 
            <ActivityIndicator color="white" />
           :
         <Text style={{fontFamily: 'camptonBold', fontSize: 14, 
         color: '#262728', alignSelf: 'center'}}>Sign In</Text>}
         </View></TouchableWithoutFeedback>             
         </ScrollView>
         <TouchableWithoutFeedback  onPress={() =>
                this.props.navigation.navigate('Signup', 
                )}> 
         <View style={{width: '100%', height: 66,backgroundColor: '#FCAA4A',
         justifyContent: 'center' }}>
         <Text style={{fontFamily: 'camptonBold', fontSize: 13, letterSpacing: 3.2,
         color: '#262728', alignSelf: 'center', textAlign: 'center'}}>
         DONT HAVE AN ACCOUNT? SIGN UP
         </Text>
         </View>          
         </TouchableWithoutFeedback>  
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