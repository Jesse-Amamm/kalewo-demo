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

export default class Details extends Component {
    static navigationOptions = {
        header: null,
        };
        constructor(props) {
          super(props);
      };
  render() {
    const {params} = this.props.navigation.state;
    return (
    //  <Login/>
    <View style={{flex: 1,backgroundColor: '#000F21'}}>
    <StatusBar backgroundColor='#000F21' translucent={true} barStyle='light-content'/>
       {params.image? <ImageBackground resizeMode={'cover'} 
       style={{width: '100%', height: 250, paddingBottom: 10, //opacity: .5,
      //  paddingLeft: 10, paddingRight: 10
        }}  source={{uri: params.image}}>
         <View style={{height: 25, width: '95%',alignSelf: 'center',
          marginTop: StatusBar.currentHeight+10,
          flexDirection: 'row', justifyContent: 'space-between'}}>
         <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Films', 
                )}>
         <Image resizeMode={'contain'} source={require('../left.png')} style={{width: 22,height: 25}}/>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Home', 
                )}>
         <Image resizeMode={'contain'} source={require('../menu.png')} style={{width: 22,height: 25}}/>
         </TouchableNativeFeedback>
         </View>
         <ScrollView showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}></ScrollView>
         <View style={{flexDirection: 'column', marginLeft: 10}}>
         <Text style={{fontFamily: 'mont-bold', fontSize: 24, color: '#F2BB66'}}>
           {params.title}  
         </Text>
         <Text style={{fontFamily: 'mont', fontSize: 15, color: '#F2BB66'}}>
           people are watching 
         </Text>
         <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <View style={{width: 22, height: 20, }}>
                          <Image 
                          resizeMode="contain" style={{width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        </View>
         </View></ImageBackground>:<ImageBackground resizeMode={'cover'} style={{width: '100%', height: 250, paddingBottom: 10
      //  paddingLeft: 10, paddingRight: 10
        }}  source={require('../lionsHeart.jpg')}>
         <View style={{height: 25, width: '95%',alignSelf: 'center',
          marginTop: StatusBar.currentHeight+10,
          flexDirection: 'row', justifyContent: 'space-between'}}>
         <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Films', 
                )}>
         <Image resizeMode={'contain'} source={require('../left.png')} style={{width: 22,height: 25}}/>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Home', 
                )}>
         <Image resizeMode={'contain'} source={require('../menu.png')} style={{width: 22,height: 25}}/>
         </TouchableNativeFeedback>
         </View>
         <ScrollView showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}></ScrollView>
         <View style={{flexDirection: 'column', marginLeft: 10}}>
         <Text style={{fontFamily: 'mont-bold', fontSize: 24, color: '#F2BB66'}}>
           {params.title}  
         </Text>
         <Text style={{fontFamily: 'mont', fontSize: 15, color: '#F2BB66'}}>
           people are watching 
         </Text>
         <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <View style={{width: 22, height: 20, }}>
                          <Image 
                          resizeMode="contain" style={{width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        </View>
         </View>
        </ImageBackground>} 
        
        <View style={{position: 'absolute',right: 18, top: 250-18, backgroundColor: 'red', 
        width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
         <Text style={{fontFamily: 'mont', fontSize: 30, color: 'white'}}>+</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
        overScrollMode={'never'}>
        <View style={{flexDirection: 'column', height: 38, justifyContent: 'space-between',
        marginLeft: 10, marginTop: 20}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66' }}>
         Storyline:
        </Text>
        <View style={{backgroundColor: '#F2BB66', width: 35, height: 3}}></View>
        </View>
        <Text style={{fontFamily: 'mont-light', fontSize: 14, color: 'white', marginTop: 18,
        marginLeft: 10,marginRight: 10}}>
        "{params.description}"
        </Text>
        <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between', 
        alignSelf: 'center', marginTop: 15, alignItems: 'center',height: 50}}>
        <View style={{flexDirection: 'column', height: 50, justifyContent: 'space-between', 
        alignItems: 'center'}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66', height: 45, }}>
         Length
        </Text>
        <Text style={{fontSize: 15, fontFamily: 'mont-light', color: 'white' }}>
         NA
        </Text>
        </View>
        <View style={{backgroundColor: '#6D7B8D', width: 3, height: 40, marginTop: 5}}></View>
        <View style={{flexDirection: 'column', height: 50, justifyContent: 'space-between',
        alignItems: 'center'}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66', height: 45 }}>
         Language
        </Text>
        <Text style={{fontSize: 15, fontFamily: 'mont-light', color: 'white' }}>
        NA
        </Text>
        </View>
        <View style={{backgroundColor: '#6D7B8D', width: 3, height: 40, marginTop: 5, }}></View>
        <View style={{flexDirection: 'column', height: 50, justifyContent: 'space-between',
        alignItems: 'center'}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66', height: 45 }}>
         Rating
        </Text>
        <Text style={{fontSize: 15, fontFamily: 'mont-light', color: 'white' }}>
        NA
        </Text>
        </View>
        </View>
        <View style={{flexDirection: 'column', height: 38, justifyContent: 'space-between',
        marginLeft: 10, marginTop: 30}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66' }}>
         Cast:
        </Text>
        <View style={{backgroundColor: '#F2BB66', width: 35, height: 3}}></View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} 
      contentContainerstyle={{flexGrow:1,
                        flexDirection: 'row',}} 
                                    keyboardShouldPersistTaps='always'
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}
      >
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15, marginLeft: 10}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
      </ScrollView>
      <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Video', {image: params.image, uri: params.uri}
                )}>
      <View style={{width: '75%', height:50, backgroundColor: 'orange',
      borderRadius: 3, alignItems:'center', alignSelf: 'center',
       justifyContent: 'center', marginTop: 20}}>
           <Text style={{fontSize: 14, color: 'white',fontFamily: 'mont-bold',}}>WATCH NOW</Text>
       </View></TouchableNativeFeedback>
      </ScrollView>
    </View>
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
