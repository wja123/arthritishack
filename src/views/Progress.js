import React, { Component } from 'react';
import {Image, ImageBackground, View, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Progress extends Component {

  constructor(props) {
    super(props);
  };

  render(){
      return (
      <View style={[styles.container, {backgroundColor: '#ffe331'}]}>
        <ImageBackground style={{flex: 1, marginTop: 10}} source={{uri: 'https://github.com/wja123/arthritishack/blob/master/src/assets/progress/progress.jpg?raw=true'}}>
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
