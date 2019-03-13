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
      <Image resizeMode="contain" style={{width: 100, height: 20, }} 
      source={require('../small_icon.png')}/>
      <Text style={{fontFamily: 'mont-bold', color: 'white', fontSize: 12}}>
        TV Shows
      </Text>
      <Text style={{fontFamily: 'mont-bold', color: 'white', fontSize: 12}}>
        Movies
      </Text>
      <Text style={{fontFamily: 'mont-bold', color: 'white', fontSize: 12}}>
        My List
      </Text>
      </View>
      <ScrollView keyboardShouldPersistTaps='always'
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
      <ImageBackground resizeMode={'cover'} style={{width: '100%', height: 440,marginBottom: 10,
      //  paddingLeft: 10, paddingRight: 10
        }}  source={require('../images.jpg')}>
          <View style={{width: '100%', height: 400, paddingBottom: 10, backgroundColor: 'rgba(0,0,0,0.3)'
      //  paddingLeft: 10, paddingRight: 10
        }}  source={require('../images.jpg')}>
          <ScrollView>
          </ScrollView>
          <Text style={{textAlign: 'center', width: 85, fontSize: 16, color: 'white',
          fontFamily: 'mont-bold', marginBottom: 10, alignSelf: 'center'}}>
          A CODE OF A GOOD WIFE
          </Text>
          <View style={{width: 80, backgroundColor: '#FFA500', height: 30, justifyContent: 'space-between',
          flexDirection: 'row',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', alignSelf: 'center'}}>
            <Image 
                          resizeMode="contain" style={{width: 13,height: 13,}}
                         source={require('../play.png')}/>
            <Text style={{color: 'white', fontSize: 12,
                     fontFamily: 'mont-semi'}}>PLAY</Text>
          </View>
          </View>
        </ImageBackground>  
        <Text style={{fontSize: 12, color: 'white', marginBottom: 10, fontFamily: 'mont-bold',marginLeft: 10 }}>
       Available Now
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
                    <View style={{flexDirection: 'column', width: 300, height: 150, marginLeft: 10, marginBottom: 15}}>
                        <View style={{width: 300, height: 120, marginBottom: 5,}}>
                         <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={require('../ije.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280, alignSelf: 'center'}}>
                        <View style={{width: 125, backgroundColor: '#FFA500', height: 27, justifyContent: 'center',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', }}>
          <View style={{width: 80,  height: 27, justifyContent: 'space-around',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
            <Image 
                          resizeMode="contain" style={{width: 13,height: 13,}}
                         source={require('../play.png')}/>
            <Text style={{color: 'white', fontSize: 12,
                     fontFamily: 'mont-semi'}}>PLAY</Text>
                     </View>
          </View>
          <View style={{width: 125, backgroundColor: '#fff', height: 27, justifyContent: 'center',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
          <View style={{width: 80,  height: 27, justifyContent: 'space-around',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontFamily: 'mont', color: '#FFA500'}}>
            +
           </Text>
            <Text style={{color: 'white', fontSize: 14,color: '#FFA500',
                     fontFamily: 'mont-semi'}}>List</Text></View>
          </View>
                        
                        </View>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 150, marginLeft: 10, marginBottom: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 5,}}>
                         <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={require('../kingOfBoys.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280, alignSelf: 'center'}}>
                        <View style={{width: 125, backgroundColor: '#FFA500', height: 27, justifyContent: 'center',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', }}>
          <View style={{width: 80,  height: 27, justifyContent: 'space-around',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
            <Image 
                          resizeMode="contain" style={{width: 13,height: 13,}}
                         source={require('../play.png')}/>
            <Text style={{color: 'white', fontSize: 12,
                     fontFamily: 'mont-semi'}}>PLAY</Text>
                     </View>
          </View>
          <View style={{width: 125, backgroundColor: '#fff', height: 27, justifyContent: 'center',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
          <View style={{width: 80,  height: 27, justifyContent: 'space-around',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontFamily: 'mont', color: '#FFA500'}}>
            +
           </Text>
            <Text style={{color: 'white', fontSize: 14,color: '#FFA500',
                     fontFamily: 'mont-semi'}}>List</Text></View>
          </View>
                        
                        </View>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 150, marginLeft: 10, marginBottom: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 5,}}>
                         <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={require('../roti.jpg')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280, alignSelf: 'center'}}>
                        <View style={{width: 125, backgroundColor: '#FFA500', height: 27, justifyContent: 'center',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', }}>
          <View style={{width: 80,  height: 27, justifyContent: 'space-around',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
            <Image 
                          resizeMode="contain" style={{width: 13,height: 13,}}
                         source={require('../play.png')}/>
            <Text style={{color: 'white', fontSize: 12,
                     fontFamily: 'mont-semi'}}>PLAY</Text>
                     </View>
          </View>
          <View style={{width: 125, backgroundColor: '#fff', height: 27, justifyContent: 'center',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
          <View style={{width: 80,  height: 27, justifyContent: 'space-around',
          paddingLeft: 10, paddingRight: 10, alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontFamily: 'mont', color: '#FFA500'}}>
            +
           </Text>
            <Text style={{color: 'white', fontSize: 14,color: '#FFA500',
                     fontFamily: 'mont-semi'}}>List</Text></View>
          </View>
                        
                        </View>
                    </View>
                    </TouchableNativeFeedback>                                                    
      </ScrollView>                                                
      
          <Text style={{fontSize: 12, color: 'white', marginBottom: 5, fontFamily: 'mont-bold', marginLeft: 10}}>
       Popular on Kalewo
      </Text>
      <ScrollView horizontal={true}
      keyboardShouldPersistTaps={'never'}  showsHorizontalScrollIndicator={false}
                                                //       overScrollMode={'never'}
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
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../skinnyGirl.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../jenifasDiary.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../kingOfBoys.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../upNorth.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      </ScrollView>
      <Text style={{fontSize: 12, color: 'white', marginTop: 10, marginBottom: 5, fontFamily: 'mont-bold', marginLeft: 10}}>
      Trending Now
      </Text>
      <ScrollView horizontal={true}
      keyboardShouldPersistTaps={'never'}  showsHorizontalScrollIndicator={false}
                                                //       overScrollMode={'never'}
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
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../skinnyGirl.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../jenifasDiary.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../kingOfBoys.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../upNorth.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                }
                )}
                ><Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: 100, height: 140, borderWidth: 3, borderColor: 'white', marginLeft: 15}}/>
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
            />
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
            */
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
        justifyContent: 'space-evenly',
        width: '100%',
        backgroundColor: '#000', 
     //   marginBottom: 20,
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
