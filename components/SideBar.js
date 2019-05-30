import React, { Component } from "react";
import {
  ActivityIndicator,
  Platform,
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
} from "react-native";
import axios from "axios";
import { connect } from "react-redux";
var SharedPreferences = require("react-native-shared-preferences");
import {
  trueAccount,
  trueHelp,
  trueHome,
  trueLoggedIn,
  trueMore,
  trueMyList,
  trueSearch,
  falseAccount,
  falseHelp,
  falseHome,
  falseLoggedIn,
  falseMore,
  falseMyList,
  falseSearch,
  trueNot,
  falseNot
} from "../actions/index";
const api_key = "114063_a93666d11c33ea8dccac";

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
    falseNot: not => dispatch(falseNot(not))
  };
};
class reduxSideBar extends Component {
  logOut(){
    SharedPreferences.clear();
    this.props.navigation.navigate('Login')
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
      this.nameGet(value)
  //    this.otherlistGet(value)
      this.setState({token: value}, );
      }   
    }.bind(this));
  }
  static navigationOptions = {
    header: null
  };
  nameGet(token){
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
  constructor(props) {
    super(props);
    this.state = {
      pressed: "",
      token: '',
      id: '',
      userDetail: []
    };
    this.cll = this.cll.bind(this);
  }
  cll(it) {
    this.setState({ pressed: it });
  }
  lister() {
    this.props.trueMore("more");
    this.props.trueMyList("myList");
    this.props.falseAccount("account");
    this.props.falseHelp("help");
    this.props.falseSearch("search");
    this.props.falseHome("home");
    this.props.falseNot("not");
    this.props.navigation.navigate("MyList");
  }
  notifications() {
    this.props.trueMore("more");
    this.props.trueNot("not");
    this.props.falseAccount("account");
    this.props.falseHelp("help");
    this.props.falseSearch("search");
    this.props.falseHome("home");
    this.props.falseMyList("myList");
    this.props.navigation.navigate("Notifications");
  }
  helper() {
    this.props.trueMore("more");
    this.props.trueHelp("help");
    this.props.falseAccount("account");
    this.props.falseNot("not");
    this.props.falseSearch("search");
    this.props.falseHome("home");
    this.props.falseMyList("myList");
    this.props.navigation.navigate("Help");
  }
  profile() {
    this.props.trueAccount("account");
    this.props.falseHome("home");
    this.props.falseSearch("search");
    this.props.falseMore("more");
    this.props.falseHelp("help");
    this.props.falseNot("not");
    this.props.falseMyList("myList");
    this.props.navigation.navigate("Described");
  }
  render() {
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
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(47,43,43,1)",
          flexDirection: "column"
        }}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="light-content"
        />
        <View
          style={{
            width: 169,
            height: 169,
            borderRadius: 84.5,
            backgroundColor: "transparent",
            borderColor: "#FCAA4A",
            borderWidth: 1,
            marginTop: 100,
            alignSelf: "center",
            justifyContent: "center"
          }}
        >
          {picture}
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "camptonBold",
            fontSize: 20,
            marginTop: 8,
            color: "white"
          }}
        >
          {this.state.userDetail[0]?this.state.userDetail[0].name:null}
        </Text>
        <TouchableOpacity onPress={this.profile.bind(this)}>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "camptonLight",
              fontSize: 9,
              color: "#FCAA4A"
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#878383",
            marginTop: 25
          }}
        />
        <TouchableWithoutFeedback onPress={this.lister.bind(this)}>
          <View style={this.props.myList ? styles.cn : styles.un}>
            {this.props.myList ? (
              <Image
                style={{ width: 14, height: 14 }}
                resizeMode="stretch"
                source={require("../listt.png")}
              />
            ) : (
              <Image
                style={{ width: 14, height: 14 }}
                resizeMode="stretch"
                source={require("../list.png")}
              />
            )}
            <Text
              style={{
                fontFamily: "camptonBold",
                fontSize: 16,
                color: "white",
                marginLeft: 10
              }}
            >
              My List
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#878383" }}
        />
        <TouchableWithoutFeedback onPress={this.notifications.bind(this)}>
          <View style={this.props.not ? styles.cn : styles.un}>
            {this.props.not ? (
              <Image
                style={{ width: 14, height: 14 }}
                resizeMode="stretch"
                source={require("../not.png")}
              />
            ) : (
              <Image
                style={{ width: 14, height: 14 }}
                resizeMode="stretch"
                source={require("../noter.png")}
              />
            )}
            <Text
              style={{
                fontFamily: "camptonBold",
                fontSize: 16,
                color: "white",
                marginLeft: 10
              }}
            >
              Notifications
            </Text>
            <View
              style={{
                backgroundColor: "rgba(252, 170, 74, 0.8)",
                marginLeft: 20,
                width: 18,
                height: 12,
                borderRadius: 10,
                justifyContent: "center",
                opacity: 0
              }}
            >
              <Text
                style={{
                  fontFamily: "camptonBold",
                  fontSize: 10,
                  color: "white",
                  alignSelf: "center"
                }}
              >
                33
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#878383" }}
        />
        <TouchableWithoutFeedback onPress={this.helper.bind(this)}>
          <View style={this.props.help ? styles.cn : styles.un}>
            {this.props.help ? (
              <Image
                style={{ width: 14, height: 14 }}
                resizeMode="stretch"
                source={require("../information(1).png")}
              />
            ) : (
              <Image
                style={{ width: 14, height: 14 }}
                resizeMode="stretch"
                source={require("../information.png")}
              />
            )}
            <Text
              style={{
                fontFamily: "camptonBold",
                fontSize: 16,
                color: "white",
                marginLeft: 10
              }}
            >
              Help
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#878383" }}
        />
        <TouchableWithoutFeedback
          onPress={this.logOut.bind(this)}
        >
          <View
            style={{
              width: "100%",
              height: 44,
              backgroundColor: "transparent",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 11
            }}
          >
            <Image
              style={{ width: 14, height: 14 }}
              resizeMode="stretch"
              source={require("../logout.png")}
            />
            <Text
              style={{
                fontFamily: "camptonBold",
                fontSize: 16,
                color: "white",
                marginLeft: 10
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#878383" }}
        />
      </View>
    );
  }
}

const SideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxSideBar);
export default SideBar;
const styles = StyleSheet.create({
  cn: {
    width: "100%",
    height: 44,
    backgroundColor: "#0D0D0D",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 11
  },
  un: {
    width: "100%",
    height: 44,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 11
  }
});
