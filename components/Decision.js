import React, { Component } from 'react';
import {
  ActivityIndicator, Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  StatusBar,
  NetInfo,
    Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  FlatList,
  Alert,
  TouchableOpacity
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import axios from 'axios';
import {BoxShadow} from 'react-native-shadow';
const api_key = '114063_a93666d11c33ea8dccac';
var SharedPreferences = require("react-native-shared-preferences");
export default class Decision extends Component{
  componentDidMount() {
    SharedPreferences.getItem("key1", function(value){
      if(value){
      this.setState({isLoggedIn: true});    
      this.props.navigation.navigate('Described', 
                )
      }   
    }.bind(this));
    }
  static navigationOptions = {
    header: null,
    };
  
constructor(props) {
  super(props);
  this.state = {
    isLoggedIn: false,
    token: ''
  };
}

  render() {
    const shadowOpt = {
      width:189,
      height:40,
      color:"#000",
      border:4,
      radius:4,
      opacity:0.6,
      x:0,
      y:2,
     style:{marginVertical:5,marginTop: 21, marginLeft: 35}
    }
    return (
        <ImageBackground
        style={{
         width: '100%',
         height: '100%',
        }}
        source={require('../movieBanners.png')}>
       <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
       <View style={{
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(0,0,0,0.65)',
         
        }}>
        <ScrollView keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}>
                                                         <ImageBackground
        resizeMode="stretch"
        style={{
         width: '90%',
         height: 400,
         marginTop: '40%',
         flexDirection: 'column',
      //   alignItems: 'center'
        }}
        source={require('../side.png')}>
         <Image resizeMode="stretch"
                                   style={{width: 229, height: 51,left: 20,marginTop: 90 }}
                                   source={require('../kalewoWhite.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 15, color: 'white', marginLeft: 36,
        marginTop: 53}}>
        YOUR EYES INSIDE AFRICA</Text>
        <Text style={{fontFamily: 'camptonLight', fontSize: 12, color: 'white', marginLeft: 36,
        marginTop: 6}}>
        Watch anywhere, cancel at anytime</Text>
        <BoxShadow setting={shadowOpt}>
        <TouchableWithoutFeedback  onPress={() =>
                this.props.navigation.navigate('Signup', 
                )}>
        <View style={{width: 189, height: 40, backgroundColor: 'black', 
        alignItems: 'center', justifyContent: 'center', }}>
        <Text style={{fontFamily: 'camptonBold', fontSize: 13, color: 'white',}}>
        JOIN FREE FOR A MONTH</Text>
        </View></TouchableWithoutFeedback></BoxShadow>
        </ImageBackground>
        </ScrollView>
        <View style={{height: 16, width:'100%', flexDirection: 'row', 
        alignItems: 'center', marginBottom: 30}}>
         <TouchableOpacity  onPress={() =>
                this.props.navigation.navigate('Login', 
                )}>
          <View style={{marginLeft: 10}}>
          <Text style={{color: '#9A9797', fontSize: 15, fontFamily: 'camptonBold'}}>
          SIGN IN
          </Text>
          </View>
          </TouchableOpacity>
        {/*  <TouchableWithoutFeedback  onPress={() =>
                this.props.navigation.navigate('Help', 
                )}>
          <View><Text style={{color: '#9A9797', fontSize: 12, fontFamily: 'camptonBold'}}>
          HELP
          </Text></View></TouchableWithoutFeedback>
          <Text style={{color: '#9A9797', fontSize: 12, fontFamily: 'camptonBold'}}>
          DEVICE
          </Text>
          <Text style={{color: '#9A9797', fontSize: 12, fontFamily: 'camptonBold'}}>
          PLANS
          </Text>*/}
        </View>
       </View>
      </ImageBackground>
    );
  }
}
/*
4
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
adb reverse tcp:8081 tcp:8081
adb shell input text "RR"
googlePlacesApikey -   AIzaSyDODll2lx4kP6JZd8tiyAEHlvnZvvhDJb8 

token  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93aGF2aXQtYXBpLmhlcm9rdWFwcC5jb21cL2FwaVwvYXV0aFwvYXV0aGVudGljYXRlIiwiaWF0IjoxNTU4NzEwOTY5LCJleHAiOjE2MDY3MTA5NjksIm5iZiI6MTU1ODcxMDk2OSwianRpIjoiV2pidEF0ckhGcWJDSWhRRiIsInN1YiI6IjU0N2U4YjkwLTZjZDktMTFlOS04ODQ1LTEzNjcwZjZmNTBhOCIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.z2doo5406JYpTx9oivba7-jdZqVkQyX6VHastaRZ7yo
*/
const styles = StyleSheet.create({
});
/*
// eslint-disable linebreak-style 
// eslint-disable no-unused-vars 
import React, { Component } from 'react'
import {
    ActivityIndicator, Platform,
    StyleSheet,
    Text,
    View, 
    Image,
    StatusBar,
    NetInfo,
    Animated,
    ImageBackground,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    FlatList,
    Alert,
    TextInput
} from 'react-native'

export default class EditProfile extends Component{
    render() {
        return (
            <View>
                <View style={{
                    elevation: 1,
                    backgroundColor: '#EFB879',
                    height: 70,
                    marginTop: StatusBar.currentHeight,
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                    padding: 10
                }}>
                    <Text style={{color: 'white', fontSize: 15}}>CANCEL</Text>
                    <Text style={{color: 'white', fontSize: 15, fontWeight: 600}}>EDIT PROFILE</Text>
                    <Text style={{color: 'white', fontSize: 15}}>DONE</Text>
                </View>
                <ScrollView contentContainerstyle={{
                    flexGrow: 1,
                }} 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                automaticallyAdjustContentInsets={false}
                directionalLockEnabled={true}
                bounces={false}
                scrollsToTop={false}>
                    <TextInput    
                        //  underlineColorAndroid={'transparent'}
                        allowFontScaling={false}
                        placeholder="Name"
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        style={{
                            paddingLeft: 28,
                            width: (Dimensions.get('window').width),
                            backgroundColor: 'transparent',
                            fontSize: 16, color: 'black',
                            marginTop: 100, flexDirection: 'row', alignItems: 'center', 
                        }}/>  
                </ScrollView>
            </View>
        )
    }
}
*/