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
    <View style={{flex: 1,backgroundColor: '#000'}}>
    <StatusBar backgroundColor='#000F21' translucent={true} barStyle='light-content'/>
     <ImageBackground resizeMode={'cover'} style={{width: '100%', height: 200, 
      //  paddingLeft: 10, paddingRight: 10
        }}  source={require('../roti.jpg')}>
         <View style={{height: 25, width: '95%',alignSelf: 'center',
          marginTop: StatusBar.currentHeight+10,
          flexDirection: 'row', justifyContent: 'space-between'}}>
         <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Films', 
                )}>
         <Image resizeMode={'contain'} source={require('../left.png')} style={{width: 22,height: 25}}/>
         </TouchableNativeFeedback>
         <Image resizeMode="contain" style={{width: 150, height: 34, opacity: 0}} source={require('../canvas.png')}/>
         <TouchableNativeFeedback>
                <View style={{width: 22,height: 25, opacity: 0}}>
         <Image resizeMode={'contain'} source={require('../menu.png')} style={{flex: 1}}/></View>
         </TouchableNativeFeedback>
         </View>
         <View style={{width: 90, height: 90, borderRadius: 45, borderWidth: 2, backgroundColor: 'rgba(0,0,0,0.7)',
         borderColor: 'white',  alignSelf: 'center', justifyContent: 'center'
         }}>
          <Image 
                          resizeMode="contain" style={{width: 46,height: 46, alignSelf:'center'}}
                         source={require('../play.png')}/>
         </View>
        </ImageBackground>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{width: '90%', alignSelf: 'center'}}>
        <Text style={{ fontFamily: 'mont-bold', fontSize: 20, color: '#F2BB66',}}>
          ROTI
        </Text></View>
        <View style={{width: '90%', justifyContent: 'space-between', marginTop: 5, flexDirection: 'row', 
        alignSelf: 'center'}}>
         <Text style={{fontFamily: 'mont', fontSize: 16, color: '#FFE9B3',}}>
          98% Match
        </Text>
        <Text style={{fontFamily: 'mont', fontSize: 14, color: '#978C8C',}}>
          2019
        </Text>
        <Text style={{fontFamily: 'mont', fontSize: 14, color: '#978C8C',}}>
          18+
        </Text>
        <Text style={{fontFamily: 'mont', fontSize: 14, color: '#978C8C',}}>
          2 hr 30 mins
        </Text>
        </View>
        <View style={{width: '90%', marginTop: 10, alignSelf: 'center' }}>
          <Text style={{fontSize: 12, color: 'white', fontFamily: 'mont'}}>
          The psychological limits and 
endurance  of a couple are stretched
after the wife, Diane, suddenly sees 
an exact replica of her dead son
 (five years after his death), walking 
leisurely home from a different school 
and living an entirely different life. 
          </Text>
        </View>
        <View style={{width: 150, justifyContent: 'space-around', marginLeft: 10, marginTop: 10, flexDirection: 'row'}}>
         <Text style={{fontFamily: 'mont-bold', fontSize: 12, color: '#F2BB66'}}>
           Starring: 
         </Text>
         <Text style={{fontFamily: 'mont', fontSize: 12, color: '#E4D5D5'}}>
           Kunle Afolayan
         </Text>
        </View>
        <View style={{width: 150, justifyContent: 'space-around', marginLeft: 10, marginTop: 10, flexDirection: 'row'}}>
         <Text style={{fontFamily: 'mont-bold', fontSize: 12, color: '#F2BB66'}}>
           Director: 
         </Text>
         <Text style={{fontFamily: 'mont', fontSize: 12, color: '#E4D5D5'}}>
           Kunle Afolayan
         </Text>
        </View>
        <View style={{flexDirection: 'row',width: '90%',height: 40,marginTop: 10, alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center'}}>
         <View style={{flexDirection: 'column', height: 35,alignItems: 'center'}}>
         <Image resizeMode={'contain'} source={require('../+.png')} style={{width: 21, height: 21}}/>
           <Text style={{color: 'grey', fontSize: 10, 
                     fontFamily: 'mont'}}>
            My List
           </Text>
         </View>
         <View style={{flexDirection: 'column', height: 35,alignItems: 'center'}}>
         <Image resizeMode={'contain'} source={require('../likee.png')} style={{width: 21, height: 21}}/>
           <Text style={{color: 'grey', fontSize: 10, 
                     fontFamily: 'mont'}}>
            Rate
           </Text>
         </View>
         <View style={{flexDirection: 'column', height: 35,alignItems: 'center'}}>
         <Image resizeMode={'contain'} source={require('../share.png')} style={{width: 21, height: 21}}/>
           <Text style={{color: 'grey', fontSize: 10, 
                     fontFamily: 'mont'}}>
            Share
           </Text>
         </View>
         <View style={{flexDirection: 'column', height: 35, alignItems: 'center'}}>
         <Image resizeMode={'contain'} source={require('../dload.png')} style={{width: 21, height: 21}}/>
           <Text style={{color: 'grey', fontSize: 10, 
                     fontFamily: 'mont'}}>
            Download
           </Text>
         </View>
        </View>
        <Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       MORE LIKE THIS
      </Text> 
      <View style={{flexDirection: 'row', width: '90%', height: 140, justifyContent: 'space-between', alignSelf: 'center'}}>
      <Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      <Image resizeMode={'contain'} source={require('../skinnyGirl.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      <Image resizeMode={'contain'} source={require('../jenifasDiary.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      </View> 
        
      </ScrollView>
      <View style={styles.navBar}>
          <TouchableNativeFeedback >
                            <View style={{height: 20, width: 22}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../home-2-xxl.png')}/>
                            </View> 
                            
                            </TouchableNativeFeedback>
                        <TouchableNativeFeedback >
                            <View style={{height: 20, width: 22, opacity: .5}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../search.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={{height: 20, width: 22, opacity: .5}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../downloading-updates-xxl.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={{height: 20, width: 22, opacity: .5}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, }}
                                    source={require('../menu.png')}/>
                            </View>
                        </TouchableNativeFeedback>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'black',
    flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 28,
          paddingRight: 28,
          height: 50,
          width: '100%'
    },
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
