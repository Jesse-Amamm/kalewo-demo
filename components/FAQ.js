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
  Alert
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
class reduxFAQ extends Component{
  
  componentDidMount() {
  
    }
    static navigationOptions = {
      header: null,
  };
  
constructor(props) {
  super(props);
  this.state = {
    cleared: false,
    seen: false
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
         FAQ</Text>
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
        {this.state.seen?
            
        <View style={{marginTop: 54, alignSelf: 'center',paddingLeft: 11, paddingRight: 11, 
        width: '95%', height: 109, backgroundColor: 'white', borderRadius: 3,
        flexDirection: 'column',}}>
        <TouchableWithoutFeedback onPress={this.seen.bind(this)}>
        <View style={{width: '100%', height: 20, marginTop: 13,
        flexDirection: 'row', alignItems: 'center', 
         justifyContent:'space-between'
        }}>
        <Text style={{fontFamily: 'camptonBold', fontSize: 12, color: 'black'}}>
        Does Kalewo Allow users download movies?
        </Text>
        <Image resizeMode="contain"
                                   style={{width: 14, height: 14, }}
                                   source={require('../errorG.png')}/>
        </View>
        </TouchableWithoutFeedback>
        <Text style={{fontFamily: 'camptonLight', fontSize: 10, color: '#2F2B2B', marginTop: 26}}>
        Feature not available on Kalewo currently, movies can be streamed
        and added to lists</Text>
        </View>
        
         :
        <TouchableWithoutFeedback onPress={this.seen.bind(this)}>
        <View style={{marginTop: 54, alignSelf: 'center',paddingLeft: 11, paddingRight: 11, 
        width: '95%', height: 38, backgroundColor: '#E9DFDF', borderRadius: 3,
        flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
        <Text style={{fontFamily: 'camptonBold', fontSize: 12, color: 'black'}}>
        Does Kalewo Allow users download movies?
        </Text>
        <Image resizeMode="contain"
                                   style={{width: 9, height: 4, }}
                                   source={require('../downL.png')}/>
        </View></TouchableWithoutFeedback>}         
                        </ScrollView>
      </View>
    );
  }
}
const FAQ = connect(mapStateToProps, mapDispatchToProps)(reduxFAQ);
export default FAQ;
const styles = StyleSheet.create({
});
