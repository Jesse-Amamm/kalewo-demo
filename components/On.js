/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  ViewPagerAndroid
} from 'react-native';
import {ViewPager} from 'rn-viewpager';

export default class On extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: 'locked-closed'
    };
    constructor(props) {
        const Width = Dimensions.get('window').width;
        super(props);
        this.state = {
            n: '0',
            no: 0,
            width: Width / 3,
            pressed: false,
            spinnerVisible: false
        };
    }

    onPageSelected(e) {
        const Width = Dimensions.get('window').width;
        let currentPage = e.nativeEvent.position;
        let n = currentPage.toString();
        console.log(currentPage);
        this.setState({n});
        this.setState({no: currentPage});
        if (currentPage == 0) {
            this.setState({width: Width / 3});
        } else if (currentPage == 1) {
            this.setState({width: Width / 1.5});
        } else if (currentPage == 2) {
            this.setState({width: Width});
        }
    }
    update() {
        const Width = Dimensions.get('window').width;
        this.viewPager.setPage(this.state.no != 2 ? this.state.no + 1 : 2);
        let value = this.state.no != 2 ? this.state.no + 1 : 2;
        if(this.state.no == 2){
            this.onCode()
        }
        this.setState({no: value});
        if (value == 0) {
            this.setState({width: Width / 3});
        } else if (value == 1) {
            this.setState({width: Width / 1.5});
        } else if (value == 2) {
            this.setState({width: Width});
        }
    }
    render() {
        const dimensions = Dimensions.get('window');
        const Height = (dimensions.height);
        const Width = dimensions.width;
        return (
            <View style={{flex: 1, backgroundColor: 'black'}}>
                <StatusBar backgroundColor='#000' translucent={true} barStyle='light-content'/>
                <View style={{flex:1, backgroundColor: 'black'}}>
                <View style={{flexDirection: 'row',width: '100%',height: 27,backgroundColor: '#fff'}}>
                <View style={{
                    backgroundColor: '#F58634',
                    width: (this.state.width),
                }}>
                </View>
            </View>
            <Image style={{marginTop: 20, alignSelf: 'center',
            marginBottom: 20,}} source={require('../onLogo.png')}/>
                <ScrollView showsVerticalScrollIndicator={false} 
                overScrollMode={'never'} style={{ flex: 1 }} 
                contentContainerStyle={{ flex: 1 }}>
                <ViewPager
                    onPageSelected={this.onPageSelected.bind(this)}
                    ref={(viewPager) => {
                        this.viewPager = viewPager
                    }}
                   style={{height: 350}}
                    initialPage={0}>
                    <View style={{
                        backgroundColor: 'black',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'column'
                    }} key="1">
                        <Image style={{}} source={require('../on1.png')}/>
                        <Text style={{
                            fontFamily: 'mont-bold',
                            color: '#fff',
                            fontSize: 14,
                        //    marginBottom: 12
                        }}>
                            Stream on any device
                        </Text>
                        <Text style={{
                            fontFamily: 'mont',
                            color: '#fff',
                            fontSize: 14,
                            textAlign: 'center'
                        }}>
                            Watch live streams of your favourite{'\n'}
                            tv stations on any device, {'\n'}
                            phone, tablet, tv, laptop.
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: 'black',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'column'
                    }} key="2">
                        <Image style={{}} source={require('../on2.png')}/>
                        <Text style={{
                            fontFamily: 'mont-bold',
                            color: '#fff',
                            fontSize: 14,
                        //    marginBottom: 12
                        }}>
                            Watch  movies with family
                        </Text>
                        <Text style={{
                            fontFamily: 'mont',
                            color: '#fff',
                            fontSize: 14,
                            textAlign: 'center'
                        }}>
                            Watch live streams of your favourite{'\n'}
                            tv series or movies with your family {'\n'}
                            and friends.
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: 'black',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'column'
                    }} key="3">
                        <Image style={{}} source={require('../on3.png')}/>
                        <Text style={{
                            fontFamily: 'mont-bold',
                            color: '#fff',
                            fontSize: 14,
                        //    marginBottom: 12
                        }}>
                            Sign up or log in
                        </Text>
                        <Text style={{
                            fontFamily: 'mont',
                            color: '#fff',
                            fontSize: 14,
                            textAlign: 'center'
                        }}>
                            Sign up or Log in and let’s get started
                        </Text>
                    </View>
                </ViewPager></ScrollView>
                <View style={{width: '83.5%', height: 90, 
                marginBottom: 20,
                justifyContent: 'space-between', alignSelf: 'center'}}>
                 <TouchableWithoutFeedback onPress={() =>
                this.props.navigation.navigate('Decision', 
                )}><View style={{width: '100%',height: 40,
                 borderRadius: 2, backgroundColor: 'white',
                 alignItems: 'center', justifyContent: 'center'}}>
                     <Text style={{color: '#F58634', fontSize: 12,
                     fontFamily: 'mont-bold'}}>
                     Sign up</Text>
                 </View> 
                 </TouchableWithoutFeedback>
                 <TouchableWithoutFeedback onPress={() =>
                this.props.navigation.navigate('Decision', 
                )}><View style={{width: '100%',height: 40,
                 borderRadius: 2, backgroundColor: '#F58634',
                 alignItems: 'center', justifyContent: 'center'}}>
                     <Text style={{color: 'white', fontSize: 12,
                     fontFamily: 'mont-bold'}}>
                     Log in</Text>
                 </View></TouchableWithoutFeedback>
                </View>
                </View>
            </View>
        );
    }
}
const dimensions = Dimensions.get('window');
const Height = (dimensions.height) / 5;
const Width = dimensions.width;
const styles = StyleSheet.create({

    selected: {
        width: Width / 40, height: Width / 40, borderRadius: Width / 40 / 2, backgroundColor: '#615D5D'
    },
    unselected: {
        width: Width / 51, height: Width / 51, borderRadius: Width / 51 / 2, backgroundColor: '#888584'
    }
});
