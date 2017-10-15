import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {styles} from '../styles/styles'

const menuItems = ['STORY TIME', 'SCOREBOARD', 'HOW DO I FEEL', 'TRACKING & MONITORING', 'RESOURCES'];

export const Home = (props) => {

    return (
      <View style={styles.container}>
        {
          menuItems.map(x => (
            <TouchableOpacity key={x} style={styles.buttonContainer} onPress={() => { props.navView(x)}}>
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
