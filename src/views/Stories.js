import React, { Component } from  'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import {styles} from '../styles/styles'

export default class Stories extends Component {
  render(){
    return (
      <View style={[styles.container, {backgroundColor: 'orange'}]}>
        <View style={[styles.viewHeader, {backgroundColor: 'purple'}]}>
          <Text style={styles.viewHeaderText}>Stories</Text>
        </View>
        <View style={[styles.bodyContainer]}>
          
        </View>
      </View>
    )
  }
}

/*
Juvenile -  SYMMETRIC - if one knee gets it the
other knee will eventually get it TouchableOpacity

- Get Uvitis - Disease in eyes - Cataracts
  - JA - when you have a flareup  you get eye issues right away
  - Kids suffer from more emotional problems than adults
    - Bullying by Kids (Parents don't inform other kids to )
    - Teachers don't understand that kids have vision problems, etc
      - Must take into account colors (contrast issues)
      - flashing lights are a problem
    - Don't want sympathy, apathy
    - May want to play instead of physio, create alternatives that allow
    playing with others while achieving the physio goals
-
*/
