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
  TouchableWithoutFeedback,
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
import Selection from './components/Selection';
import MyList from './components/MyList';
import Search from './components/Search';
import ResetPassword from './components/ResetPassword';
import Notifications from './components/Notifications';
import EditProfile from './components/EditProfile';
import FAQ from './components/FAQ';
import Help from './components/Help';
import ContactUs from './components/ContactUs';
import AppInfo from './components/AppInfo'
import {
  createStackNavigator,
  createAppContainer, DrawerNavigator, DrawerItems
} from 'react-navigation';
import store from "./store/index";
import {connect, Provider} from 'react-redux';
import {changeName
} from "./actions/index";
var SharedPreferences = require("react-native-shared-preferences");

const mapStateToProps = state => {
    return {
        account: state.account
    };
};
const mapDispatchToProps = dispatch => {
    return {
      trueAccount: account => dispatch(trueAccount(account))
    };
};

const dimensions = Dimensions.get('window');
const Width = dimensions.width;
const Screens = createStackNavigator({
  MyList: {
      screen: MyList,
  },
  Described: {
      screen: Described
  },
  Help:  {
      screen: Help
  },
  Notifications: {
    screen: Notifications
},
  SideBar: {
    screen: SideBar
  }
 
},
  );
  const LoggedIn = createStackNavigator({
    MyList: {
        screen: MyList,
    },
    Described: {
        screen: Described
    },
    Help:  {
        screen: Help
    },
    Notifications: {
      screen: Notifications
  },
    SideBar: {
      screen: SideBar
    },
    
   
  },{
    initialRouteName: "Described"
  }
  );
  const LoggedInRootStack = DrawerNavigator(  
    {
        drawer: {
            screen: LoggedIn
        }
    },
    {
        drawerWidth: Width * (56 / 100),
        contentComponent: SideBar,
        drawerPosition: 'right'
    }, {}
);
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
    }, {}
);
LoggedInRootStack.navigationOptions = {
  header: null,
};
RootStack.navigationOptions = {
  header: null,
};
const HomeStack = createStackNavigator({
  Drawer: RootStack,
  Home: Decision,
  Signup: Signup, 
  Login: Login,
  Selection: Selection,
  EditProfile: EditProfile,
   FAQ: FAQ,
   Video: VideoComponent,
   ContactUs: ContactUs,
   AppInfo: AppInfo,
   ResetPassword: ResetPassword
},{
  initialRouteName: "Home"
},);
const LoggedHomeStack = createStackNavigator({
  Drawer: LoggedInRootStack,
  Selection: Selection,
  EditProfile: EditProfile,
   FAQ: FAQ,
   Video: VideoComponent,
   ContactUs: ContactUs,
   AppInfo: AppInfo,
   ResetPassword: ResetPassword,
   Signup: Signup, 
  Login: Login,
},);
class reduxApp  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
      isLoggedIn: false
  };
  }
  componentDidMount(){
    SharedPreferences.getItem("key1", function(value){
      if(value){
      this.setState({isLoggedIn: true});   
      }   
    }.bind(this));
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
      if(this.state.isLoggedIn){
        return (
          <Provider store={store}>
            <LoggedHomeStack/>
            </Provider>
        );
      }else{
       return (
          <Provider store={store}>
            <HomeStack/></Provider>
        ); 
      }
        

    }
  }
}
function connectWithStore(store, WrappedComponent, ...args) {
  var ConnectedWrappedComponent = connect(...args)(WrappedComponent)
  return function (props) {
    return <ConnectedWrappedComponent {...props} store={store} />
  }
}
const App = connectWithStore(store, reduxApp,mapStateToProps, mapDispatchToProps);
export default App;

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
