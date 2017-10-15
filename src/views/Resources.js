import React, { Component } from  'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList} from 'react-native'
import {styles} from '../styles/styles'
import {Story} from '../components/Story'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Resources extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [
        {
          id: 1,
          title: 'The Arthritis Society',
          url: 'http://arthritis.ca/'
        }, {
          id: 2,
          title: 'Arthritis Foundation - JRA',
          url: 'http://www.kidsgetarthritistoo.org/'
        }, {
          id: 3,
          title: 'RheumatoidArthritis.org',
          url: 'https://www.rheumatoidarthritis.org/ra/juvenile/'
        }, {
          id: 4,
          title: 'American College of Rheumatology',
          url: 'https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Juvenile-Arthritis'
        }
      ]
    }
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "black",
        }}
      />
    );
  };

  render(){
    return (
      <View style={[styles.container]}>
      <View style={[styles.viewHeader, {flexDirection: 'row-reverse', backgroundColor: 'orange'}]}>
        <View style={{width: '20%'}}></View>
        <View style={{width: '60%', height: '100%', justifyContent: 'center',alignItems:'center'}}>
          <Text style={styles.viewHeaderText}>Resources</Text>
        </View>
        <View style={{width: '20%'}}>
          <TouchableOpacity onPress={() => { this.props.navView('HOME')}}>
            <Icon name={'keyboard-arrow-left'} size={35} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bodyContainer, {backgroundColor: 'orange'}]}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <View style={{paddingTop: 30, alignItems: 'center'}}>
              <View style={{flexDirection: "row", justifyContent: 'center', paddingBottom: 30}}>
                <TouchableOpacity
                  style={{width: 275,
                    height: 40,
                    borderRadius: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'}}
                    >
                  <Text style={{color: 'black', fontWeight: "bold"}}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.id}
        />
        </View>
      </View>
    )
  }
}
