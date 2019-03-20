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
  TouchableNativeFeedback,
  ScrollView,
  Dimensions,
  FlatList,
  Alert
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import axios from 'axios';
import {BoxShadow} from 'react-native-shadow'
const api_key = '114063_a93666d11c33ea8dccac';
export default class Decision extends Component{
  componentDidMount() {
  
    }
  static navigationOptions = {
    header: null,
    };
  
constructor(props) {
  super(props);
  this.state = {
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
        <TouchableNativeFeedback  onPress={() =>
                this.props.navigation.navigate('Described', 
                )}>
        <View style={{width: 189, height: 40, elevation: 2, backgroundColor: 'black', 
        alignItems: 'center', justifyContent: 'center', }}>
<Text style={{fontFamily: 'camptonBold', fontSize: 13, color: 'white',}}>
        JOIN FREE FOR A MONTH</Text>
        </View></TouchableNativeFeedback></BoxShadow>
        </ImageBackground>
        </ScrollView>
        <View style={{height: 16, width:'100%', flexDirection: 'row', 
        alignItems: 'center', justifyContent: 'space-around', marginBottom: 30}}>
          <Text style={{color: '#9A9797', fontSize: 12, fontFamily: 'camptonBold'}}>
          SIGN IN
          </Text>
          <Text style={{color: '#9A9797', fontSize: 12, fontFamily: 'camptonBold'}}>
          HELP
          </Text>
          <Text style={{color: '#9A9797', fontSize: 12, fontFamily: 'camptonBold'}}>
          DEVICE
          </Text>
          <Text style={{color: '#9A9797', fontSize: 12, fontFamily: 'camptonBold'}}>
          PLANS
          </Text>
        </View>
       </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
});
