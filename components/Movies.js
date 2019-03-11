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
const api_key = '114063_a93666d11c33ea8dccac';
export default class Movies extends Component{
  componentDidMount() {
  
    }
  static navigationOptions = {
    header: null,
    };
  _renderItem ({item, index}) {
    return (
      <TouchableNativeFeedback onPress={() =>
        this.props.navigation.navigate('Details', {
                  title: item.title,
                  image: item.pictures.thumbnail[0],
                  description: item.description,
                  uri: item.share_code.facebook
                }
        )}>
        <View style={{flexDirection: 'column', height: 250, width: 200}}>
        {item.pictures.thumbnail[0]?
        <Image resizeMode="cover" style={{width: 200, height: 200, borderRadius: 4}}
                                   source={{uri: item.pictures.thumbnail[0]}}/>:
                                   <Image resizeMode="cover"
                                   style={{width: 200, height: 200, borderRadius: 4}}
                                   source={require('../none.jpg')}/>}
            <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66', alignSelf: 'center'}} >
                { item.title }
            </Text>
            <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'center'}}>
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
        </TouchableNativeFeedback>
    );
}
constructor(props) {
  super(props);
  this.state = {
  ltvs: [],
  loading: true,
  visual_radio: [],
  isConnected: true,
  mn: [],
  mnh: [{title: 'Upnorth', image: ''}] 
  };
}
// adb reverse tcp:8081 tcp:8081
// adb shell input text "RR"
  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#000'}}>
      <StatusBar backgroundColor='#000F21' translucent={true} barStyle='light-content'/>
      <ScrollView keyboardShouldPersistTaps='always'
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
        <ImageBackground resizeMode={'cover'} 
       style={{width: '100%', height: 250, paddingBottom: 10, opacity: .5, marginBottom: 10,
      //  paddingLeft: 10, paddingRight: 10
        }}  source={require('../chiefDaddy.jpg')}>
        <View style={{backgroundColor: 'black',width: '100%', height: 250,}}>
        <Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: 100, height: 200, alignSelf: 'center'}}/></View>
        </ImageBackground>
        <View style={{width: '90%', height: 45, alignSelf: 'center', 
        backgroundColor: 'orange', marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 12,
                     fontFamily: 'mont-bold'}}>PLAY</Text>
        </View>
        <Text style={{color: 'white', fontSize: 14, marginBottom: 5, marginLeft: 10,
                     fontFamily: 'mont-bold'}}>
                     S1:E1 Dayo books the ticket
                     </Text>
                     <Text style={{color: 'white', fontSize: 12, marginBottom: 5, marginLeft: 10,
                     fontFamily: 'mont-bold'}}>
                     Dayo, dayo, dayo,
                     </Text>
                     <Text style={{color: 'grey', fontSize: 10, marginBottom: 5, marginLeft: 10,
                     fontFamily: 'mont-bold'}}>
                     Cast: olusegun banjo
                     </Text>  
                        
          </ScrollView>
          <View style={styles.navBar}>
          <TouchableNativeFeedback >
                            <View style={{height: 24, width: 26}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../home-2-xxl.png')}/>
                            </View> 
                            
                            </TouchableNativeFeedback>
                        <TouchableNativeFeedback >
                            <View style={{height: 24, width: 30}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../search.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={{height: 24, width: 26}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../downloading-updates-xxl.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={{height: 24, width: 26, opacity: .8}}>
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

/* 
  
        <Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       TV SHOWS
      </Text> 
      <View style={{flexDirection: 'row', width: '90%', height: 140, justifyContent: 'space-between', alignSelf: 'center'}}>
      <Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      <Image resizeMode={'contain'} source={require('../skinnyGirl.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      <Image resizeMode={'contain'} source={require('../jenifasDiary.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      </View> 
<Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       POPULAR
      </Text>
      <Carousel
                data={this.state.entries}
                renderItem={this._renderItem.bind(this)}
             //   hasParallaxImages={true}
                windowSize={1}
                itemWidth={200}
                sliderWidth={Dimensions.get('window').width}
                itemHeight={250}
                layout={'default'}
                firstItem={1}
            />*/
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
  intText:{
    color: '#fff',
    fontFamily: 'mont',
    fontSize: 14
},
  internet: {
    position: 'absolute',
    bottom: 56,
    backgroundColor: '#615D5D',
    width: '100%',
    height: 50,
    paddingLeft: 10,
    paddingTop: 10
   },
    head: {
        height: 80,
        flexDirection: 'row', 
        elevation: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white', 
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: StatusBar.currentHeight

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
