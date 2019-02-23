import React, { Component } from 'react';
import {
  ActivityIndicator, Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  StatusBar,
  ImageBackground,
  TouchableNativeFeedback,
  ScrollView,
  Dimensions,
  FlatList,
  WebView
} from 'react-native';
import axios from 'axios';
const api_key = '114063_a93666d11c33ea8dccac';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

export default class VideoComponent extends React.Component {
    videoPlayer;
    constructor(props) {
        super(props);
        this.state = {opacity: 0};
    }
    static navigationOptions = {
        header: null,
        };
     onLoadStart = () => {
        this.setState({opacity: 1});
    }
    
    onLoad = () => {
        this.setState({opacity: 0});
    }
    
    onBuffer = ({isBuffering}) => {
        this.setState({opacity: isBuffering ? 1 : 0});
    }

  render () {
    const {params} = this.props.navigation.state;
    return (
      <View style={{flex: 1, backgroundColor: '#000F21',}}>
      <StatusBar backgroundColor='#000F21' translucent={true} barStyle='light-content'/>
      <View style={{height: 25, width: '95%',alignSelf: 'center',
          marginTop: StatusBar.currentHeight+10, backgroundColor: 'transparent',
          flexDirection: 'row', }}>
         <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
         <Image resizeMode={'contain'} source={require('../left.png')} style={{width: 22,height: 25}}/>
         </TouchableNativeFeedback>
         </View>
      {params.uri?<WebView
        source={{uri: params.uri}}
        style={{height: '50%', width: '100%',backgroundColor: '#000F21'}}
                onLoadStart={this.onLoadStart}
                onLoad={this.onLoad}
                javaScriptEnabled={true}
      />:<View style={{width: '75%', height:50, backgroundColor: 'orange',
      borderRadius: 3, alignItems:'center', alignSelf: 'center',
       justifyContent: 'center', marginTop: 20}}>
           <Text style={{fontSize: 14, color: 'white',fontFamily: 'mont-bold',}}>Not available at the moment</Text>
       </View>}
      <ActivityIndicator
                animating
                size="large"
                color={'orange'}
                style={[styles.activityIndicator, {opacity: this.state.opacity}]}
            />
      </View>
    )
  }
}
/*{this.renderVideo()}
<Video
        //  source={{uri: 'https://api.dacast.com/v2/channel/477044/embed/iframe?apikey=114063_a93666d11c33ea8dccac'}}
     //   source={{uri: "https://iframe.dacast.com/b/114063/c/477044"}}
     source={{uri: "http://naijaloaded.store/wp-content/uploads/2019/02/Lil-Kesh-%E2%80%93-Undertaker.mp3"}}
        onEnd={this.onEnd}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          paused={this.state.paused}
          ref={videoPlayer => (this.videoPlayer = videoPlayer)}
          resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          style={{ width: 400, height: 400 }}
      //    poster={params.image}
      //    posterResizeMode={'contain'}
       //   repeat={true}
          resizeMode={"cover"}
      //    minLoadRetryCount={5}
          volume={1.0}
          rate={1.0}
        //  fullscreen={true}
          ignoreSilentSwitch={"obey"}
        />
         <MediaControls
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          mainColor="#333"
          onFullScreen={this.onFullScreen}
          onPaused={this.onPaused}
          onReplay={this.onReplay}
          onSeek={this.onSeek}
          onSeeking={this.onSeeking}
          playerState={this.state.playerState}
          progress={this.state.currentTime}
          toolbar={this.renderToolbar()}
        /></View>
*/

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  activityIndicator: {
    position: 'absolute',
    top: 100,
    left: 100,
    right: 100,
    height: 50,
},
});
