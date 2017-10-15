import React, { Component } from  'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList, Linking, ScrollView} from 'react-native'
import {styles} from '../styles/styles'
import {Story} from '../components/Story'
import Icon from 'react-native-vector-icons/MaterialIcons';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import YTViewer from 'react-native-youtube';

export default class Resources extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      visibility0: true,
      visibility1: false,
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

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  }

  switchVisibility = (index) => {
    switch (index) {
        case 0:
            this.setState({visibility0: true, visibility1: false});
            break;
        case 1:
            this.setState({visibility0: false, visibility1: true});
            break;
        default:
            break;
    }
  }
  linksFlatlist(){
    return (
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
                  onPress={()=> Linking.openURL(item.url)}
                  >
                <Text style={{color: 'black', fontWeight: "bold"}}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={item => item.id}
      />
    )
  }
  videoPage(){
    return (
      <ScrollView>
      <YTViewer
        videoId="9OK6_OdWxTA"
        play={true}
        loop={true}

        onError={e => this.setState({ error: e.error })}
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}

        style={{height: 300, marginTop: 30, borderColor: "white"}}>
      </YTViewer>

      <YTViewer
        videoId="_OQ7hgr0KlY"
        play={true}
        loop={true}

        onError={e => this.setState({ error: e.error })}
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}

        style={{height: 300, marginTop: 30, borderColor: "white"}}>
      </YTViewer>

      <YTViewer
        videoId="FfwsLj97BOk"
        play={false}
        loop={true}

        onError={e => this.setState({ error: e.error })}
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}

        style={{height: 300, marginTop: 30, borderColor: "white"}}>
      </YTViewer>
      </ScrollView>
    )
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

      <SegmentedControlTab
      values={['Links', 'Videos']}
      selectedIndex={this.state.selectedIndex}
      onTabPress={this.handleIndexChange, this.switchVisibility}>
      </SegmentedControlTab>

      <View style={[styles.bodyContainer, {backgroundColor: 'orange'}]}>
        {this.state.visibility0 ?  this.linksFlatlist() : this.videoPage()}
        </View>

      </View>
    )
  }
}
