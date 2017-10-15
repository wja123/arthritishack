import React, { Component } from  'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList} from 'react-native'
import {styles} from '../styles/styles'
import YTViewer from 'react-native-youtube'

export default class YouTube extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      fullscreen: false,
      isPlaying: false,
      isLooping: false,
    };
  };

  render(){
    return (
      <View style={[styles.container]}>
        <View style={[styles.viewHeader]}>
          <Text style={styles.viewHeaderText}>Page Header</Text>
        </View>

        <View style={[styles.bodyContainer]}>
          <YTViewer
            videoId="9OK6_OdWxTA"
            play={true}
            loop={true}

            onError={e => this.setState({ error: e.error })}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}

            style={{alignSelf: 'stretch', height: 300, borderColor: "white"}}>
          </YTViewer>
        </View>

      </View>
    )
  }
}
