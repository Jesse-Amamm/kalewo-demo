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
  ViewPagerAndroid,
  TextInput
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import axios from 'axios';
import {BoxShadow} from 'react-native-shadow';
import {connect} from "react-redux";
import {ViewPager} from 'rn-viewpager';
import {
    trueAccount, trueHelp, trueHome, 
    trueLoggedIn, trueMore, trueMyList,
    trueSearch, falseAccount, falseHelp,
    falseHome, falseLoggedIn, falseMore,
    falseMyList, falseSearch,
} from "../actions/index";
import Home from './Home';
import Search from './Search';
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
  };

};
class reduxEditProfile extends Component{
  componentDidUpdate(){ 
      if(this.state.name){
        this.nameTextInput.focus();  
      }
      if(this.state.city){
          this.cityTextInput.focus();
      }
      if(this.state.newP){
          this.newPTextInput.focus();
      }
      if(this.state.oldP){
          this.oldPTextInput.focus();
      }
  }
  handleName(text){
    this.setState({setName: text});
  }
  handleCity(text){
      this.setState({setCity: text})
  }
  handleNewP(text){
      this.setState({setNewP: text})
  }
  handleOldP(text){
      this.setState({setOldP: text})
  }
  onPageSelected(e) {
    let currentPage = e.nativeEvent.position;
    let n = currentPage.toString();
    console.log(currentPage);
    this.setState({n});
    this.setState({no: currentPage});
    if (currentPage == 0) {
        this.setState({one: true});
    } else if (currentPage == 1) {
        this.setState({one: false});
    }
}
onBoxSelected(e) {
    let currentPage = e.nativeEvent.position;
    let n = currentPage.toString();
    console.log(currentPage);
    this.setState({n});
    this.setState({no: currentPage});
    if (currentPage == 0) {
        this.setState({first: true});
    } else if (currentPage == 1) {
        this.setState({first: false});
    }
}

front(){
    this.viewPagerr.setPage(1);
    this.setState({first: false});
}
back(){
    this.viewPagerr.setPage(0);
    this.setState({first: true});
}
  componentDidMount() {}
    static navigationOptions = {
      header: null,
  };
constructor(props) {
  super(props);
  this.state = {
      one: true,
      no: '',
      n: '',
      name: false,
      city: false,
      newP: false,
      oldP: false,
      first: true,
      setName: '',
      setCity: '',
      setOldP: '',
      setNewP: '', 
  };
}
name(){
    this.setState({name: true});
    this.setState({city: false});
    this.setState({newP: false});
    this.setState({oldP: false});
  //  this.nameTextInput.focus();
}
city(){
    this.setState({name: false});
    this.setState({city: true});
    this.setState({newP: false});
    this.setState({oldP: false});
//    this.cityTextInput.focus();
}
newP(){
    this.setState({name: false});
    this.setState({city: false});
    this.setState({newP: true});
    this.setState({oldP: false});
 //   this.newPTextInput.focus();
}
oldP(){
    this.setState({name: false});
    this.setState({city: false});
    this.setState({newP: false});
    this.setState({oldP: true});
//    this.oldPTextInput.focus();
}
  render() {
    const shadowOpt = {
        width: (Dimensions.get('window').width)*(61/100),
        height:39,
        color:"#FFF",
        border:5,
        radius:4,
        opacity:0.5,
        x:0,
        y:2,
       style:{marginVertical:5,alignSelf: 'center',}
      }
      const shadowOpt2 = {
        width: (Dimensions.get('window').width)*(61/100),
        height:39,
        color:"#FFF",
        border:5,
        radius:4,
        opacity:0.5,
        x:0,
        y:2,
       style:{marginVertical:5,alignSelf: 'center', marginTop: 29}
      }
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
      <View style={{marginTop: 34+StatusBar.currentHeight, flexDirection: 'row', width: '100%',
      height: 20, alignItems: 'center'}}>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
      <View style={{width: 22, height: 22,marginLeft: 31}}>
         <Image resizeMode="contain"
                                   style={{ flex: 1}}
                                   source={require('../backWhite.png')}/>
                                   </View>
       </TouchableWithoutFeedback> 
       <Text style={{fontFamily: 'camptonBold', color: '#FCAA4A', fontSize: 12,
      alignSelf: 'center', marginLeft: '27.5%'}}>
      EDIT PROFILE</Text>
      </View>
      <ViewPagerAndroid style={{alignSelf: 'center',width: 142, height: 184}} initialPage={0}
                                  onPageSelected={this.onPageSelected.bind(this)}
                                  ref={(viewPager) => {
                                      this.viewPager = viewPager
                                  }}>
       <View style={{flex: 1}} key="1">
       <Image style={{width: 142, height:142,borderRadius: 71,alignSelf: 'center',
      marginTop: 39 }} resizeMode="cover"
        source={require('../pp.png')}/>
       </View>
                    <View style={{flex: 1, }} key="2">
                    <ImageBackground style={{width: 142, height:142,alignSelf: 'center',
      marginTop: 39 }} resizeMode="cover" imageStyle={{ borderRadius: 71}}
        source={require('../pp.png')}>
            <View style={{width: 142, height:142,borderRadius: 71,alignSelf: 'center',
            backgroundColor: 'rgba(252, 170, 74, 0.6)', alignItems:'center'}}>
            <Image style={{width: 67, height:67,alignSelf: 'center',
      marginTop: 39 }} resizeMode="contain"
        source={require('../camera.png')}/> 
            </View>
        </ImageBackground>
                    
        </View>
        </ViewPagerAndroid>
        <View style={{marginTop: 35, flexDirection: 'row', justifyContent: 'space-between',
         width: 58, height: 3, alignSelf: 'center'}}>
         {this.state.one?<View style={{width: 22, height: 3, backgroundColor: '#FCAA4A', borderRadius: 4}}>

</View>: <View style={{width: 22, height: 3, backgroundColor: '#C4C4C4', borderRadius: 4}}>

</View>}
          {this.state.one?<View style={{width: 22, height: 3, backgroundColor: '#C4C4C4', borderRadius: 4}}>

</View>: <View style={{width: 22, height: 3, backgroundColor: '#FCAA4A', borderRadius: 4}}>

</View>}
        </View>
        <ViewPagerAndroid style={{alignSelf: 'center',width: '61%', height: 178,
        marginTop: '8%'}} initialPage={0}
                                  onPageSelected={this.onBoxSelected.bind(this)}
                                  ref={(viewPagerr) => {
                                      this.viewPagerr = viewPagerr
                                  }}>
<View style={{flex: 1}} key="1">
{this.state.name?<BoxShadow setting={shadowOpt}>
        <View style={{width: '100%', height: 38, alignSelf: 'center',
         backgroundColor: 'white', }}>
        <TextInput            returnKeyType={'next'}
                            underlineColorAndroid={'transparent'}
                            value={this.state.setName}
                                   onChangeText={(text) => this.handleName(text)}
                                       placeholderStyle={{fontSize: 14, fontFamily: 'camptonBold'}}
                                       placeholderTextColor="#4D4949"
                                       ref={(input) => { this.nameTextInput = input; }}
style={{
                                           alignSelf: 'center',
                                           height: 38,
                                           width: '95%',
                                           backgroundColor: 'transparent',
                                           fontSize: 14, fontFamily: 'camptonBold', color: '#4D4949',
                                       }}/>
        </View></BoxShadow>:
        <TouchableWithoutFeedback onPress={this.name.bind(this)}>
        <View style={{width: '100%', height: 38, alignSelf: 'center',
         backgroundColor: '#878383',marginTop: 29, justifyContent: 'center', }}>
        <Text style={{fontFamily: 'camptonBold', fontSize: 12, color: '#D9CBCB', marginLeft: 11}}>
        {this.state.setName?this.state.setName:"NAME"}</Text>
        </View></TouchableWithoutFeedback>
        }
         {this.state.city?<BoxShadow setting={shadowOpt2}>
        <View style={{width: '100%', height: 38, alignSelf: 'center',
         backgroundColor: 'white', }}>
        <TextInput            returnKeyType={'next'}
        ref={(input) => { this.cityTextInput = input; }}
        value={this.state.setCity}
                                   onChangeText={(text) => this.handleCity(text)}
                            underlineColorAndroid={'transparent'}
                                       placeholderStyle={{fontSize: 14, fontFamily: 'camptonBold'}}
                                       placeholderTextColor="#4D4949"
style={{
                                           alignSelf: 'center',
                                           height: 38,
                                           width: '95%',
                                           backgroundColor: 'transparent',
                                           fontSize: 14, fontFamily: 'camptonBold', color: '#4D4949',
                                       }}/>
        </View></BoxShadow>:
        <TouchableWithoutFeedback onPress={this.city.bind(this)}>
        <View style={{width: '100%', height: 38, alignSelf: 'center',
         backgroundColor: '#878383',marginTop: 29, justifyContent: 'center', }}>
        <Text style={{fontFamily: 'camptonBold', fontSize: 12, color: '#D9CBCB', marginLeft: 11}}>
        {this.state.setCity?this.state.setCity:"CITY"}</Text>
        </View></TouchableWithoutFeedback>}
        
 </View>
<View style={{flex: 1, }} key="2">
{this.state.newP?
    <BoxShadow setting={shadowOpt}>
        <View style={{width: '100%', height: 38, alignSelf: 'center',
         backgroundColor: 'white', }}>
        <TextInput            returnKeyType={'next'}
        secureTextEntry={true}
        ref={(input) => { this.newPTextInput = input; }}
        value={this.state.setNewP}
                                   onChangeText={(text) => this.handleNewP(text)}
                            underlineColorAndroid={'transparent'}
                                       placeholderStyle={{fontSize: 14, fontFamily: 'camptonBold'}}
                                       placeholderTextColor="#4D4949"
style={{
                                           alignSelf: 'center',
                                           height: 38,
                                           width: '95%',
                                           backgroundColor: 'transparent',
                                           fontSize: 14, fontFamily: 'camptonBold', color: '#4D4949',
                                       }}/>
        </View></BoxShadow>:
        <TouchableWithoutFeedback onPress={this.newP.bind(this)}>
        <View style={{width: '100%', height: 38, alignSelf: 'center',
         backgroundColor: '#878383',marginTop: 29, 
         justifyContent: 'center', }}>
        <Text style={{fontFamily: 'camptonBold', fontSize: 12, color: '#D9CBCB', marginLeft: 11}}>
         {"NEW PASSWORD"}</Text>
        </View></TouchableWithoutFeedback>}
        {this.state.oldP?<BoxShadow setting={shadowOpt2}>
        <View style={{width: '100%', height: 38, alignSelf: 'center',
         backgroundColor: 'white', }}>
        <TextInput            returnKeyType={'next'}
        secureTextEntry={true}
        ref={(input) => { this.oldPTextInput = input; }}
        value={this.state.setOldP}
                                   onChangeText={(text) => this.handleOldP(text)}
                            underlineColorAndroid={'transparent'}
                                       placeholderStyle={{fontSize: 14, fontFamily: 'camptonBold'}}
                                       placeholderTextColor="#4D4949"
style={{
                                           alignSelf: 'center',
                                           height: 38,
                                           width: '95%',
                                           backgroundColor: 'transparent',
                                           fontSize: 14, fontFamily: 'camptonBold', color: '#4D4949',
                                       }}/>
        </View></BoxShadow>:
        <TouchableWithoutFeedback onPress={this.oldP.bind(this)}>
        <View style={{width: '100%', height: 38, alignSelf: 'center',
         backgroundColor: '#878383',marginTop: 29, justifyContent: 'center', }}>
        <Text style={{fontFamily: 'camptonBold', fontSize: 12, color: '#D9CBCB', marginLeft: 11}}>
         CONFIRM PASSWORD</Text>
        </View></TouchableWithoutFeedback>}
        
</View>
        </ViewPagerAndroid>
            {this.state.first?
            <TouchableWithoutFeedback onPress={this.front.bind(this)}>
            <View style={{width: 56, height:55,alignSelf: 'center',
         marginTop: 58 }}>
            <Image style={{width: 56, height:55,}} resizeMode="contain"
        source={require('../right.png')}/></View></TouchableWithoutFeedback>:
        <TouchableWithoutFeedback onPress={this.back.bind(this)}>
        <View style={{width: 56, height:55,alignSelf: 'center',
         marginTop: 58 }}>
         <Image style={{width: 56, height:55,}} resizeMode="contain"
        source={require('../leftT.png')}/></View></TouchableWithoutFeedback>}
        </ScrollView>
      </View>
    );
  }
}
const EditProfile = connect(mapStateToProps, mapDispatchToProps)(reduxEditProfile);
export default EditProfile;
const styles = StyleSheet.create({
});
