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
  WebView,
  Image
} from 'react-native';
//import { WebView } from 'react-native-webview';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
        loading: true,
        }
    }
    loaded(){
        console.log("loaded")
        //alert("loaded")
        this.setState({loading:false})
    }
  render() {
      const loading = this.state.loading;
      const _this = this;
    return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#fff',paddingTop:20}}>            <WebView
                    ref={'webview'}
            style={{"width":375,"height":"100%"}}
                    source={{ uri: 'https://www.platonfans.org' }}
                    javascriptEnabled={true}
                    scrollEnabled={false}
                    scalesPageToFit={true}
                    automaticallyAdjustContentInsets={true}
                    onLoad={function(){
                    _this.loaded()
                    }}
                   /// onError={(e)=>this.loadError.bind(this,e)}                />
            {loading ?
            <Image source={require('./images/timg.gif')} />
             :
            null}
            
            </View>
        );
  }
}

