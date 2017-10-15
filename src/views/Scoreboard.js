import React, { Component } from  'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList} from 'react-native'
import {styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Scoreboard extends Component {

  constructor(props) {
    super(props);
  };

  render(){
    return (
      <View style={[styles.container, {backgroundColor: '#ffe331'}]}>
        <ImageBackground style={{flex: 1, marginTop: 10}} source={{uri: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/scoreboard/mockup.jpg'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '100%'}}>
              <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0)'}} onPress={() => { this.props.navView('HOME')}}>
                <Icon name={'keyboard-arrow-left'} size={35} style={{marginTop: 25}} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
