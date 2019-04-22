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
  ViewPagerAndroid
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
import Account from "./Account";
import Search from "./Search";
import { ViewPager } from "rn-viewpager";
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
class reduxDescribed extends Component {
  componentDidUpdate() {
    if (this.props.home && !this.props.search && !this.props.account) {
      this.viewPager.setPage(0);
    }
    if (this.props.search && !this.props.account && !this.props.home) {
      this.viewPager.setPage(1);
    }
    if (this.props.account && !this.props.search && !this.props.home) {
      this.viewPager.setPage(2);
    }
  }
  onPageSelected(e) {
    let currentPage = e.nativeEvent.position;
    let n = currentPage.toString();
    console.log(currentPage);
    this.setState({ n });
    this.setState({ no: currentPage });
    if (currentPage == 0) {
      this.props.trueHome("home");
      this.props.falseSearch("browse");
      this.props.falseAccount("account");
    } else if (currentPage == 1) {
      this.props.falseHome("home");
      this.props.trueSearch("search");
      this.props.falseAccount("account");
    } else if (currentPage == 2) {
      this.props.falseHome("home");
      this.props.falseSearch("search");
      this.props.trueAccount("account");
    }
  }
  componentDidMount() {
    if (this.props.home && !this.props.search && !this.props.account) {
      this.viewPager.setPage(0);
    }
    if (this.props.search && !this.props.account && !this.props.home) {
      this.viewPager.setPage(1);
    }
    if (this.props.account && !this.props.search && !this.props.home) {
      this.viewPager.setPage(2);
    }
  }

  static navigationOptions = {
    header: null
  };
  home() {
    this.props.trueHome("home");
    this.props.falseSearch("search");
    this.props.falseAccount("account");
    this.viewPager.setPage(0);
  }
  search() {
    this.props.trueSearch("search");
    this.props.falseHome("home");
    this.props.falseAccount("account");
    this.viewPager.setPage(1);
  }
  account() {
    this.props.trueAccount("account");
    this.props.falseHome("home");
    this.props.falseSearch("search");
    this.viewPager.setPage(2);
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="light-content"
        />

        <ViewPagerAndroid
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={this.onPageSelected.bind(this)}
          ref={viewPager => {
            this.viewPager = viewPager;
          }}
        >
          <View style={{ flex: 1 }} key="1">
            <ScrollView
              keyboardShouldPersistTaps="always"
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
              directionalLockEnabled={true}
              bounces={false}
              scrollsToTop={false}
            >
              <Home navigation={this.props.navigation} />
            </ScrollView>
          </View>
          <View style={{ flex: 1 }} key="2">
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="always"
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
              directionalLockEnabled={true}
              bounces={false}
              scrollsToTop={false}
            >
              <Search navigation={this.props.navigation} />
            </ScrollView>
          </View>
          <View style={{ flex: 1 }} key="3">
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="always"
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
              directionalLockEnabled={true}
              bounces={false}
              scrollsToTop={false}
            >
              <Account navigation={this.props.navigation} />
            </ScrollView>
          </View>
        </ViewPagerAndroid>

        <View
          style={{
            width: "100%",
            height: 54,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            borderTopColor: "#FCAA4A",
            borderTopWidth: 1
          }}
        >
          <TouchableWithoutFeedback onPress={this.home.bind(this)}>
            <View
              style={{
                flexDirection: "column",
                width: 23,
                height: 29,
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              {this.props.home ? (
                <Image
                  style={{ width: 20, height: 20 }}
                  resizeMode="stretch"
                  source={require("../home.png")}
                />
              ) : (
                <Image
                  style={{ width: 20, height: 20 }}
                  resizeMode="stretch"
                  source={require("../homew.png")}
                />
              )}
              {this.props.home ? (
                <Text
                  style={{
                    fontFamily: "camptonBold",
                    fontSize: 7,
                    color: "#FCAA4A"
                  }}
                >
                  HOME
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: "camptonBold",
                    fontSize: 7,
                    color: "white"
                  }}
                >
                  HOME
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.search.bind(this)}>
            <View
              style={{
                flexDirection: "column",
                width: 34,
                height: 29,
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              {this.props.search ? (
                <Image
                  style={{ width: 20, height: 20 }}
                  resizeMode="stretch"
                  source={require("../searchY.png")}
                />
              ) : (
                <Image
                  style={{ width: 20, height: 20 }}
                  resizeMode="stretch"
                  source={require("../searcher.png")}
                />
              )}
              {this.props.search ? (
                <Text
                  style={{
                    fontFamily: "camptonBold",
                    fontSize: 7,
                    color: "#FCAA4A"
                  }}
                >
                  SEARCH
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: "camptonBold",
                    fontSize: 7,
                    color: "white"
                  }}
                >
                  SEARCH
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.account.bind(this)}>
            <View
              style={{
                flexDirection: "column",
                width: 40,
                height: 29,
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              {this.props.account ? (
                <Image
                  style={{ width: 20, height: 20 }}
                  resizeMode="stretch"
                  source={require("../accY.png")}
                />
              ) : (
                <Image
                  style={{ width: 20, height: 20 }}
                  resizeMode="stretch"
                  source={require("../acc.png")}
                />
              )}
              {this.props.account ? (
                <Text
                  style={{
                    fontFamily: "camptonBold",
                    fontSize: 7,
                    color: "#FCAA4A"
                  }}
                >
                  ACCOUNT
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: "camptonBold",
                    fontSize: 7,
                    color: "white"
                  }}
                >
                  ACCOUNT
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.openDrawer()}
          >
            <View
              style={{
                flexDirection: "column",
                width: 40,
                height: 29,
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Image
                style={{ width: 30, height: 8 }}
                resizeMode="stretch"
                source={require("../more.png")}
              />
              <Text
                style={{
                  fontFamily: "camptonBold",
                  fontSize: 7,
                  color: "white"
                }}
              >
                MORE
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
const Described = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxDescribed);
export default Described;
const styles = StyleSheet.create({});
