import React, { Component } from  'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList} from 'react-native'
import {styles} from '../styles/styles'

export default class Stories extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [{ id: 1, title: 'Symptoms', image:'https://raw.githubusercontent.com/wja123/arthritishack/258b1bb61442acf983b4dc0de8d7beacfe61fa3a/src/assets/1%20thumbnail%20symptoms.jpg'}, { id: 2, title: 'Medicines', image:'https://raw.githubusercontent.com/wja123/arthritishack/258b1bb61442acf983b4dc0de8d7beacfe61fa3a/src/assets/2%20thumbnail%20medicines.jpg'}, { id: 3, title: 'Play', image:'https://raw.githubusercontent.com/wja123/arthritishack/258b1bb61442acf983b4dc0de8d7beacfe61fa3a/src/assets/3%20thumbnail%20ridiing%20bike.jpg'}],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  render(){
    return (
      <View style={[styles.container]}>
      <View style={[styles.viewHeader]}>
        <Text style={styles.viewHeaderText}>Stories</Text>
      </View>
      <View style={[styles.bodyContainer]}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View>
            <View>
              <Image source={{uri: item.image}} style={{width: 200, height: 200, resizeMode: Image.resizeMode.contain}}>
              </Image>
              </View>
              <View>
              <Text>{item.title}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.title}
        />
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
