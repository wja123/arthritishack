import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {styles} from '../styles/styles'

const menuItems = ['GAMES', 'HOW I FEEL', 'VIDEOS', 'STORY TIME'];

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {
          menuItems.map(x => (
            <TouchableOpacity key={x} style={styles.buttonContainer}>
              <View style={styles.buttonInner}>
                <Text style={styles.buttonText}>
                  {x}
                </Text>
              </View>
            </TouchableOpacity>)
          )
        }
      </View>
    );
  }
}
