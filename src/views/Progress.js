import React, { Component } from 'react';
import {Image, ImageBackground, View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Progress extends Component {

  constructor(props) {
    super(props);
    this.state = {bgImage :'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/progress/progress.jpg'
  }};
  toggleBgImg()
  {
    this.setState({bgImage: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/progress/parent_progress.jpg'})
  }
  render(){
      return (
      <View style={[styles.container, {backgroundColor: '#ffe331'}]}>
        <ImageBackground style={{flex: 1, marginTop: -10}} imageStyle={{resizeMode: "contain"}} source={{uri: this.state.bgImage}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '100%'}}>
              <TouchableOpacity style={{backgroundColor: 'rgba(0,0,0,0)'}} onPress={() => { this.props.navView('HOME')}}>
                <Icon name={'keyboard-arrow-left'} size={35} style={{marginTop: 45}} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={{backgroundColor: "white", borderRadius: 8}}>
        <TouchableOpacity onPress={this.toggleBgImg.bind(this)}>
          <Icon name={'keyboard-arrow-up'} size={35} style={{marginTop: 10}} color={'black'} />
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}
