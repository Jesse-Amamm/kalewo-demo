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
  TouchableNativeFeedback,
  ScrollView,
  Dimensions,
  FlatList,
  Alert
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import axios from 'axios';
const api_key = '114063_a93666d11c33ea8dccac';
export default class Home extends Component{
  componentDidMount() {
      NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    if(this.state.isConnected){   
    axios.get(
                       'http://api.dacast.com/v2/channel?apikey='+api_key+'&sort=ASC'
                   ).then((response) => {   
                    console.log(response);   
                    var len = response.data?response.data.length:null;
                    for (let i = 0; i < 4; i++) {
                        let row = response.data.data[i];
                        console.log(row);console.log(i);console.log("djdn")
                        this.setState(prevState => ({
                            ltvs: [...prevState.ltvs, row],
                        }), console.log(this.state.ltvs[0]));
                        console.log(i);
                        console.log("ltvs")
                    };
                    for (let i = 4; i < 7; i++) {
                      let row = response.data.data[i];
                      console.log(row);console.log(i);console.log("djdn")
                      this.setState(prevState => ({
                          visual_radio: [...prevState.visual_radio, row],
                      }), console.log(this.state.visual_radio[0]));
                      console.log(i);
                      console.log("visual_radio")
                  }
                  for (let i = 10; i < 11; i++) {
                    let row = response.data.data[i];
                    console.log(row);console.log(i);console.log("djdn")
                    this.setState(prevState => ({
                        mn: [...prevState.mn, row],
                    }), console.log(this.state.mn[0]));
                    console.log(i);
                    console.log("miss nigeria")
                }
                  console.log(this.state.visual_radio);
                  this.setState({loading: false});
                   }).catch((error) => {
                    this.setState({loading: false});
                        Alert.alert(
                            'Error',
                             'Please check your internet connection',
                            [
                              {text: 'OK'},
                            ],  );    
                            console.log(error); 
                           }); 
 axios.get(
                            'http://api.dacast.com//v2/vod?apikey='+api_key
                        ).then((response) => {   
                         console.log(response);   
                         var len = response.data.data?response.data.data.length:null;
                         for (let i = 0; i < len; i++) {
                             let row = response.data.data[i];
                             console.log(row);console.log(i);console.log("djdn")
                             if(row.title.toLowerCase().indexOf('live recording') >= 0){
                               console.log("it includes");
                             this.setState(prevState => ({
                                 mn: [...prevState.mn, row],
                             }), console.log(this.state.mn[0]));  
                             }else{
                              this.setState(prevState => ({
                                mnh: [...prevState.mnh, row],
                            }), console.log(this.state.mnh[0]));    
                             };
                         };
                       this.setState({loading: false});
                        }).catch((error) => {
                         this.setState({loading: false});
                             Alert.alert(
                                 'Error',
                                  'Please check your internet connection',
                                 [
                                   {text: 'OK'},
                                 ],  );    
                                 console.log(error); 
                                });          
                           }
    }
    handleConnectivityChange(isConnected){
      this.setState({ isConnected });
    }
    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }
handleConnectivityChange = isConnected => {
    this.setState({ isConnected });
};
  static navigationOptions = {
    header: null,
    };
  _renderItem ({item, index}) {
    return (
      <TouchableNativeFeedback onPress={() =>
        this.props.navigation.navigate('Details', {
                  title: item.title,
                  image: item.pictures.thumbnail[0],
                  description: item.description,
                  uri: item.share_code.facebook
                }
        )}>
        <View style={{flexDirection: 'column', height: 250, width: 200}}>
        {item.pictures.thumbnail[0]?
        <Image resizeMode="cover" style={{width: 200, height: 200, borderRadius: 4}}
                                   source={{uri: item.pictures.thumbnail[0]}}/>:
                                   <Image resizeMode="cover"
                                   style={{width: 200, height: 200, borderRadius: 4}}
                                   source={require('../none.jpg')}/>}
            <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66', alignSelf: 'center'}} >
                { item.title }
            </Text>
            <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'center'}}>
                        <View style={{width: 22, height: 20, }}>
                          <Image 
                          resizeMode="contain" style={{width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        </View>
        </View>
        </TouchableNativeFeedback>
    );
}
constructor(props) {
  super(props);
  this.state = {
  ltvs: [],
  loading: true,
  visual_radio: [],
  isConnected: true,
  mn: [],
  mnh: [] 
  };
}
  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#000F21'}}>
      <StatusBar backgroundColor='#000F21' translucent={true} barStyle='light-content'/>
      <View style={styles.head}>
      <Image resizeMode="contain" style={{width: 20, height: 25}} source={require('../app_icon.png')}/>
      <Text style={{fontSize: 14, color: 'orange', fontFamily: 'mont-bold'}}>HOME</Text>
      <Image resizeMode="contain" style={{width: 20, height: 25}} source={require('../search.png')}/>
      </View>
      <ScrollView keyboardShouldPersistTaps='always'
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}>
      <Text style={{fontSize: 12, color: 'white', marginBottom: 10, fontFamily: 'mont-bold',marginLeft: 10 }}>
       Live TV streaming
      </Text>
     {this.state.loading? <ActivityIndicator size="small" color="orange" />: <FlatList          
            data={this.state.ltvs} 
            horizontal={true}         
            renderItem={({ item }) => (
              <TouchableNativeFeedback 
            onPress={() =>
                this.props.navigation.navigate('Details', {
                  title: item.title,
                  image: item.pictures.thumbnail[0],
                  description: item.description,
                  uri: item.share_code.facebook
                }
                )}
                >
                    <View style={{flexDirection: 'column', width: 300, height: 170, marginLeft: 10}}>
                        <View style={{width: 300, height: 120, marginBottom: 10,}}>
                         {item.pictures.thumbnail?<Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={{uri: item.pictures.thumbnail[0]}}/>:
                                   <Image resizeMode="cover"
                                   style={{width: 300, height: 120, 
                                   borderRadius: 4, }}
                                   source={require('../none.jpg')}/>}
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 280}}>
                          <Text style={{fontSize: 14, fontFamily: 'mont-bold', color: '#F2BB66'}}>
                          {item.title}</Text>
                        
                        <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <View style={{width: 22, height: 20, }}>
                          <Image 
                          resizeMode="contain" style={{width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        <View style={{width: 22, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                          <Image 
                          resizeMode="contain" style={{flex: 1,width: 22,height: 20,}}
                         source={require('../star.png')}/>
                        </View>
                        </View></View>
                    </View>
                    </TouchableNativeFeedback>
 )}          
             keyExtractor={(item, index) => index}                       
          />            }
          <Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       Visual Radio
      </Text>
          {this.state.loading? <ActivityIndicator size="small" color="orange" />: <Carousel
                data={this.state.visual_radio}
                renderItem={this._renderItem.bind(this)}
             //   hasParallaxImages={true}
                windowSize={1}
                itemWidth={200}
                sliderWidth={Dimensions.get('window').width}
                itemHeight={250}
                layout={'default'}
                firstItem={1}
            />          }
      <Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       Miss Nigeria 2018 Highlights
      </Text>
          {this.state.loading? <ActivityIndicator size="small" color="orange" />: <Carousel
                data={this.state.mnh}
                renderItem={this._renderItem.bind(this)}
             //   hasParallaxImages={true}
                windowSize={1}
                itemWidth={200}
                sliderWidth={Dimensions.get('window').width}
                itemHeight={250}
                layout={'default'}
                firstItem={1}
            />          }
            <Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       Miss Nigeria
      </Text>
          {this.state.loading? <ActivityIndicator size="small" color="orange" />: <Carousel
                data={this.state.mn}
                renderItem={this._renderItem.bind(this)}
             //   hasParallaxImages={true}
                windowSize={1}
                itemWidth={200}
                sliderWidth={Dimensions.get('window').width}
                itemHeight={250}
                layout={'default'}
                firstItem={1}
            />          }
         
          </ScrollView>
          {!this.state.isConnected?<View style={styles.internet}>
                 <Text style={styles.intText}>
                     No Internet Connection detected
                 </Text>  
                </View>: null}    
      </View>
    );
  }
}

/* 
  
        <Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       TV SHOWS
      </Text> 
      <View style={{flexDirection: 'row', width: '90%', height: 140, justifyContent: 'space-between', alignSelf: 'center'}}>
      <Image resizeMode={'contain'} source={require('../chiefDaddy.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      <Image resizeMode={'contain'} source={require('../skinnyGirl.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      <Image resizeMode={'contain'} source={require('../jenifasDiary.jpg')}
      style={{width: '25%', height: 140, borderWidth: 3, borderColor: 'white'}}/>
      </View> 
<Text style={{fontSize: 12, color: 'white', marginBottom: 15, marginTop: 10, fontFamily: 'mont-bold', marginLeft: 10}}>
       POPULAR
      </Text>
      <Carousel
                data={this.state.entries}
                renderItem={this._renderItem.bind(this)}
             //   hasParallaxImages={true}
                windowSize={1}
                itemWidth={200}
                sliderWidth={Dimensions.get('window').width}
                itemHeight={250}
                layout={'default'}
                firstItem={1}
            />*/
const styles = StyleSheet.create({
  intText:{
    color: '#fff',
    fontFamily: 'mont',
    fontSize: 14
},
  internet: {
    position: 'absolute',
    bottom: 56,
    backgroundColor: '#615D5D',
    width: '100%',
    height: 50,
    paddingLeft: 10,
    paddingTop: 10
   },
    head: {
        height: 80,
        flexDirection: 'row', 
        elevation: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white', 
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: StatusBar.currentHeight

    },
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
