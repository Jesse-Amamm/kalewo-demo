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
  ViewPagerAndroid,
  TouchableOpacity
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import axios from "axios";
import { BoxShadow } from "react-native-shadow";
import { connect } from "react-redux";
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
  falseSearch
} from "../actions/index";
import Home from "./Home";
import Search from "./Search";
var SharedPreferences = require("react-native-shared-preferences");
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
    n: "",
    no: ""
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
    falseSearch: search => dispatch(falseSearch(search))
  };
};
class reduxSelection extends Component {
  componentDidUpdate() {}

  componentDidMount() {
    SharedPreferences.getItem("key2", function(value){
      if(value){
      this.setState({id: value})    
      }   
    }.bind(this));
  SharedPreferences.getItem("key1", function(value){
      if(value){
      this.setState({token: value})    
      }   
    }.bind(this));
  }
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      texter: false,
      regLoader: false,
      id: '',
      token: ''
    };
  }
  adder(id){
    this.setState({regLoader: true});
    var bodyParameters = {
        user_id: this.state.id,
        resource_id: id,
      };
      var config = {
        headers: {'Authorization': "Bearer " + this.state.token}
      };
      axios
        .post("http://app.kalewo.ng/api/addlistitem", bodyParameters,
        config)
        .then(response => {
          console.log(response);
          Alert.alert(
            "Success",
           "This video was added successfully",
            [{ text: "OK" }]
          );
          this.setState({regLoader: false});
        })
        .catch(error => {
          this.setState({regLoader: false});
          Alert.alert(
            "Error",
            JSON.stringify(error.response.data.error),
            [{ text: "OK" }]
          );
          console.log(JSON.stringify(error.response.data.error));
        });
    }
  
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="light-content"
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          directionalLockEnabled={true}
          bounces={false}
          scrollsToTop={false}
        >
          {params.image ? (
            <ImageBackground
              style={{
                width: "100%",
                height: 336,
                justifyContent: "center",
                alignItems: "center"
              }}
              resizeMode="contain"
              source={{ uri: params.image }}
            >
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.goBack()}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    position: "absolute",
                    top: StatusBar.currentHeight + 10,
                    left: 10
                  }}
                  source={require("../backWhite.png")}
                />
              </TouchableWithoutFeedback>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Video", {
                    image: params.image,
                    uri: params.uri
                  })
                }
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 129, height: 129, alignSelf: "center" }}
                  source={require("../playW.png")}
                />
              </TouchableOpacity>
            </ImageBackground>
          ) : (
            <ImageBackground
              style={{
                width: "100%",
                height: 336,
                justifyContent: "center",
                alignItems: "center"
              }}
              resizeMode="contain"
              source={require("../kobs.png")}
            >
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.goBack()}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    position: "absolute",
                    top: StatusBar.currentHeight + 10,
                    left: 10
                  }}
                  source={require("../backWhite.png")}
                />
              </TouchableWithoutFeedback>
              <Image
                resizeMode="contain"
                style={{ width: 129, height: 129, alignSelf: "center" }}
                source={require("../playW.png")}
              />
            </ImageBackground>
          )}
          <Text
            style={{
              color: "white",
              fontFamily: "camptonBold",
              fontSize: 25,
              marginTop: 10,
              marginLeft: 25,
              marginBottom: 14
            }}
          >
            {params.title}
          </Text>
          {params.stream?
          <View
            style={{
              width: 78,
              height: 13,
              justifyContent: "space-between",
              flexDirection: "row",
              marginLeft: 25
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(135, 131, 131, 0.41)",
                borderRadius: 3,
                width: 28,
                height: 12,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "camptonLight",
                  fontSize: 7,
                  alignSelf: "center"
                }}
              >
                2019
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "rgba(135, 131, 131, 0.41)",
                borderRadius: 3,
                width: 46,
                height: 12,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "camptonLight",
                  fontSize: 7,
                  alignSelf: "center"
                }}
              >
                {params.duration}
              </Text>
            </View>
          </View>
          : null
          }
          
          <View style={{ width: "87%", alignSelf: "center" }}>
            {this.state.texter ? (
              <Text
                style={{
                  color: "#878383",
                  fontFamily: "camptonLight",
                  fontSize: 12,
                  alignSelf: "center",
                  marginTop: 21
                }}
              >
                {params.description}
              </Text>
            ) : (
              <Text
                style={{
                  color: "#878383",
                  fontFamily: "camptonLight",
                  fontSize: 12,
                  alignSelf: "center",
                  marginTop: 21
                }}
              >
                {params.description}
              </Text>
            )}
          </View>
          {this.state.texter ? null : (
            <TouchableWithoutFeedback
              onPress={() => this.setState({ texter: true })}
            >
              <Text
                style={{
                  fontFamily: "camptonBold",
                  fontSize: 9,
                  alignSelf: "center",
                  color: "white",
                  marginTop: 9
                }}
              >
                {null}
              </Text>
            </TouchableWithoutFeedback>
          )}
          <View
            style={{
              marginTop: 12,
              width: 70,
              alignSelf: "center",
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            {this.state.regLoader?
            <ActivityIndicator color="white"></ActivityIndicator>
            :<TouchableWithoutFeedback onPress={this.adder.bind(this, params.id)}>
            <View
              style={{
                width: 30,
                height: 28,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
                source={require("../plus.png")}
              />
              <Text
                style={{
                  fontFamily: "camptonLight",
                  fontSize: 5,
                  color: "white"
                }}
              >
                Add to List
              </Text>
            </View></TouchableWithoutFeedback>}
            <View
              style={{
                width: 30,
                height: 28,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
                source={require("../shareG.png")}
              />
              <Text
                style={{
                  fontFamily: "camptonLight",
                  fontSize: 5,
                  color: "white"
                }}
              >
                Share
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "camptonBold",
              color: "#FCAA4A",
              fontSize: 12,
              marginLeft: 25,
              marginBottom: 9
            }}
          >
            MORE LIKE THIS
          </Text>
          <FlatList
            data={params.more}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  this.props.navigation.navigate("Selection", {
                    title: item.title,
                    image: item.pictures.thumbnail[0],
                    description: item.description,
                    more: params.more,
                    uri: item.share_code.facebook
                  })
                }
              >
                <View style={{ width: 111, height: 168, marginLeft: 22 }}>
                  {item.pictures.thumbnail ? (
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
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </View>
    );
  }
}
const Selection = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxSelection);
export default Selection;
const styles = StyleSheet.create({});
