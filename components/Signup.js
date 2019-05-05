/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator
} from "react-native";
var SharedPreferences = require("react-native-shared-preferences");
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      value: '',
      phone: '',
      regLoader: false
    }
  }
  static navigationOptions = {
    header: null
  };
  reg() {
    this.setState({regLoader: true});
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === false) {
      this.setState({regLoader: false});
      Alert.alert("Error", "Valid Email address is required", [{ text: "OK" }]);
    } else if (this.state.password.length < 8) {
      this.setState({regLoader: false});
      Alert.alert(
        "Error",
        "Password is too short, It must be up to 8 characters",
        [{ text: "OK" }]
      );
    } else if (this.state.password.length > 50) {
      this.setState({regLoader: false});
      Alert.alert(
        "Error",
        "Password is too long, It must not be up to 50 characters",
        [{ text: "OK" }]
      );
    } else if (this.state.password.search(/\d/) == -1) {
      this.setState({regLoader: false});
      Alert.alert("Error", "Password must contain at least one digit", [
        { text: "OK" }
      ]);
    } else if (this.state.password.search(/[a-zA-Z]/) == -1) {
      this.setState({regLoader: false});
      Alert.alert("Error", "Password must contain at least one letter", [
        { text: "OK" }
      ]);
    } else if (this.state.password.search(/[^a-zA-Z0-9]/) != -1) {
      this.setState({regLoader: false});
      Alert.alert("Error", "Password must contain digit and letters", [
        { text: "OK" }
      ]);
    } else if (this.state.email.length < 1) {
      this.setState({regLoader: false});
      Alert.alert(
        "Error",
        "Email cannot be empty and must contain a valid Email Address",
        [{ text: "OK" }]
      );
    } else if (this.state.phone.length < 1) {
      this.setState({regLoader: false});
      Alert.alert(
        "Error",
        "Phone number field can't be empty",
        [{ text: "OK" }]
      );
    } else if (this.state.name.length < 1) {
      this.setState({regLoader: false});
      Alert.alert(
        "Error",
        "Name field can't be empty",
        [{ text: "OK" }]
      );
    } else {
      var bodyParameters = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone
      };
      axios
        .post("http://app.kalewo.ng/api/register", bodyParameters)
        .then(response => {
          console.log(response);
          SharedPreferences.setItem("key1", response.data.success.token);
          SharedPreferences.setItem("key2", JSON.stringify(response.data.success.id));
          this.props.navigation.navigate("Described", {token: response.data.success.token,
            id: JSON.stringify(response.data.success.id)});
          this.setState({regLoader: false});
        })
        .catch(error => {
          this.setState({regLoader: false});
          Alert.alert(
            "Error",
            JSON.stringify(error.response.data.error),
            [{ text: "OK" }]
          );
          console.log(error);
        });
    }
  }
  componentDidMount() {
   /* SharedPreferences.getItem("key1", function(value) {
      this.setState({ key: value });
    }); */
  }
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
        source={require("../movieBanners.png")}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.90)",
            flexDirection: "column"
          }}
        >
          <ScrollView
            contentContainerstyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="always"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            directionalLockEnabled={true}
            bounces={false}
            scrollsToTop={false}
          >
            <Image
              resizeMode="contain"
              style={{
                width: 198,
                height: 48,
                marginTop: 150,
                alignSelf: "center"
              }}
              source={require("../kl.png")}
            />
            <View
              style={{
                flexDirection: "row",
                width: "82%",
                alignSelf: "center",
                justifyContent: "space-between",
                height: 34,
                marginTop: "11%"
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 34,
                  justifyContent: "center",
                  backgroundColor: "#494646",
                  borderRadius: 3
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 16, height: 16, alignSelf: "center" }}
                  source={require("../envelope.png")}
                />
              </View>
              <View
                style={{
                  width: "85%",
                  height: 34,
                  backgroundColor: "rgba(79, 76, 76, 0.48)",
                  borderRadius: 3
                }}
              >
                <TextInput
                  returnKeyType={"next"}
                  underlineColorAndroid={"transparent"}
                  placeholder="Email address"
                  placeholderStyle={{
                    fontSize: 14,
                    fontFamily: "camptonLight"
                  }}
                  value={this.state.email}
                  onChangeText={(email) => this.setState({email})}
                  placeholderTextColor="#A09E9E"
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    height: 34,
                    width: "95%",
                    backgroundColor: "transparent",
                    fontSize: 14,
                    fontFamily: "camptonLight",
                    color: "#A09E9E"
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "82%",
                alignSelf: "center",
                justifyContent: "space-between",
                height: 34,
                marginTop: "11%"
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 34,
                  justifyContent: "center",
                  backgroundColor: "#494646",
                  borderRadius: 3
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 16, height: 16, alignSelf: "center" }}
                  source={require("../envelope.png")}
                />
              </View>
              <View
                style={{
                  width: "85%",
                  height: 34,
                  backgroundColor: "rgba(79, 76, 76, 0.48)",
                  borderRadius: 3
                }}
              >
                <TextInput
                  returnKeyType={"next"}
                  underlineColorAndroid={"transparent"}
                  placeholder="Name"
                  placeholderStyle={{
                    fontSize: 14,
                    fontFamily: "camptonLight"
                  }}
                  value={this.state.name}
                  onChangeText={(name) => this.setState({name})}
                  placeholderTextColor="#A09E9E"
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    height: 34,
                    width: "95%",
                    backgroundColor: "transparent",
                    fontSize: 14,
                    fontFamily: "camptonLight",
                    color: "#A09E9E"
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "82%",
                alignSelf: "center",
                justifyContent: "space-between",
                height: 34,
                marginTop: 28
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 34,
                  justifyContent: "center",
                  backgroundColor: "#494646",
                  borderRadius: 3
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 16, height: 16, alignSelf: "center" }}
                  source={require("../lock.png")}
                />
              </View>
              <View
                style={{
                  width: "85%",
                  height: 34,
                  backgroundColor: "rgba(79, 76, 76, 0.48)",
                  borderRadius: 3
                }}
              >
                <TextInput
                  returnKeyType={"next"}
                  underlineColorAndroid={"transparent"}
                  placeholder="Password"
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry={true}
                  placeholderStyle={{
                    fontSize: 14,
                    fontFamily: "camptonLight"
                  }}
                  placeholderTextColor="#A09E9E"
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    height: 34,
                    width: "95%",
                    backgroundColor: "transparent",
                    fontSize: 14,
                    fontFamily: "camptonLight",
                    color: "#A09E9E"
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "82%",
                alignSelf: "center",
                justifyContent: "space-between",
                height: 34,
                marginTop: 28
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 34,
                  justifyContent: "center",
                  backgroundColor: "#494646",
                  borderRadius: 3
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 16, height: 16, alignSelf: "center" }}
                  source={require("../phone.png")}
                />
              </View>
              <View
                style={{
                  width: "85%",
                  height: 34,
                  backgroundColor: "rgba(79, 76, 76, 0.48)",
                  borderRadius: 3
                }}
              >
                <TextInput
                  returnKeyType={"next"}
                  underlineColorAndroid={"transparent"}
                  placeholder="Mobile Number"
                  value={this.state.phone}
                  onChangeText={(phone) => this.setState({phone})}
                  placeholderStyle={{
                    fontSize: 14,
                    fontFamily: "camptonLight"
                  }}
                  placeholderTextColor="#A09E9E"
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    height: 34,
                    width: "95%",
                    backgroundColor: "transparent",
                    fontSize: 14,
                    fontFamily: "camptonLight",
                    color: "#A09E9E"
                  }}
                />
              </View>
            </View>
            <TouchableWithoutFeedback
              onPress={this.reg.bind(this)}
            >
              <View
                style={{
                  backgroundColor: "#FCAA4A",
                  width: 98,
                  height: 27,
                  alignSelf: "center",
                  justifyContent: "center",
                  marginTop: 50,
                  marginBottom: 20
                }}
              >
              {this.state.regLoader ? 
            <ActivityIndicator color="white" />
           : 
                <Text
                  style={{
                    fontFamily: "camptonBold",
                    fontSize: 14,
                    color: "#262728",
                    alignSelf: "center"
                  }}
                >
                  Sign Up
                </Text>}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View
              style={{
                width: "100%",
                height: 66,
                backgroundColor: "#FCAA4A",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "camptonBold",
                  fontSize: 13,
                  letterSpacing: 3.2,
                  color: "#262728",
                  alignSelf: "center",
                  textAlign: "center"
                }}
              >
                HAVE AN ACCOUNT? SIGN IN
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bottomButton: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
    /*  position:'absolute',
    bottom: 0*/
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
/**
 <View style={{width: '60%', height: 50, flexDirection: 'row', alignSelf: 'center',
      justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 10, marginTop: 10}}>
      <View style={{width: 50, height: 50, borderRadius: 25, borderColor: 'white', borderWidth: 2, 
      alignContent: 'center', justifyContent: 'center'}}>
      <Image resizeMode="contain" style={{width: 30, height: 30, alignSelf: 'center'}} source={require('../fb.png')}/>
      </View>
      <View style={{width: 50, height: 50, borderRadius: 25, borderColor: 'white', borderWidth: 2, 
      alignContent: 'center', justifyContent: 'center'}}>
       <Image resizeMode="contain" style={{width: 20, height: 20, alignSelf: 'center'}} source={require('../twitter.png')}/>
      </View>
      <View style={{width: 50, height: 50, borderRadius: 25, borderColor: 'white', borderWidth: 2, 
      alignContent: 'center', justifyContent: 'center'}}>
       <Image resizeMode="contain" style={{width: 20, height: 20, alignSelf: 'center'}} source={require('../gplus.png')}/>
      </View>
      </View>
 */
