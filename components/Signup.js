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
  TextInput

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




export default class Signup extends Component {
    constructor(props) {
    super(props);
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
         justifyContent: 'space-between', height: 34, marginTop: 28}}>
          <View style={{width: 30, height: 34, justifyContent: 'center', 
          backgroundColor: '#494646', borderRadius: 3}}>
          <Image resizeMode="contain"
                                   style={{width: 16, height: 16, alignSelf: 'center' }}
                                   source={require('../phone.png')}/> 
          </View>
          <View style={{width: '85%', height: 34, backgroundColor: 'rgba(79, 76, 76, 0.48)',
          borderRadius: 3}}>
          <TextInput            returnKeyType={'next'}
                            underlineColorAndroid={'transparent'}
                            placeholder="Mobile Number"
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
         <TouchableWithoutFeedback  onPress={() =>
                this.props.navigation.navigate('Described', 
                )}>
                <View style={{backgroundColor: '#FCAA4A', width: 98, height: 27, 
         alignSelf: 'center', justifyContent: 'center', marginTop: 50}}>
         <Text style={{fontFamily: 'camptonBold', fontSize: 14, 
         color: '#262728', alignSelf: 'center'}}>Sign Up</Text>
         </View></TouchableWithoutFeedback>             
         </ScrollView>
         <TouchableWithoutFeedback  onPress={() =>
                this.props.navigation.navigate('Login', 
                )}> 
         <View style={{width: '100%', height: 66,backgroundColor: '#FCAA4A',
         justifyContent: 'center' }}>
         <Text style={{fontFamily: 'camptonBold', fontSize: 13, letterSpacing: 3.2,
         color: '#262728', alignSelf: 'center', textAlign: 'center'}}>
         HAVE AN ACCOUNT? SIGN IN
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