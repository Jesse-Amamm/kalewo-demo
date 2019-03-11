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
export default class Home extends Component{
  componentDidMount() {
  
    }
  static navigationOptions = {
    header: null,
    };
  
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
  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#000'}}>
      <StatusBar backgroundColor='#000F21' translucent={true} barStyle='light-content'/>
      <View style={styles.head}>
      <Image resizeMode="contain" style={{width: 140, height: 27, alignSelf: 'center' }} 
      source={require('../canvas.png')}/>
      </View>
      <ScrollView keyboardShouldPersistTaps='always'
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
      <Text style={{fontSize: 12, color: 'white', marginBottom: 10, fontFamily: 'mont-bold',marginLeft: 10 }}>
       Continue watching for Seyi
      </Text>
      <ScrollView horizontal={true}
      keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 150, marginLeft: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 5,}}>
                         <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={require('../upNorth.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280}}>
                          <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66'}}>
                          Upnorth</Text>
                        
                        </View>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 170, marginLeft: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 10,}}>
                         <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={require('../vikings.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280}}>
                          <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66'}}>
                          Vikings</Text>
                        
                        </View>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 170, marginLeft: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 10,}}>
                         <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={require('../skinnyGirl.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280}}>
                          <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66'}}>
                          Skinny girl on transit</Text>
                        
                        </View>
                    </View>
                    </TouchableNativeFeedback>
                    </ScrollView>
          <Text style={{fontSize: 12, color: 'white', marginBottom: 5, fontFamily: 'mont-bold', marginLeft: 10}}>
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

      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../skinnyGirl.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../jenifasDiary.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../kingOfBoys.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../upNorth.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      </ScrollView>
      <Text style={{fontSize: 12, color: 'white', marginTop: 10, marginBottom: 5, fontFamily: 'mont-bold', marginLeft: 10}}>
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

      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../skinnyGirl.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../jenifasDiary.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../kingOfBoys.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../upNorth.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 10}}/>
      </TouchableNativeFeedback>
      </ScrollView>
         
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
        height: 56,
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
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#0c0c0d', 
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
