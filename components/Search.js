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
    falseMyList, falseSearch,
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
      loggedIn: state.loggedIn
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
class reduxSearch extends Component{
  
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
       <View style={{width: '71.2%', height: 30, backgroundColor: '#2F2B2B', alignItems: 'center',
       borderRadius: 4, alignSelf: 'center', marginTop: 38, flexDirection: 'row'}}>
       <Image resizeMode="contain"
                                   style={{width: 13, height: 13,left: 2, marginRight: 5}}
                                   source={require('../searchl.png')}/>
       <TextInput           
       
                            returnKeyType={'search'}
                            underlineColorAndroid={'transparent'}
                            placeholder="Search"
                                       placeholderStyle={{fontSize: 14, fontFamily: 'camptonLight'}}
                                       placeholderTextColor="#ABA5A5"
style={{
                                           flex: 1,
                                           padding: 0,
                                          margin: 0,
                                           width: '70%',
                                           backgroundColor: 'transparent',
                                           fontSize: 14, fontFamily: 'camptonLight', color: '#ABA5A5',
                                       }}/>
                                       <Image resizeMode="contain"
                                   style={{width: 15, height: 15, position: 'absolute', right: 2}}
                                   source={require('../error.png')}/>
                                       </View>
       <ScrollView 
       contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>

       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', }}>
       <Image resizeMode="contain"
                                   style={{width: 271, height: 216, alignSelf:'center'}}
                                   source={require('../noSearch.png')}/>
       </View></ScrollView>
      </View>
    );
  }
}
const Search = connect(mapStateToProps, mapDispatchToProps)(reduxSearch);
export default Search;
const styles = StyleSheet.create({
});
