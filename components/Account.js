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

var SharedPreferences = require("react-native-shared-preferences");

const mapStateToProps = state => {
return {
    home: state.home,
    more: state.more,
    search: state.search,
    account: state.account,
    myList: state.myList,
    help: state.help,
    loggedIn: state.loggedIn,
    not: state.not,
    PP: state.PP
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
class reduxAccount extends Component{
  listGet(token){
    var config = {
      headers: {'Authorization': "Bearer " + token}
    };
    axios
    .get("http://app.kalewo.ng/api/user",
    config)
    .then(response => {
      console.log(response.data.data);
      var len = response.data ? response.data.data.length : null;
      console.log(len+"--len");
      this.setState(
        prevState => ({
          userDetail: [...prevState.userDetail, response.data.data]
        }), () => {"state"+ console.log(this.state.userDetail[0].name); }
      );
    //  response.data.success
      this.setState({regLoader: false});
    })
    .catch(error => {
      this.setState({regLoader: false});
      Alert.alert(
        "Error",
        "Profile error"+JSON.stringify(error.response.message),
        [{ text: "OK" }]
      );
      console.log("kl"+ JSON.stringify(error));
    });
  }
  otherlistGet(token){
    var config = {
      headers: {'Authorization': "Bearer " + token}
    };
    axios
    .get("http://app.kalewo.ng/api/getlistitems/"+this.state.id,
    config)
    .then(response => {
      console.log(response);
      var len = response.data ? response.data.data.length : null;
   //   console.log(len+"--len");
      for(let i = 0;i<len;i++){
        console.log(response.data.data[i].resource_id+" ::resource_id");
        axios
        .get("http://api.dacast.com/v2/vod/"+response.data.data[i].resource_id+"?apikey=" + api_key + "&_format=JSON")
        .then(response => {
         console.log(response);
         var len = response.data ? response.data.length : null;
         console.log(len+"<<<len");
         let row = response.data;
         this.setState(
          prevState => ({
            list: [...prevState.list, row]
          }),
         );
        })
        .catch(error => {
       //   this.setState({ regLoader: false });
          Alert.alert("Error", 'get vod error', [
            { text: "OK" }
          ]);
          console.log(JSON.stringify(error));
        });
      }
  /*    this.props.navigation.navigate("Described", {token: response.data.success.token,
      id: response.data.success.id});*/
      this.setState({regLoader: false});
    })
    .catch(error => {
      this.setState({regLoader: false});
      Alert.alert(
        "Error",
        "get list items error"+JSON.stringify(error.response.data.error),
        [{ text: "OK" }]
      );
      console.log(JSON.stringify(error.response.data.error));
    });
  }
  componentDidMount() {
    this.setState({regLoader: true});
    SharedPreferences.getItem("key2", function(value){
      if(value){
      this.setState({id: value})    
      }   
    }.bind(this));
  SharedPreferences.getItem("key1", function(value){
      if(value){
     //   this.setState({regLoader: true})
      this.listGet(value)
      this.otherlistGet(value)
      this.setState({token: value}, );
      }   
    }.bind(this));
  }
    static navigationOptions = {
      header: null,
  };
  
constructor(props) {
  super(props);
  this.state = {
    cleared: false,
    token: '',
    id: '',
    regLoader: false,
    userDetail: [],
    list: []
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

  render() {
    const list = (
      <FlatList
      data={this.state.list}
      horizontal={true}
      renderItem={({ item, index }) => (
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.navigate("Selection", {
              title: item.title,
              image: item.pictures.thumbnail[0],
              description: item.description,
              more: this.state.list,
              uri: item.share_code.facebook,
              duration: item.duration,
              id: item.id
            })
          }
        >
          <View style={{ width: 111, height: 168, marginLeft: 11 }}>
            {item.pictures.thumbnail[0] ? (
              <Image
                style={{ width: 111, height: 168 }}
                resizeMode="cover"
                source={{ uri: item.pictures.thumbnail[0] }}
              />
            ) : (
              <Image
                style={{ width: 111, height: 168 }}
                resizeMode="cover"
                source={require("../thisit.png")}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      )}
      
      keyExtractor={(item, index) => `list-item-${index}`}
    /> 
    );
    let picture = '';
    if(this.props.PP){
      picture = <Image style={{width: 142, height:142,borderRadius: 71,alignSelf: 'center' }} resizeMode="cover"
      source={{uri: this.props.PP}}/>
    }else{
      if(this.state.userDetail[0]){
        picture = <Image style={{width: 142, height:142,borderRadius: 71,alignSelf: 'center' }} resizeMode="cover"
        source={{uri: this.state.userDetail[0].photo}}/>
      }else{
        picture = <Image style={{width: 142, height:142,borderRadius: 71,alignSelf: 'center' }} resizeMode="cover"
        source={require('../user.png')}/>
      }
    }
    return (
      
        <View style={{flex: 1, backgroundColor: '#000'}}>
       <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
       <View 
       style={{backgroundColor: '#2F2B2B', width: '100%', 
       height: 57+StatusBar.currentHeight, 
       flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 25,
       paddingRight: 25, paddingTop: StatusBar.currentHeight}}>
        <TouchableWithoutFeedback>
        <View style={{width: 15, height: 20,opacity: 0}}>
        <Image resizeMode="contain"
        style={{width: 15, height: 20,}}
        source={require('../backWhite.png')}/>
        </View></TouchableWithoutFeedback>
        <Image resizeMode="contain"
                                   style={{width: 111, height: 23, }}
                                   source={require('../kl.png')}/>
        <Image resizeMode="contain"
                                   style={{width: 32, height: 25, opacity: 0}}
                                   source={require('../clear.png')}/>
       </View>        
       <ScrollView 
       contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
                                                         
       <View style={{width: 169, height:169,borderRadius: 84.5, backgroundColor: 'transparent', 
       borderColor: '#FCAA4A', borderWidth: 1, marginTop: 29,
       alignSelf: 'center', justifyContent: 'center', }}>
       {picture}
       </View>
       <TouchableWithoutFeedback onPress={() =>
                this.props.navigation.navigate('EditProfile', {
                  name: this.state.userDetail[0].name,
                  email: this.state.userDetail[0].email,
                  phone: this.state.userDetail[0].phone,
                  token: this.state.token,
                  photo: this.state.userDetail[0].photo
                }
                )}>
       <View style={{position: 'absolute', top: 24, right: 42,
       width: 25, height: 23}}>
       <Image style={{width: 25, height: 23}} resizeMode="contain"
        source={require('../edit.png')}/>
       </View></TouchableWithoutFeedback>
       <Text style={{fontFamily: 'camptonBold', color: 'white', marginTop: 11, fontSize: 19,
       alignSelf: 'center'}}>{this.state.userDetail[0]?this.state.userDetail[0].name:null}</Text>
       <View style={{flexDirection: 'row', width: 140, justifyContent: 'space-between',
       alignSelf: 'center',marginTop: 18}}>
       <Image style={{width: 16, height: 12}} resizeMode="contain"
        source={require('../emailY.png')}/>
        <Text style={{color: '#C4C4C4', fontFamily: 'camptonLight', fontSize: 12}}>
        {this.state.userDetail[0]?this.state.userDetail[0].email:null}
        </Text>
       </View>
       <View style={{flexDirection: 'row', width: 115, justifyContent: 'space-between',
       alignSelf: 'center',marginTop: 9}}>
       <Image style={{width: 12, height: 13}} resizeMode="contain"
        source={require('../phoneY.png')}/>
        <Text style={{color: '#C4C4C4', fontFamily: 'camptonLight', fontSize: 12}}>
        {this.state.userDetail[0]?this.state.userDetail[0].phone:null}
        </Text>
       </View>
       <View style={{marginTop: 11, backgroundColor: '#FCAA4A', width: 114, height: 15, 
       alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black', fontFamily: 'camptonBold', fontSize: 10}}>
        Premium Membership
        </Text>
       </View>
       <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ResetPassword',{})}>
       <View style={{marginTop: 9, backgroundColor: '#FCAA4A', width: 80, height: 15, 
       alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black', fontFamily: 'camptonLight', fontSize: 9}}>
        Reset Password
        </Text>
       </View></TouchableWithoutFeedback>
       <Text style={{fontFamily: 'camptonBold', color: '#FCAA4A', fontSize: 12, marginLeft: 16, 
      marginBottom: 9, marginTop: 24}}>
      MY LIST
      </Text>
      {list}
     {/*  <Text style={{fontFamily: 'camptonBold', color: '#FCAA4A', fontSize: 12, marginLeft: 16, 
      marginBottom: 9, marginTop: 12}}>
       SUGGESTIONS
      </Text>
      <ScrollView horizontal={true}
      keyboardShouldPersistTaps='always'  showsHorizontalScrollIndicator={false}
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
         <View style={{width: 111, height: 168, marginLeft: 22}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../big.png')}/></View>
        <View style={{width: 111, height: 168, marginLeft: 11}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../thisit.png')}/></View>
        <View style={{width: 111, height: 168, marginLeft: 11}}>
        <Image style={{width: 111, height: 168, }} resizeMode="stretch"
        source={require('../wp.png')}/></View>
        <View style={{width: 111, height: 168, marginLeft: 11}}>
        <Image style={{width: 111, height: 168, }} resizeMode="cover"
        source={require('../wp.png')}/></View>
                                                         </ScrollView>  */}                                               
       </ScrollView>
      </View>
    );
  }
}
const Account = connect(mapStateToProps, mapDispatchToProps)(reduxAccount);
export default Account;
const styles = StyleSheet.create({
});
