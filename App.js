/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  StatusBar,
  ImageBackground,
  TouchableNativeFeedback,
  ScrollView,
  TextInput,
  Dimensions

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './components/Login';
import On from './components/On';
import Home from './components/Home';
import Details from './components/Details';
import Splash from './components/Splash';
import SideBar from './components/SideBar';
import VideoComponent from './components/VideoComponent';
import Movies from './components/Movies';
import Signup from './components/Signup';
import Decision from './components/Decision';
import Described from './components/Described';
import {
  createStackNavigator,
  createAppContainer, DrawerNavigator, DrawerItems
} from 'react-navigation';

const dimensions = Dimensions.get('window');
const Width = dimensions.width;
const Screens = createStackNavigator({
 /* Home: {
      screen:   Decision,
  },
  Decision: {
      screen: Decision,
  },*/
  Described: {
      screen: Described
  },
  Signup: {
       screen: Login 
  },  
  
  Login: {
    screen: Signup,
},
  Video:{
    screen: VideoComponent
  },
  SideBar: {
    screen: SideBar
  }
 
},/*{
    initialRouteName: "Home"
  },*/
  );
 /* Screens.navigationOptions = ({ navigation }) => {
    name = (navigation.state.index !== undefined ? navigation.state.routes[navigation.state.index] : navigation.state.routeName)
     let drawerLockMode = 'locked-closed';
     return {
       drawerLockMode,
     };
   }
   Screens.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index >= 0) {
      drawerLockMode = 'locked-closed'; 
    }
    return {
      drawerLockMode,
    };
  }*/
const RootStack = DrawerNavigator(
    {
        drawer: {
            screen: Screens
        }
    },
    {
        drawerWidth: Width * (56 / 100),
        contentComponent: SideBar,
        drawerPosition: 'right'
    },

/*    {
        initialRouteName: 'Home',
    }
    ,*/ {}
);
RootStack.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null,
};
const HomeStack = createStackNavigator({
  Drawer: RootStack,
  Home: Decision,
  
  /* add routes here where you want the drawer to be locked */
},{
  initialRouteName: "Home"
},);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
  };
  }
  render() {
      setTimeout(() => {
        this.setState({timePassed: true})
    }, 4000);
    if (!this.state.timePassed) {
        return <View style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle='dark-content'/>
            <Splash/>
            </View>;
    } else {
        return (
            <HomeStack/>
        );

    }
  }
}

const styles = StyleSheet.create({
  bottomButton:{
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  /*  position:'absolute',
    bottom: 0*/
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
