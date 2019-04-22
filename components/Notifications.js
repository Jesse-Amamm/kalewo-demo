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
class reduxNotification extends Component{
  
  componentDidMount() {
  
    }
    static navigationOptions = {
      header: null,
  };
  
constructor(props) {
  super(props);
  this.state = {
    cleared: false
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

  render() {
 
    return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
       <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
       <View style={{backgroundColor: '#2F2B2B',width: '100%', height: 57+StatusBar.currentHeight, 
       flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 25,
       paddingRight: 25, paddingTop: StatusBar.currentHeight}}>
        <TouchableWithoutFeedback>
        <View style={{width: 15, height: 20,opacity: 0}}>
        <Image resizeMode="contain"
        style={{width: 15, height: 20,}}
        source={require('../backWhite.png')}/>
        </View></TouchableWithoutFeedback>
        <Text style={{fontFamily: 'camptonBold', fontSize: 21, color: 'white'}}>
        Notifications</Text>
        <TouchableWithoutFeedback onPress={() => this.setState({cleared: true})}>
        <Image resizeMode="contain"
                                   style={{width: 32, height: 25}}
                                   source={require('../clear.png')}/></TouchableWithoutFeedback>
       </View>        
       {this.state.cleared?
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
                                   style={{width: 158, height: 183, alignSelf:'center'}}
                                   source={require('../nonow.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 14, color: 'white', alignSelf:'center',
        marginTop: 23}}>
        No new notifications currently!
        </Text>
       </View></ScrollView>
       :
       <ScrollView 
      keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
<ScrollView 
contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps='always'  horizontal={true}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
       <View style={{flexDirection: 'row', height: 188, width: '100%', marginTop: 18, 
       backgroundColor: '#2F2B2B',  alignItems: 'center'}}>
       <Image resizeMode="contain"
                                   style={{width: 111, height: 168, borderRadius: 6, 
                                   marginLeft: 20, }}
                                   source={require('../hakkunde.png')}/>
        <View style={{height: 102, flexDirection: 'column', 
        justifyContent: 'space-between', marginLeft: 20}}>
        <Text style={{fontFamily: 'camptonBold', fontSize: 26, color: 'white'}}>
          Top Pick for You
        </Text>
        <Text style={{fontFamily: 'camptonLight', fontSize: 18, color: '#979292'}}>
          Hakkunde
        </Text>
        <Text style={{fontFamily: 'camptonLight', fontSize: 14, color: '#979292'}}>
          Mar 2
        </Text>
        <Text style={{fontFamily: 'camptonLight', 
        fontSize: 20, color: 'white'}}>
          1hr43mins
        </Text>
        </View>
        <View style={{height: 17, width: 17, position: 'absolute', right: 20, bottom: 15}}>
        <Image resizeMode="contain"
                                   style={{flex: 1}}
                                   source={require('../delete.png')}/>
        </View>
       </View></ScrollView></ScrollView>}
       
       <View style={{width: '100%', height: 54, backgroundColor: 'black', 
      alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row',
      borderTopColor: '#FCAA4A', borderTopWidth: 1}}>
       <TouchableWithoutFeedback  onPress={this.homer.bind(this)}>
       <View style={{flexDirection: 'column', width: 23, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 20, height: 20, }} resizeMode="stretch"
        source={require('../homew.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: 'white'}}>HOME</Text>
       </View></TouchableWithoutFeedback>
       <TouchableWithoutFeedback  onPress={this.search.bind(this)}>
       <View style={{flexDirection: 'column', width: 34, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 20, height: 20, }} resizeMode="stretch"
        source={require('../searcher.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: 'white'}}>SEARCH</Text>
       </View></TouchableWithoutFeedback>
       <TouchableWithoutFeedback onPress={this.account.bind(this)}>
       <View style={{flexDirection: 'column', width: 40, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 20, height: 20, }} resizeMode="stretch"
        source={require('../acc.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: 'white'}}>ACCOUNT</Text>
       </View></TouchableWithoutFeedback>
       <TouchableWithoutFeedback onPress={() =>
                this.props.navigation.openDrawer()}>
                <View style={{flexDirection: 'column', width: 40, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 30, height: 8, }} resizeMode="stretch"
        source={require('../moreY.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: '#FCAA4A'}}>MORE</Text>
       </View></TouchableWithoutFeedback>
      </View>
      </View>
    );
  }
}
const Notification = connect(mapStateToProps, mapDispatchToProps)(reduxNotification);
export default Notification;
const styles = StyleSheet.create({
});
