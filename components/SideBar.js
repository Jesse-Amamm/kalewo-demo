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
export default class SideBar extends Component{
  componentDidMount() {
  
    }
  static navigationOptions = {
    header: null,
    };
  
constructor(props) {
  super(props);
  this.state = {
    pressed: ''
  };
  this.cll = this.cll.bind(this);
}
  cll(it){
    this.setState({pressed: it});
  }
  render() {
 
    return (
        <View style={{flex: 1, backgroundColor: 'rgba(47,43,43,1)', flexDirection: 'column'}}>
       <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
       <View style={{width: 169, height:169,borderRadius: 84.5, backgroundColor: 'transparent', 
       borderColor: '#FCAA4A', borderWidth: 1, marginTop: 130,
       alignSelf: 'center', justifyContent: 'center', }}>
       <Image style={{width: 142, height:142,borderRadius: 71,alignSelf: 'center' }} resizeMode="cover"
        source={require('../pp.png')}/>
       </View>
       <Text style={{alignSelf: 'center', fontFamily: 'camptonBold',
       fontSize: 20, marginTop: 8, color: 'white'}}>Tolu Ade</Text>
       <Text style={{alignSelf: 'center', fontFamily: 'camptonLight',
       fontSize: 9,color: '#FCAA4A'}}>View Profile</Text>
       <View style={{width: '100%', height: 1, 
       backgroundColor: '#878383', marginTop: 51}}></View>
       <TouchableNativeFeedback onPressIn={() => this.cll("list")}>
       <View style={this.state.pressed === "list"? styles.cn: styles.un}>
       {this.state.pressed === "list"?<Image style={{width: 14, height: 14, }} resizeMode="stretch"
        source={require('../listt.png')}/>:<Image style={{width: 14, height: 14, }} resizeMode="stretch"
        source={require('../list.png')}/>}
        <Text style={{fontFamily: 'camptonBold', fontSize: 16,
         color: 'white', marginLeft: 10}}>My List</Text>
       </View></TouchableNativeFeedback>
       <View style={{width: '100%', height: 1, 
       backgroundColor: '#878383'}}></View>
        <TouchableNativeFeedback onPressIn={() => this.cll("not")}>
        <View  style={this.state.pressed === "not"? styles.cn: styles.un}>
        {this.state.pressed === "not"? <Image style={{width: 14, height: 14, }} resizeMode="stretch"
        source={require('../not.png')}/>:<Image style={{width: 14, height: 14, }} resizeMode="stretch"
        source={require('../noter.png')}/>}
        <Text style={{fontFamily: 'camptonBold', fontSize: 16,
         color: 'white', marginLeft: 10}}>Notifications</Text>
         <View style={{backgroundColor: 'rgba(252, 170, 74, 0.8)', marginLeft: 34,
         width: 18, height: 12, borderRadius: 10, justifyContent: 'center',}}>
         <Text style={{fontFamily: 'camptonBold', fontSize: 10, color: 'white', alignSelf: 'center'}}>
         33
         </Text>
         </View>
         </View></TouchableNativeFeedback>
         <View style={{width: '100%', height: 1, 
       backgroundColor: '#878383'}}></View>
       <TouchableNativeFeedback onPressIn={() => this.cll("help")}>
       <View style={this.state.pressed === "help"? styles.cn: styles.un}>
       {this.state.pressed === "help"?<Image style={{width: 14, height: 14, }} resizeMode="stretch"
        source={require('../information(1).png')}/>:
        <Image style={{width: 14, height: 14, }} resizeMode="stretch"
        source={require('../information.png')}/>}
        <Text style={{fontFamily: 'camptonBold', fontSize: 16,
         color: 'white', marginLeft: 10}}>Help</Text>
       </View></TouchableNativeFeedback>
       <View style={{width: '100%', height: 1, 
       backgroundColor: '#878383'}}></View>
       <View style={{width: '100%', height: 44, backgroundColor: 'transparent', 
       flexDirection: 'row', alignItems: 'center', paddingLeft: 11}}>
       <Image style={{width: 14, height: 14, }} resizeMode="stretch"
        source={require('../logout.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 16,
         color: 'white', marginLeft: 10}}>Logout</Text>
       </View>
       <View style={{width: '100%', height: 1, 
       backgroundColor: '#878383'}}></View>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  cn: {
    width: '100%', height: 44, backgroundColor: '#0D0D0D', 
    flexDirection: 'row', alignItems: 'center', paddingLeft: 11
  }, 
  un: {
    width: '100%', height: 44, 
    backgroundColor: 'transparent', 
    flexDirection: 'row', alignItems: 'center', 
    paddingLeft: 11
  }
});