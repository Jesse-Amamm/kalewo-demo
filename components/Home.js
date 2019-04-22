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
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import axios from "axios";
import { BoxShadow } from "react-native-shadow";
import { connect } from "react-redux";
import { sha256, sha224 } from "js-sha256";
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
const api_key = "114063_a93666d11c33ea8dccac";

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
    falseSearch: search => dispatch(falseSearch(search))
  };
};
const key = "6677c17e7bf23dcfb191b5903abfc0cdbe3e7f5345a658cce07ee41728da7bd7";
const user = "seyi";

const query =
  "user=" +
  user +
  "&function=get_resource_path&param1=2&param2=URL&param3=scr&param4=&param5=&param6=&param7=&param8=";
const sign = sha256(key + query);
class reduxHome extends Component {
  componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading2: true });
    axios
      .get("http://api.dacast.com/v2/channel?apikey=" + api_key + "&_format=JSON")
      .then(response => {
        console.log(response);
        var len = response.data ? response.data.data.length : null;
        console.log(len+"<<<len");
        for (let i = 0; i < len; i++) {
          let row = response.data.data[i];
          console.log(row);
          console.log(i);
          console.log("djdn");
          this.setState(
            prevState => ({
              ltvs: [...prevState.ltvs, row]
            }),
            console.log(this.state.ltvs)
          );
        //  console.log(i);
          console.log("ltvs");
        }
        for (let i = 4; i < 7; i++) {
          let row = response.data.data[i];
          console.log(row);
          console.log(i);
          console.log("djdn");
          this.setState(
            prevState => ({
              visual_radio: [...prevState.visual_radio, row]
            }),
            console.log(this.state.visual_radio[0])
          );
        }
        console.log(this.state.visual_radio);
        for (let i = 10; i < 11; i++) {
          let row = response.data.data[i];
          console.log(row);
          console.log(i);
          console.log("djdn");
          this.setState(
            prevState => ({
              mn: [...prevState.mn, row]
            }),
            console.log(this.state.mn[0])
          );
          console.log(i);
          console.log("miss nigeria");
        }
        this.setState({ loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
        Alert.alert("Error", "Internal Server Error, please try again later", [
          { text: "OK" }
        ]);
        console.log(error);
      });
    axios
      .get("http://api.dacast.com//v2/vod?apikey=" + api_key)
      .then(response => {
        console.log(response);
        var len = response.data.data ? response.data.data.length : null;
        for (let i = 0; i < len; i++) {
          let row = response.data.data[i];
          console.log(row);
          console.log(i);
          console.log("djdn");
          if (row.title.toLowerCase().indexOf("live recording") >= 0) {
            console.log("it includes");
            this.setState(
              prevState => ({
                mn: [...prevState.mn, row]
              }),
              console.log(this.state.mn[0])
            );
          } else {
            this.setState(
              prevState => ({
                mnh: [...prevState.mnh, row]
              }),
              console.log(this.state.mnh[0])
            );
          }
        }
        this.setState({ loading2: false });
      })
      .catch(error => {
        this.setState({ loading2: false });
        Alert.alert("Error", "Please check your internet connection", [
          { text: "OK" }
        ]);
        console.log(error);
      });
  }

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      ltvs: [],
      visual_radio: [],
      mn: [],
      loading: true,
      loading2: true,
      mnh: []
    };
  }

  render() {
    const movies = (
      <FlatList
        data={this.state.ltvs}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Selection", {
                title: item.title,
                image: item.pictures.thumbnail[0],
                description: item.description,
                more: this.state.ltvs,
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
    );
    const visual = (
      <FlatList
        data={this.state.visual_radio}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Selection", {
                title: item.title,
                image: item.pictures.thumbnail[0],
                description: item.description,
                more: this.state.visual_radio,
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
    );
    const mn = (
      <FlatList
        data={this.state.mn}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Selection", {
                title: item.title,
                image: item.pictures.thumbnail[0],
                description: item.description,
                more: this.state.mn,
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
    );
    const mnh = (
      <FlatList
        data={this.state.mnh}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Selection", {
                title: item.title,
                image: item.pictures.thumbnail[0],
                description: item.description,
                more: this.state.mnh,
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
    );
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
          {this.state.loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <ImageBackground
              style={{
                width: "100%",
                height: 445
              }}
              source={{ uri: this.state.ltvs[1].pictures.thumbnail[0] }}
              //  source={require('../lionsHeart.jpg')}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 140,
                  height: 31,
                  marginTop: StatusBar.currentHeight + 10,
                  alignSelf: "center"
                }}
                source={require("../kl.png")}
              />
              <ScrollView />
            </ImageBackground>
          )}
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 1,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.00)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 3,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.02)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 5,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.04)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 10,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.06)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 20,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.08)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 30,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.10)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 40,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.12)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 50,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.14)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 60,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.16)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 70,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.18)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 80,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.20)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 90,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.22)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 100,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.24)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 110,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.26)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 120,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.28)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 130,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.30)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 140,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.32)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 150,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.34)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 160,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.36)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 170,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.38)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 180,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.40)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 190,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.42)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 200,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.44)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 210,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.46)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 220,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.48)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 230,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.50)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 240,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.52)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 250,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.54)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 260,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.56)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 270,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.58)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 280,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.60)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 290,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.62)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 300,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.64)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 310,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.66)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 320,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.68)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 330,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.70)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 340,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.72)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 350,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.74)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 360,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.76)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 370,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.78)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 380,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.80)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 390,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.82)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 400,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.84)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 410,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.86)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 420,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.88)",
              flexDirection: "column"
            }}
          />
          <View
            style={{
              width: "100%",
              height: 10,
              position: "absolute",
              top: 424,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.9)",
              flexDirection: "column"
            }}
          />
          {this.state.loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "bn",
                color: "#FCAA4A",
                letterSpacing: 2,
                alignSelf: "center",
                position: "absolute",
                top: 360,
                fontSize: 60
              }}
            >
              {this.state.ltvs[1].title}
            </Text>
          )}
          <View
            style={{
              flexDirection: "row",
              width: 155,
              height: 14,
              alignSelf: "center",
              position: "absolute",
              top: 420,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                color: "#746E6E",
                fontSize: 11,
                fontFamily: "camptonBold"
              }}
            >
              2019
            </Text>
            <View
              style={{
                backgroundColor: "#746E6E",
                height: 4,
                width: 4,
                borderRadius: 2
              }}
            />
            <Text
              style={{
                color: "#746E6E",
                fontSize: 11,
                fontFamily: "camptonBold"
              }}
            >
              1hr34mins
            </Text>
            <View
              style={{
                backgroundColor: "#746E6E",
                height: 4,
                width: 4,
                borderRadius: 2
              }}
            />
            <Text
              style={{
                color: "#746E6E",
                fontSize: 11,
                fontFamily: "camptonBold"
              }}
            >
              Drama
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Selection", {
                title: this.state.ltvs[1].title,
                image: this.state.ltvs[1].pictures.thumbnail[0],
                description: this.state.ltvs[1].description,
                more: this.state.ltvs,
                uri: this.state.ltvs[1].share_code.facebook
              })
            }
          >
            <View
              style={{
                width: 50,
                backgroundColor: "#FCAA4A",
                height: 20,
                justifyContent: "space-evenly",
                flexDirection: "row",
                marginTop: 12,
                alignItems: "center",
                alignSelf: "center",
                position: "absolute",
                top: 430
              }}
            >
              <Image
                resizeMode="stretch"
                style={{ width: 12, height: 12 }}
                source={require("../play.png")}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  fontFamily: "camptonBold"
                }}
              >
                PLAY
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Text
            style={{
              color: "#FCAA4A",
              fontFamily: "camptonBold",
              fontSize: 14,
              marginTop: 27,
              marginLeft: 25,
              marginBottom: 14
            }}
          >
            Live Tv Streaming
          </Text>
          {this.state.loading ? <ActivityIndicator color="white" /> : movies}
          <Text
            style={{
              color: "#FCAA4A",
              fontFamily: "camptonBold",
              fontSize: 14,
              marginTop: 27,
              marginLeft: 25,
              marginBottom: 14
            }}
          >
            Popular on Kalewo
          </Text>
          {this.state.loading ? <ActivityIndicator color="white" /> : visual}
          <Text
            style={{
              color: "#FCAA4A",
              fontFamily: "camptonBold",
              fontSize: 14,
              marginTop: 27,
              marginLeft: 25,
              marginBottom: 14
            }}
          >
            Miss Nigeria 2018 Highlights
          </Text>
          {this.state.loading ? <ActivityIndicator color="white" /> : mnh}
          <Text
            style={{
              color: "#FCAA4A",
              fontFamily: "camptonBold",
              fontSize: 14,
              marginTop: 27,
              marginLeft: 25,
              marginBottom: 14
            }}
          >
            Miss Nigeria
          </Text>
          {this.state.loading ? <ActivityIndicator color="white" /> : mn}
        </ScrollView>
      </View>
    );
  }
}
const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxHome);
export default Home;
const styles = StyleSheet.create({});
