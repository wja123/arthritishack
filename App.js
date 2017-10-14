import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {styles} from './src/styles/styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const menuItems = ['GAMES', 'HOW I FEEL', 'VIDEOS', 'STORY TIME'];

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {
          menuItems.map(x => (
            <TouchableOpacity key={x} style={{height: 50, width: 200, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent:'center', margin: 2}}>
              <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent:'center'}}>
                <Text style={{alignItems: 'center', justifyContent:'center'}}>
                  {x}
                </Text>
              </View>
            </TouchableOpacity>

          ))
        }
      </View>
    );
  }
}
