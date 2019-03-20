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
export default class Described extends Component{
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
 
    return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
       <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
       <ScrollView 
      keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
       <ImageBackground
        style={{
         width: '100%',
         height: 445,
        }}
        source={require('../genny.png')}>
        
         <Image resizeMode="contain"
                                   style={{width: 140, height: 31,
                                   marginTop: StatusBar.currentHeight+10, alignSelf: 'center' }}
                                   source={require('../kl.png')}/>
        <ScrollView>
        </ScrollView>
        </ImageBackground>
        <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 1,left: 0,
         backgroundColor: 'rgba(0,0,0,0.00)', 
         flexDirection: 'column'
        }}></View>
        <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 3,left: 0,
         backgroundColor: 'rgba(0,0,0,0.02)', 
         flexDirection: 'column'
        }}></View>
        <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 5,left: 0,
         backgroundColor: 'rgba(0,0,0,0.04)', 
         flexDirection: 'column'
        }}></View>
        <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 10,left: 0,
         backgroundColor: 'rgba(0,0,0,0.06)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 20,left: 0,
         backgroundColor: 'rgba(0,0,0,0.08)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 30,left: 0,
         backgroundColor: 'rgba(0,0,0,0.10)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 40,left: 0,
         backgroundColor: 'rgba(0,0,0,0.12)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 50,left: 0,
         backgroundColor: 'rgba(0,0,0,0.14)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 60,left: 0,
         backgroundColor: 'rgba(0,0,0,0.16)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 70,left: 0,
         backgroundColor: 'rgba(0,0,0,0.18)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 80,left: 0,
         backgroundColor: 'rgba(0,0,0,0.20)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 90,left: 0,
         backgroundColor: 'rgba(0,0,0,0.22)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 100,left: 0,
         backgroundColor: 'rgba(0,0,0,0.24)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 110,left: 0,
         backgroundColor: 'rgba(0,0,0,0.26)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 120,left: 0,
         backgroundColor: 'rgba(0,0,0,0.28)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 130,left: 0,
         backgroundColor: 'rgba(0,0,0,0.30)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 140,left: 0,
         backgroundColor: 'rgba(0,0,0,0.32)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 150,left: 0,
         backgroundColor: 'rgba(0,0,0,0.34)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 160,left: 0,
         backgroundColor: 'rgba(0,0,0,0.36)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 170,left: 0,
         backgroundColor: 'rgba(0,0,0,0.38)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 180,left: 0,
         backgroundColor: 'rgba(0,0,0,0.40)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 190,left: 0,
         backgroundColor: 'rgba(0,0,0,0.42)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 200,left: 0,
         backgroundColor: 'rgba(0,0,0,0.44)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 210,left: 0,
         backgroundColor: 'rgba(0,0,0,0.46)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 220,left: 0,
         backgroundColor: 'rgba(0,0,0,0.48)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 230,left: 0,
         backgroundColor: 'rgba(0,0,0,0.50)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 240,left: 0,
         backgroundColor: 'rgba(0,0,0,0.52)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 250,left: 0,
         backgroundColor: 'rgba(0,0,0,0.54)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 260,left: 0,
         backgroundColor: 'rgba(0,0,0,0.56)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 270,left: 0,
         backgroundColor: 'rgba(0,0,0,0.58)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 280,left: 0,
         backgroundColor: 'rgba(0,0,0,0.60)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 290,left: 0,
         backgroundColor: 'rgba(0,0,0,0.62)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 300,left: 0,
         backgroundColor: 'rgba(0,0,0,0.64)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 310,left: 0,
         backgroundColor: 'rgba(0,0,0,0.66)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 320,left: 0,
         backgroundColor: 'rgba(0,0,0,0.68)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 330,left: 0,
         backgroundColor: 'rgba(0,0,0,0.70)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 340,left: 0,
         backgroundColor: 'rgba(0,0,0,0.72)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 350,left: 0,
         backgroundColor: 'rgba(0,0,0,0.74)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 360,left: 0,
         backgroundColor: 'rgba(0,0,0,0.76)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 370,left: 0,
         backgroundColor: 'rgba(0,0,0,0.78)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 380,left: 0,
         backgroundColor: 'rgba(0,0,0,0.80)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 390,left: 0,
         backgroundColor: 'rgba(0,0,0,0.82)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 400,left: 0,
         backgroundColor: 'rgba(0,0,0,0.84)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 410,left: 0,
         backgroundColor: 'rgba(0,0,0,0.86)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 420,left: 0,
         backgroundColor: 'rgba(0,0,0,0.88)', 
         flexDirection: 'column'
        }}></View>
      <View style={{
         width: '100%',
         height: 10,position: 'absolute',top: 424,left: 0,
         backgroundColor: 'rgba(0,0,0,0.9)', 
         flexDirection: 'column'
        }}></View>
        <Text style={{fontFamily: 'bn', color: '#FCAA4A', letterSpacing: 2, alignSelf: 'center',position: 'absolute',
        top: 360,
        fontSize: 60}}>LIONSHEART</Text>
        <View style={{flexDirection: 'row', width: 155, height: 14, alignSelf: 'center',position: 'absolute',
        top: 420,
        alignItems: 'center', justifyContent: 'space-between'}}>
         <Text style={{color: '#746E6E', fontSize: 11, fontFamily: 'camptonBold'}}>
             2019
         </Text>
         <View style={{backgroundColor: '#746E6E', height: 4, width: 4, borderRadius: 2}}>

         </View>
         <Text style={{color: '#746E6E', fontSize: 11, fontFamily: 'camptonBold'}}>
             1hr34mins
         </Text>
         <View style={{backgroundColor: '#746E6E', height: 4, width: 4, borderRadius: 2}}>

         </View>
         <Text style={{color: '#746E6E', fontSize: 11, fontFamily: 'camptonBold'}}>
             Drama
         </Text>
        </View>
        <View style={{width: 50, backgroundColor: '#FCAA4A', height: 20, justifyContent: 'space-evenly',
          flexDirection: 'row', marginTop: 12, alignItems: 'center', alignSelf: 'center',position: 'absolute',
        top: 430,}}>
            <Image 
                          resizeMode="stretch" style={{width: 12,height: 12,}}
                         source={require('../play.png')}/>
            <Text style={{color: 'white', fontSize: 10,
                     fontFamily: 'camptonBold'}}>PLAY</Text>
          </View>
      <Text style={{color: '#FCAA4A', fontFamily: 'camptonBold', fontSize: 14, 
      marginTop: 27,marginLeft: 25, marginBottom: 14}}>
      Trending Now
      </Text>
      <ScrollView horizontal={true}
      keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
         <View style={{width: 111, height: 168, marginLeft: 22}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../big.png')}/></View>
        <View style={{width: 111, height: 168, marginLeft: 11}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../thisit.png')}/></View>
        <View style={{width: 111, height: 168, marginLeft: 11}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../wp.png')}/></View>
                                                         </ScrollView>
                                                         <Text style={{color: '#FCAA4A', fontFamily: 'camptonBold', fontSize: 14, 
      marginTop: 27,marginLeft: 25, marginBottom: 14}}>
      Popular on Kalewo
      </Text>
      <ScrollView horizontal={true}
      keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
         <View style={{width: 111, height: 168, marginLeft: 22}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../big.png')}/></View>
        <View style={{width: 111, height: 168, marginLeft: 11}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../thisit.png')}/></View>
        <View style={{width: 111, height: 168, marginLeft: 11}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../wp.png')}/></View>
                                                         </ScrollView>
      </ScrollView>
      <View style={{width: '100%', height: 54, backgroundColor: 'black', 
      alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row',
      borderTopColor: '#FCAA4A', borderTopWidth: 1}}>
       <View style={{flexDirection: 'column', width: 23, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 20, height: 20, }} resizeMode="stretch"
        source={require('../home.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: '#FCAA4A'}}>HOME</Text>
       </View>
       <View style={{flexDirection: 'column', width: 34, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 20, height: 20, }} resizeMode="stretch"
        source={require('../searcher.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: 'white'}}>SEARCH</Text>
       </View>
       <View style={{flexDirection: 'column', width: 40, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 20, height: 20, }} resizeMode="stretch"
        source={require('../acc.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: 'white'}}>ACCOUNT</Text>
       </View>
       <TouchableNativeFeedback onPress={() =>
                this.props.navigation.openDrawer()}>
                <View style={{flexDirection: 'column', width: 40, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 30, height: 8, }} resizeMode="stretch"
        source={require('../more.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: 'white'}}>MORE</Text>
       </View></TouchableNativeFeedback>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
});
