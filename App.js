import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {styles} from './src/styles/styles'
import HowIFeel from './src/views/HowIFeel'
import Home from './src/views/Home'
import Stories from './src/views/Stories'

export default class App extends Component<{}> {
  render() {
    return (
      <HowIFeel />
    );
  }
}
