import React from 'react';
import {Image, ImageBackground, View, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Progress = (props) => (
  <View style={[styles.container]}>
    <ImageBackground style={{flex: 1}} resizeMode="contain" source={{uri: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/progress/Sample%20graph.001.jpeg'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '100%'}}>
          <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0)'}} onPress={() => { props.navView('HOME')}}>
            <Icon name={'keyboard-arrow-left'} size={35} style={{marginTop: 25}} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
)
