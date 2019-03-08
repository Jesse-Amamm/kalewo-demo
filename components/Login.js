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
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




export default class Login extends Component {
    constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <ImageBackground
  //   resizeMode="cover"
      style={{
        // #fc7305
    //    flex: 1,
     //   backgroundColor: '#fc730550',
     //   position: 'absolute',
       width: '100%',
       height: '100%',
    //  opacity: .5
      }}
      // react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
      source={require('../upNorth.jpg')}>
      <StatusBar backgroundColor='#000F21' translucent={true} barStyle='light-content'/>
      <View style={{width: '100%', height: '100%', backgroundColor: '#fc730550'}}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode={'never'}>
      <View style={{width:150, height: 34, alignSelf: 'center', marginTop: 60, marginBottom: 30}}>
      <Image resizeMode="contain" style={{width: 150, height: 34, }} source={require('../canvas.png')}/>
      </View>
      <View style={{height:50,width: '75%', borderBottomColor: 'white', justifyContent: 'space-between',
      borderBottomWidth: 2, alignSelf: 'center',marginBottom: 15, 
      flexDirection: 'row'}}>
      <View style={{width: 25, height: 50, alignItems: 'center', justifyContent: 'center'}}>
      <Image resizeMode="contain" source={require('../user.png')} style={{width: 25, height: 25}}/>
      </View>
      <TextInput            returnKeyType={'next'}
                            underlineColorAndroid={'transparent'}
                            style={{// backgroundColor: '#fff',
                            color: '#000',
                            letterSpacing: 2,
                            fontSize: 12,
                            fontFamily: 'mont',
                            width: '85%'
                            }}/>
      </View>
      <View style={{height:50,width: '75%', borderBottomColor: 'white', 
      borderBottomWidth: 2, alignSelf: 'center',marginBottom: 15, justifyContent: 'space-between',
      flexDirection: 'row'}}>
      <View style={{width: 25, height: 50, alignItems: 'center', justifyContent: 'center'}}>
      <Image resizeMode="contain" source={require('../mail.png')} style={{width: 25, height: 25}}/>
      </View>
      <TextInput            returnKeyType={'next'}
                            underlineColorAndroid={'transparent'}
                            style={{// backgroundColor: '#fff',
                            color: '#000',
                            letterSpacing: 2,
                            fontSize: 12,
                            fontFamily: 'mont',
                            width: '85%'
                            }}/>
      </View>
      <View style={{height:50,width: '75%', borderBottomColor: 'white', 
      borderBottomWidth: 2, alignSelf: 'center',marginBottom: 40, justifyContent: 'space-between',
      flexDirection: 'row'}}>
      <View style={{width: 25, height: 50, alignItems: 'center', justifyContent: 'center'}}>
      <Image resizeMode="contain" source={require('../padlock.png')} style={{width: 25, height: 25}}/>
      </View>
      <TextInput           
                            secureTextEntry={true}
                            returnKeyType={'next'}
                            underlineColorAndroid={'transparent'}
                            style={{ //backgroundColor: '#fff',
                            color: '#000',
                            letterSpacing: 2,
                            fontSize: 12,
                            fontFamily: 'mont',
                            width: '85%'
                            }}/>
      </View>
      <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Films', 
                )}>
      <View style={{backgroundColor: '#fff', borderRadius: 3,width: '75%', alignItems:'center', height: 50,
      alignSelf: 'center', justifyContent: 'center', marginBottom: 40}}>
      <Text style={{fontSize: 12, color: 'orange',fontFamily: 'mont-bold',}}>CONTINUE</Text>
      </View></TouchableNativeFeedback>
      
      <Text style={{color: 'white', fontSize: 12, alignSelf:'center', marginTop: '10%', fontFamily: 'mont',}}>
       Already have an account?
      </Text>
      </ScrollView>
      <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Films', 
                )}><LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1e1e1e', '#161616']} style={styles.bottomButton}>
      <Text style={{color: '#fff',fontSize: 14, fontFamily: 'mont-bold',}}>
                     LOGIN
                    </Text>
      </LinearGradient></TouchableNativeFeedback>
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