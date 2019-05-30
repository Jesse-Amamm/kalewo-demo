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
  TextInput,
  TouchableOpacity
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { BoxShadow } from "react-native-shadow";
import { connect } from "react-redux";
import { ViewPager } from "rn-viewpager";
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
  setPP
} from "../actions/index";
import Home from "./Home";
import Search from "./Search";
import ImagePicker from "react-native-image-crop-picker";
import axios from "axios";
const api_key = "114063_a93666d11c33ea8dccac";
var sha256 = require("js-sha256");

const mapStateToProps = state => {
  return {
    home: state.home,
    more: state.more,
    search: state.search,
    account: state.account,
    myList: state.myList,
    help: state.help,
    loggedIn: state.loggedIn,
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
    setPP: PP => dispatch(setPP(PP))
  };
};
class reduxEditProfile extends Component {
  componentDidUpdate() {
    if (this.state.name) {
      this.nameTextInput.focus();
    }
    if (this.state.city) {
      this.cityTextInput.focus();
    }
    if (this.state.newP) {
      this.newPTextInput.focus();
    }
    if (this.state.oldP) {
      this.oldPTextInput.focus();
    }
  }
  componentDidMount() {
    console.log(this.props);
  }
  updateName = () => {
    const { params } = this.props.navigation.state;
    var config = {
      headers: { Authorization: "Bearer " + params.token }
    };
    var bodyParameters = {
      name: this.state.setName
    };
    axios
      .put("http://app.kalewo.ng/api/update", bodyParameters, config)
      .then(response => {
        console.log(response.data.data);
        var len = response.data ? response.data.data.length : null;
        console.log(len + "--len");
        //  response.data.success
        this.setState({ regLoader: false });
      })
      .catch(error => {
        this.setState({ regLoader: false });
        Alert.alert(
          "Error",
          "Profile Update" + JSON.stringify(error.response.message),
          [{ text: "OK" }]
        );
        console.log("kl" + JSON.stringify(error));
      });
  };
  updatePhone = () => {
    const { params } = this.props.navigation.state;
    var config = {
      headers: { Authorization: "Bearer " + params.token }
    };
    var bodyParameters = {
      phone: this.state.setCity
    };
    axios
      .put("http://app.kalewo.ng/api/update", bodyParameters, config)
      .then(response => {
        console.log(response.data.data);
        var len = response.data ? response.data.data.length : null;
        console.log(len + "--len");
        //  response.data.success
        this.setState({ regLoader: false });
      })
      .catch(error => {
        this.setState({ regLoader: false });
        Alert.alert(
          "Error",
          "Profile Update" + JSON.stringify(error.response.message),
          [{ text: "OK" }]
        );
        console.log("kl" + JSON.stringify(error));
      });
  };
  handleName(text) {
    this.setState({ setName: text }, () => {
      if (this.state.setName && this.state.setName.length > 1) {
        this.updateName();
      }
    });
  }
  handleCity(text) {
    this.setState({ setCity: text }, () => {
      if (this.state.setCity && this.state.setCity.length > 1) {
        this.updatePhone();
      }
    });
  }
  handleNewP(text) {
    this.setState({ setNewP: text });
  }
  handleOldP(text) {
    this.setState({ setOldP: text });
  }
  onPageSelected(e) {
    let currentPage = e.nativeEvent.position;
    let n = currentPage.toString();
    console.log(currentPage);
    this.setState({ n });
    this.setState({ no: currentPage });
    if (currentPage == 0) {
      this.setState({ one: true });
    } else if (currentPage == 1) {
      this.setState({ one: false });
    }
  }

  onBoxSelected(e) {
    let currentPage = e.nativeEvent.position;
    let n = currentPage.toString();
    console.log(currentPage);
    this.setState({ n });
    this.setState({ no: currentPage });
    if (currentPage == 0) {
      this.setState({ first: true });
    } else if (currentPage == 1) {
      this.setState({ first: false });
    }
  }

  front() {
    this.viewPagerr.setPage(1);
    this.setState({ first: false });
  }
  back() {
    this.viewPagerr.setPage(0);
    this.setState({ first: true });
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ setName: params.name, setCity: params.phone });
  }
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      one: true,
      no: "",
      n: "",
      name: false,
      city: false,
      newP: false,
      oldP: false,
      first: true,
      setName: "",
      setCity: "",
      setOldP: "",
      setNewP: ""
    };
  }
  name() {
    this.setState({ name: true });
    this.setState({ city: false });
    this.setState({ newP: false });
    this.setState({ oldP: false });
    //  this.nameTextInput.focus();
  }
  city() {
    this.setState({ name: false });
    this.setState({ city: true });
    this.setState({ newP: false });
    this.setState({ oldP: false });
    //    this.cityTextInput.focus();
  }
  newP() {
    this.setState({ name: false });
    this.setState({ city: false });
    this.setState({ newP: true });
    this.setState({ oldP: false });
    //   this.newPTextInput.focus();
  }
  oldP() {
    this.setState({ name: false });
    this.setState({ city: false });
    this.setState({ newP: false });
    this.setState({ oldP: true });
    //    this.oldPTextInput.focus();
  }
  password() {
    if (this.state.setNewP.length < 8) {
      Alert.alert(
        "Error",
        "Password is too short, It must be up to 8 characters",
        [{ text: "OK" }]
      );
    } else if (this.state.setNewP != this.state.setOldP) {
      Alert.alert(
        "Error",
        "The 2 password fields must contain the same value",
        [{ text: "OK" }]
      );
    } else {
      const { params } = this.props.navigation.state;
      var config = {
        headers: { Authorization: "Bearer " + params.token }
      };
      var bodyParameters = {
        password: this.state.setNewP
      };
      axios
        .put("http://app.kalewo.ng/api/update", bodyParameters, config)
        .then(response => {
          console.log(response.data.data);
          var len = response.data ? response.data.data.length : null;
          console.log(len + "--len");
          //  response.data.success
          Alert.alert("Success", "Password Update Successful", [
            { text: "OK" }
          ]);
          this.setState({ regLoader: false });
        })
        .catch(error => {
          this.setState({ regLoader: false });
          Alert.alert(
            "Error",
            "Password Update" + JSON.stringify(error.response.message),
            [{ text: "OK" }]
          );
          console.log("kl" + JSON.stringify(error));
        });
    }
  }
  imageUpload() {
    const { params } = this.props.navigation.state;
    var config = {
      headers: { Authorization: "Bearer " + params.token }
    };

    ImagePicker.openPicker({
      //   multiple: true,
      cropping: true,
      includeExif: true,
      mediaType: "photo"
    })
      .then(image => {
        if (image) {
          params.photo = image.path;
          this.props.setPP(image.path);
          const data = new FormData();
          // data.append('upload_preset', kalewoApp);
          data.append("timestamp", Date.now());
          data.append("api_key", "513764555178418");
          data.append("file", {
            uri: image.path,
            type: image.mime,
            name: Date.now() + "image"
          });
          this.setState({ loader: true });
          axios
            .post(
              "https://api.cloudinary.com/v1_1/staybusy/image/upload?upload_preset=kalewoApp",
              data
              //    config
            )
            .then(response => {
              this.setState({ loader: false });
              console.log(response);

              var bodyParameters = {
                photo: response.data.url
              };
              console.log(
                params.token + "\n" + response.data.url + "\n" + "\n"
              );
              axios
                .put("http://app.kalewo.ng/api/update", bodyParameters, config)
                .then(response => {
                  console.log(response.data.data);
                  var len = response.data ? response.data.data.length : null;
                  console.log(len + "--len");
                  //  response.data.success
                  Alert.alert("Success", "Picture posted Successfully", [
                    { text: "OK" }
                  ]);
                  this.setState({ regLoader: false });
                })
                .catch(error => {
                  this.setState({ regLoader: false });

                  console.log("kl" + JSON.stringify(error));
                });
            })
            .catch(error => {
              this.setState({ loader: false });
              Alert.alert(
                "Error",
                "Internal Server Error, please try again later",
                [{ text: "OK" }]
              );
              console.log(error);
            });
          this.setState({
            image: image
          });
        }
        console.log("ll");
        console.log(this.state.image);
      })
      .catch(e => console.log(e));
  }
  render() {
    const { params } = this.props.navigation.state;
    const shadowOpt = {
      width: Dimensions.get("window").width * (61 / 100),
      height: 39,
      color: "#FFF",
      border: 5,
      radius: 4,
      opacity: 0.5,
      x: 0,
      y: 2,
      style: { marginVertical: 5, alignSelf: "center" }
    };
    const shadowOpt2 = {
      width: Dimensions.get("window").width * (61 / 100),
      height: 39,
      color: "#FFF",
      border: 5,
      radius: 4,
      opacity: 0.5,
      x: 0,
      y: 2,
      style: { marginVertical: 5, alignSelf: "center", marginTop: 29 }
    };
    let picture = '';
    if(this.props.PP){
      picture = <ImageBackground
      style={{
        width: 142,
        height: 142,
        alignSelf: "center",
        marginTop: 39
      }}
      resizeMode="cover"
      imageStyle={{ borderRadius: 71 }}
      source={{uri: this.props.PP}}
    >
      <View
        style={{
          width: 142,
          height: 142,
          borderRadius: 71,
          alignSelf: "center",
          backgroundColor: "rgba(252, 170, 74, 0.6)",
          alignItems: "center"
        }}
      >
        <Image
          style={{
            width: 67,
            height: 67,
            alignSelf: "center",
            marginTop: 39
          }}
          resizeMode="contain"
          source={require("../camera.png")}
        />
      </View>
    </ImageBackground>
    }else{
      if(params.photo){
        picture = <ImageBackground
        style={{
          width: 142,
          height: 142,
          alignSelf: "center",
          marginTop: 39
        }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 71 }}
        source={{uri: params.photo}}
      >
        <View
          style={{
            width: 142,
            height: 142,
            borderRadius: 71,
            alignSelf: "center",
            backgroundColor: "rgba(252, 170, 74, 0.6)",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              width: 67,
              height: 67,
              alignSelf: "center",
              marginTop: 39
            }}
            resizeMode="contain"
            source={require("../camera.png")}
          />
        </View>
      </ImageBackground>
      }else{
        picture = <ImageBackground
        style={{
          width: 142,
          height: 142,
          alignSelf: "center",
          marginTop: 39
        }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 71 }}
        source={require('../user.png')}
      >
        <View
          style={{
            width: 142,
            height: 142,
            borderRadius: 71,
            alignSelf: "center",
            backgroundColor: "rgba(252, 170, 74, 0.6)",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              width: 67,
              height: 67,
              alignSelf: "center",
              marginTop: 39
            }}
            resizeMode="contain"
            source={require("../camera.png")}
          />
        </View>
      </ImageBackground>
      }
    }
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
          <View
            style={{
              marginTop: 34 + StatusBar.currentHeight,
              flexDirection: "row",
              width: "100%",
              height: 20,
              alignItems: "center"
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}
            >
              <View style={{ width: 22, height: 22, marginLeft: 31 }}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1 }}
                  source={require("../backWhite.png")}
                />
              </View>
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontFamily: "camptonBold",
                color: "#FCAA4A",
                fontSize: 12,
                alignSelf: "center",
                marginLeft: "27%"
              }}
            >
              EDIT PROFILE
            </Text>
          </View>
          <ViewPagerAndroid
            style={{ alignSelf: "center", width: 142, height: 184 }}
            initialPage={0}
            onPageSelected={this.onPageSelected.bind(this)}
            ref={viewPager => {
              this.viewPager = viewPager;
            }}
          >
            {/*     <View style={{flex: 1}} key="1">
       {params.photo ?
        <Image style={{width: 142, height:142,borderRadius: 71,alignSelf: 'center',
      marginTop: 39 }} resizeMode="cover"
        source={{uri: params.photo}}/>:
       <Image style={{width: 142, height:142,borderRadius: 71,alignSelf: 'center',
      marginTop: 39 }} resizeMode="cover"
        source={require('../user.png')}/>}
       </View> */}
            <View style={{ flex: 1 }} key="1">
              <TouchableOpacity onPress={this.imageUpload.bind(this)}>
                {picture}
              </TouchableOpacity>
            </View>
          </ViewPagerAndroid>
          <View
            style={{
              marginTop: 35,
              flexDirection: "row",
              justifyContent: "space-between",
              width: 58,
              height: 3,
              alignSelf: "center"
            }}
          >
            {this.state.one ? (
              <View
                style={{
                  width: 22,
                  height: 3,
                  backgroundColor: "#FCAA4A",
                  borderRadius: 4
                }}
              />
            ) : (
              <View
                style={{
                  width: 22,
                  height: 3,
                  backgroundColor: "#C4C4C4",
                  borderRadius: 4
                }}
              />
            )}
            {this.state.one ? (
              <View
                style={{
                  width: 22,
                  height: 3,
                  backgroundColor: "#C4C4C4",
                  borderRadius: 4
                }}
              />
            ) : (
              <View
                style={{
                  width: 22,
                  height: 3,
                  backgroundColor: "#FCAA4A",
                  borderRadius: 4
                }}
              />
            )}
          </View>
          <ViewPagerAndroid
            style={{
              alignSelf: "center",
              width: "61%",
              height: 178,
              marginTop: "8%"
            }}
            initialPage={0}
            onPageSelected={this.onBoxSelected.bind(this)}
            ref={viewPagerr => {
              this.viewPagerr = viewPagerr;
            }}
          >
            <View style={{ flex: 1 }} key="1">
              {this.state.name ? (
                <BoxShadow setting={shadowOpt}>
                  <View
                    style={{
                      width: "100%",
                      height: 38,
                      alignSelf: "center",
                      backgroundColor: "white"
                    }}
                  >
                    <TextInput
                      returnKeyType={"next"}
                      underlineColorAndroid={"transparent"}
                      value={this.state.setName}
                      onChangeText={text => this.handleName(text)}
                      placeholderStyle={{
                        fontSize: 14,
                        fontFamily: "camptonBold"
                      }}
                      placeholderTextColor="#4D4949"
                      ref={input => {
                        this.nameTextInput = input;
                      }}
                      style={{
                        alignSelf: "center",
                        height: 38,
                        width: "95%",
                        backgroundColor: "transparent",
                        fontSize: 14,
                        fontFamily: "camptonBold",
                        color: "#4D4949"
                      }}
                    />
                  </View>
                </BoxShadow>
              ) : (
                <TouchableWithoutFeedback onPress={this.name.bind(this)}>
                  <View
                    style={{
                      width: "100%",
                      height: 38,
                      alignSelf: "center",
                      backgroundColor: "#878383",
                      marginTop: 29,
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "camptonBold",
                        fontSize: 12,
                        color: "#D9CBCB",
                        marginLeft: 11
                      }}
                    >
                      {this.state.setName ? this.state.setName : params.name}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
              {this.state.city ? (
                <BoxShadow setting={shadowOpt2}>
                  <View
                    style={{
                      width: "100%",
                      height: 38,
                      alignSelf: "center",
                      backgroundColor: "white"
                    }}
                  >
                    <TextInput
                      returnKeyType={"next"}
                      ref={input => {
                        this.cityTextInput = input;
                      }}
                      value={this.state.setCity}
                      onChangeText={text => this.handleCity(text)}
                      underlineColorAndroid={"transparent"}
                      placeholderStyle={{
                        fontSize: 14,
                        fontFamily: "camptonBold"
                      }}
                      placeholderTextColor="#4D4949"
                      style={{
                        alignSelf: "center",
                        height: 38,
                        width: "95%",
                        backgroundColor: "transparent",
                        fontSize: 14,
                        fontFamily: "camptonBold",
                        color: "#4D4949"
                      }}
                    />
                  </View>
                </BoxShadow>
              ) : (
                <TouchableWithoutFeedback onPress={this.city.bind(this)}>
                  <View
                    style={{
                      width: "100%",
                      height: 38,
                      alignSelf: "center",
                      backgroundColor: "#878383",
                      marginTop: 29,
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "camptonBold",
                        fontSize: 12,
                        color: "#D9CBCB",
                        marginLeft: 11
                      }}
                    >
                      {this.state.setCity ? this.state.setCity : params.phone}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
            <View style={{ flex: 1 }} key="2">
              {this.state.newP ? (
                <BoxShadow setting={shadowOpt}>
                  <View
                    style={{
                      width: "100%",
                      height: 38,
                      alignSelf: "center",
                      backgroundColor: "white"
                    }}
                  >
                    <TextInput
                      returnKeyType={"next"}
                      secureTextEntry={true}
                      ref={input => {
                        this.newPTextInput = input;
                      }}
                      value={this.state.setNewP}
                      onChangeText={text => this.handleNewP(text)}
                      underlineColorAndroid={"transparent"}
                      placeholderStyle={{
                        fontSize: 14,
                        fontFamily: "camptonBold"
                      }}
                      placeholderTextColor="#4D4949"
                      style={{
                        alignSelf: "center",
                        height: 38,
                        width: "95%",
                        backgroundColor: "transparent",
                        fontSize: 14,
                        fontFamily: "camptonBold",
                        color: "#4D4949"
                      }}
                    />
                  </View>
                </BoxShadow>
              ) : (
                <TouchableWithoutFeedback onPress={this.newP.bind(this)}>
                  <View
                    style={{
                      width: "100%",
                      height: 38,
                      alignSelf: "center",
                      backgroundColor: "#878383",
                      marginTop: 29,
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "camptonBold",
                        fontSize: 12,
                        color: "#D9CBCB",
                        marginLeft: 11
                      }}
                    >
                      {"New Password"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
              {this.state.oldP ? (
                <BoxShadow setting={shadowOpt2}>
                  <View
                    style={{
                      width: "100%",
                      height: 38,
                      alignSelf: "center",
                      backgroundColor: "white"
                    }}
                  >
                    <TextInput
                      returnKeyType={"next"}
                      secureTextEntry={true}
                      ref={input => {
                        this.oldPTextInput = input;
                      }}
                      value={this.state.setOldP}
                      onChangeText={text => this.handleOldP(text)}
                      underlineColorAndroid={"transparent"}
                      placeholderStyle={{
                        fontSize: 14,
                        fontFamily: "camptonBold"
                      }}
                      placeholderTextColor="#4D4949"
                      style={{
                        alignSelf: "center",
                        height: 38,
                        width: "95%",
                        backgroundColor: "transparent",
                        fontSize: 14,
                        fontFamily: "camptonBold",
                        color: "#4D4949"
                      }}
                    />
                  </View>
                </BoxShadow>
              ) : (
                <TouchableWithoutFeedback onPress={this.oldP.bind(this)}>
                  <View
                    style={{
                      width: "100%",
                      height: 38,
                      alignSelf: "center",
                      backgroundColor: "#878383",
                      marginTop: 29,
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "camptonBold",
                        fontSize: 12,
                        color: "#D9CBCB",
                        marginLeft: 11
                      }}
                    >
                      Confirm Password
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
              <TouchableWithoutFeedback onPress={this.password.bind(this)}>
                <View
                  style={{
                    backgroundColor: "#FCAA4A",
                    width: 98,
                    height: 27,
                    alignSelf: "center",
                    justifyContent: "center",
                    marginTop: 15
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "camptonBold",
                      fontSize: 14,
                      color: "#000",
                      alignSelf: "center"
                    }}
                  >
                    SUBMIT
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </ViewPagerAndroid>
          {this.state.first ? (
            <TouchableWithoutFeedback onPress={this.front.bind(this)}>
              <View
                style={{
                  width: 56,
                  height: 55,
                  alignSelf: "center",
                  marginTop: 58
                }}
              >
                <Image
                  style={{ width: 56, height: 55 }}
                  resizeMode="contain"
                  source={require("../right.png")}
                />
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={this.back.bind(this)}>
              <View
                style={{
                  width: 56,
                  height: 55,
                  alignSelf: "center",
                  marginTop: 58
                }}
              >
                <Image
                  style={{ width: 56, height: 55 }}
                  resizeMode="contain"
                  source={require("../leftT.png")}
                />
              </View>
            </TouchableWithoutFeedback>
          )}
        </ScrollView>
      </View>
    );
  }
}
const EditProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxEditProfile);
export default EditProfile;
const styles = StyleSheet.create({});
