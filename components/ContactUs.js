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
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  FlatList,
  Alert,
  TextInput
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import axios from 'axios';
import {BoxShadow} from 'react-native-shadow';
import {connect} from "react-redux";
import {
  trueAccount, trueHelp, trueHome, 
  trueLoggedIn, trueMore, trueMyList,
  trueSearch, falseAccount, falseHelp,
  falseHome, falseLoggedIn, falseMore,
  falseMyList, falseSearch, trueNot,
  falseNot
} from "../actions/index";
const api_key = '114063_a93666d11c33ea8dccac';

const mapStateToProps = state => {
return {
    home: state.home,
    more: state.more,
    search: state.search,
    account: state.account,
    myList: state.myList,
    help: state.help,
    loggedIn: state.loggedIn,
    not: state.not
};
};
const mapDispatchToProps = dispatch => {
return {
    trueAccount: account => dispatch(trueAccount(account)),
    trueHelp: help => dispatch(trueHelp(help)),
    trueHome: home => dispatch(trueHome(home)),
    trueLoggedIn: loggedIn => dispatch(trueLoggedIn(loggedIn)),
    trueMore: more => dispatch(trueMore(more)),
    trueSearch: search => dispatch(trueSearch(search)),
    falseAccount: account => dispatch(falseAccount(account)),
    falseHome: home => dispatch(falseHome(home)),
    falseHelp: help => dispatch(falseHelp(help)),
    falseLoggedIn: loggedIn => dispatch(falseLoggedIn(loggedIn)),
    trueMyList: myList => dispatch(trueMyList(myList)),
    falseMore: more => dispatch(falseMore(more)),
    falseMyList: myList => dispatch(falseMyList(myList)),
    falseSearch: search => dispatch(falseSearch(search)),
    trueNot: not => dispatch(trueNot(not)),
    falseNot: not => dispatch(falseNot(not)),
};
};
class reduxContactUs extends Component{
  
  componentDidMount() {
  
    }
    static navigationOptions = {
      header: null,
  };
  
constructor(props) {
  super(props);
  this.state = {
    cleared: false,
    seen: false,
    height: 0,
    message: ''
  };
}
homer(){
  this.props.falseMore("more");
  this.props.falseMyList("myList");
  this.props.falseAccount("account");
  this.props.falseHelp("help");
  this.props.falseSearch("search");
  this.props.trueHome("home");
  this.props.falseNot("not");
  this.props.navigation.navigate('Described',)
}
search(){
  this.props.falseMore("more");
  this.props.falseMyList("myList");
  this.props.falseAccount("account");
  this.props.falseHelp("help");
  this.props.trueSearch("search");
  this.props.falseHome("home");
  this.props.falseNot("not");
  this.props.navigation.navigate('Described',)
}
account(){
    this.props.falseMore("more");
    this.props.falseMyList("myList");
    this.props.trueAccount("account");
    this.props.falseHelp("help");
    this.props.falseSearch("search");
    this.props.falseHome("home");
    this.props.falseNot("not");
    this.props.navigation.navigate('Described',)
  }
  seen(){
    this.setState({seen: !this.state.seen})
  }
  render() {
 
    return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
       <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
       <View style={{backgroundColor: '#2F2B2B',  width: '100%', height: 57+StatusBar.currentHeight, 
       flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 25,
       paddingRight: 25, paddingTop: StatusBar.currentHeight}}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
        <View style={{width: 15, height: 20,}}>
        <Image resizeMode="contain"
        style={{width: 15, height: 20,}}
        source={require('../backWhite.png')}/>
        </View></TouchableWithoutFeedback>
        <Text style={{fontFamily: 'camptonBold', fontSize: 21, color: 'white'}}>
         Contact Us</Text>
        <Image resizeMode="contain"
                                   style={{width: 32, height: 25, opacity: 0}}
                                   source={require('../clear.png')}/>
       </View>        
       <ScrollView 
      keyboardShouldPersistTaps='always'  
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
        <View style={{marginTop: 54, alignSelf: 'center',
        width: '95%', height: 38, backgroundColor: '#E9DFDF', borderRadius: 3,
        flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
        <TextInput            returnKeyType={'next'}
        placeholder="Name"
        underlineColorAndroid={'transparent'}
        placeholderStyle={{fontSize: 13, fontFamily: 'camptonBold'}}
        placeholderTextColor="#6D6868"
        style={{
                                           alignSelf: 'center',
                                           height: 35,
                                           width: '100%',
                                           backgroundColor: 'transparent',
                                           fontSize: 13, fontFamily: 'camptonBold', color: '#6D6868',
                                           paddingLeft: 11, paddingRight: 11, 
                                       }}/>
        </View>
        <View style={{marginTop: 39, alignSelf: 'center',
        width: '95%', height: 38, backgroundColor: '#E9DFDF', borderRadius: 3,
        flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
        <TextInput            returnKeyType={'next'}
        placeholder="Email"
        underlineColorAndroid={'transparent'}
        placeholderStyle={{fontSize: 13, fontFamily: 'camptonBold'}}
        placeholderTextColor="#6D6868"
        style={{
                                           alignSelf: 'center',
                                           height: 35,
                                           width: '100%',
                                           backgroundColor: 'transparent',
                                           fontSize: 13, fontFamily: 'camptonBold', color: '#6D6868',
                                           paddingLeft: 11, paddingRight: 11, 
                                       }}/>
        </View>  
        <TextInput
        placeholder="Message"
        multiline={true}
        underlineColorAndroid={'transparent'}
        placeholderStyle={{fontSize: 13, fontFamily: 'camptonBold'}}
        placeholderTextColor="#6D6868"
        style={{
                                           alignSelf: 'center',
                                      //     height: 250,
                                           width: '95%',
                                           backgroundColor: 'transparent',
                                           fontSize: 13, fontFamily: 'camptonBold', color: '#6D6868',
                                           paddingLeft: 11, paddingRight: 11, marginTop: 39,
                                           backgroundColor: '#E9DFDF', borderRadius: 3,
                                       }}/>
        <TouchableWithoutFeedback>
                <View style={{backgroundColor: '#FCAA4A', width: 98, height: 27, 
         alignSelf: 'center', justifyContent: 'center', marginTop: 57, marginBottom: 20}}>
         <Text style={{fontFamily: 'camptonBold', fontSize: 14, 
         color: '#000', alignSelf: 'center'}}>SUBMIT</Text>
         </View></TouchableWithoutFeedback>      
                        </ScrollView>
      </View>
    );
  }
}
const ContactUs = connect(mapStateToProps, mapDispatchToProps)(reduxContactUs);
export default ContactUs;
const styles = StyleSheet.create({
});
