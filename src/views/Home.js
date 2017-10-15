import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import {styles} from '../styles/styles'

const menuItems = [{name: 'STORY TIME', image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/MenuAssets/1_storytime.jpg'
}, {name: 'SCOREBOARD', image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/MenuAssets/2_scoreboard.jpg'
}, {name: 'HOW DO I FEEL', image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/MenuAssets/3_how_doIfeel.jpg'
}, {name: 'TRACKING & MONITORING', image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/MenuAssets/4_progress.jpg'
}, {name: 'RESOURCES', image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/MenuAssets/5_resources.gif'
}];

export const Home = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: 'orange', justifyContent: 'center'}]}>

    <View style={{backgroundColor: 'white', width: "100%", alignItems: "center"}}>
      <Image source={{uri: 'https://raw.githubusercontent.com/wja123/arthritishack/bef840def889bbf322eb7d55595733dca142d812/src/assets/logo.png'}} style={{width: 200, height: 100, marginTop: 15, marginBottom: 5}}>
      </Image>
    </View>

      {
        <FlatList style={{width:'100%'}} data={menuItems}
          renderItem={({item, index}) => (
            <View key={item.name} style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity  style={[styles.buttonContainer, {height: 200, width: 275, paddingLeft: 15, paddingRight: 15}]} onPress={() => { props.navView(item.name)}}>
                <Image source={{uri: item.image}} style={{resizeMode: 'contain', width: '100%', height: '100%'}} />
              </TouchableOpacity>
            </View>)}
          keyExtractor={item => item.name}/>
      }
    </View>
  );
}
