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
  TouchableOpacity
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
var SharedPreferences = require("react-native-shared-preferences");
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
class reduxMyList extends Component{
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
  listGet(token){
    var config = {
      headers: {'Authorization': "Bearer " + token}
    };
    axios
    .get("http://app.kalewo.ng/api/getlistitems/"+this.state.id,
    config)
    .then(response => {
      console.log(response);
      var len = response.data ? response.data.data.length : null;
      console.log(len+"--len");
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
      this.listGet(value)
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
    id: '',
    token: '',
    list: []
  };
  this.listGet = this.listGet.bind(this);
}
  delete(id){
    var config = {
      headers: {'Authorization': "Bearer " + this.state.token}
    };
    axios
    .get("http://app.kalewo.ng/api/deletelistitem/"+id,
    config)
    .then(response => {
    //  console.log(response);
      Alert.alert(
        "Success",
        "Video successfully removed",
        [{ text: "OK" }]
      );
      this.deleteItemById(id);
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
  deleteItemById = id => {
    const filteredData = this.state.list.filter(item => item.id !== id);
    this.setState({ list: filteredData });
  }
  render() {
    const items = 
    (
      <FlatList
        data={this.state.list}
        renderItem={({ item }) => (
       <View style={{flexDirection: 'row', height: 188, width: '100%', marginTop: 18, 
       backgroundColor: '#2F2B2B', alignItems: 'center'}}>
        {item.pictures.thumbnail[0] ? (
                <Image
                  style={{width: 111, height: 168, borderRadius: 6, 
                                   marginLeft: 20, }}
                  resizeMode="contain"
                  source={{ uri: item.pictures.thumbnail[0] }}
                />
              ) :
       <Image resizeMode="contain"
                                   style={{width: 111, height: 168, borderRadius: 6, 
                                   marginLeft: 20, }}
                                   source={require('../thisit.png')}/>}
        <View style={{height: 102, flexDirection: 'column', 
        justifyContent: 'space-between', marginLeft: 20}}>
        <Text 
        numberOfLines={1}
        style={{fontFamily: 'camptonBold', fontSize: 19, color: 'white'}}>
        {item.title}
        </Text>
        <Text numberOfLines={1}
        style={{fontFamily: 'camptonLight', fontSize: 17, color: '#979292'}}>
         {item.description}
        </Text>
        <Text style={{fontFamily: 'camptonLight', fontSize: 17, color: '#979292'}}>
         Duration:{item.duration}
        </Text>
        <View style={{width: '56%', height: 2, borderRadius: 5,
         backgroundColor: '#C4C4C4'}}>
        <View style={{height: '100%', width: '60%', borderRadius: 5,
        backgroundColor: '#FCAA4A'}}>

        </View>
        </View>
        </View>
        <View style={{position: 'absolute', right: 19, top: 12,
        height: 17, width: 17,}}>
        <TouchableOpacity 
        onPress={this.delete.bind(this, item.id)}>
        <View style={{flex: 1}}>
        <Image resizeMode="contain"
                                   style={{flex: 1}}
                                   source={require('../error.png')}/>
        </View></TouchableOpacity></View>
       </View>
        )}
      //  keyExtractor = {({item}) => item.id}   
      />
    );
    return (
       <View style={{flex: 1, backgroundColor: '#000'}}>
       <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content'/>
       <View style={{backgroundColor: '#2F2B2B', width: '100%', height: 57+StatusBar.currentHeight,
       flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 25,
       paddingRight: 25, paddingTop: StatusBar.currentHeight}}>
        <TouchableWithoutFeedback>
        <View style={{width: 15, height: 20, opacity: 0}}>
        <Image resizeMode="contain"
        style={{width: 15, height: 20,}}
        source={require('../backWhite.png')}/>
        </View></TouchableWithoutFeedback>
        <Text style={{fontFamily: 'camptonBold', fontSize: 21, color: 'white'}}>
        My List</Text>
        <Image resizeMode="contain"
                                   style={{width: 20, height: 25,opacity: 0}}
                                   source={require('../clear.png')}/>
       </View>
       {items}
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
     {/*  <TouchableWithoutFeedback  onPress={this.search.bind(this)}>
       <View style={{flexDirection: 'column', width: 34, height: 29, 
       justifyContent: 'space-around', alignItems: 'center'}}>
        <Image style={{width: 20, height: 20, }} resizeMode="stretch"
        source={require('../searcher.png')}/>
        <Text style={{fontFamily: 'camptonBold', fontSize: 7, color: 'white'}}>SEARCH</Text>
       </View></TouchableWithoutFeedback> */}
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
const MyList = connect(mapStateToProps, mapDispatchToProps)(reduxMyList);
export default MyList;
const styles = StyleSheet.create({
});
