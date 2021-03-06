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
      visibility: true,
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
      visibility: !this.state.visibility
    });
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

      <Text style={{marginTop: 40, fontWeight: "bold", fontSize: 20}}>What is a Medicine?</Text>
      <YTViewer
        videoId="9OK6_OdWxTA"
        play={false}
        loop={true}

        onError={e => this.setState({ error: e.error })}
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}

        style={{height: 300, borderColor: "white"}}>
      </YTViewer>

      <Text style={{marginTop: 40, fontWeight: "bold", fontSize: 20}}>What does a Doctor do?</Text>
      <YTViewer
        videoId="_OQ7hgr0KlY"
        play={false}
        loop={true}

        onError={e => this.setState({ error: e.error })}
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}

        style={{height: 300, borderColor: "white"}}>
      </YTViewer>

      <Text style={{marginTop: 40, fontWeight: "bold", fontSize: 20}}>Don't be afraid of the Doctor</Text>
      <YTViewer
        videoId="FfwsLj97BOk"
        play={false}
        loop={true}

        onError={e => this.setState({ error: e.error })}
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}

        style={{height: 300, borderColor: "white"}}>
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
        <View style={{width: '60%', height: '100%', justifyContent: 'center', alignItems:'center'}}>
          <Text style={styles.viewHeaderText}>Resources</Text>
        </View>
        <View style={{width: '20%'}}>
          <TouchableOpacity onPress={() => { this.props.navView('HOME')}}>
            <Icon name={'keyboard-arrow-left'} size={35} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{backgroundColor: 'white', flexDirection: 'row', width: '100%', height: 30}}>
        <TouchableOpacity onPress={this.handleIndexChange.bind(this)} style={{width: '50%', height:'100%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'lightgrey', backgroundColor: this.state.visibility ? 'lightblue': 'lightgrey'}}>
          <View style={{width: '50%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
              Links
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleIndexChange.bind(this)} style={{width: '50%', height:'100%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'lightgrey', backgroundColor: !this.state.visibility? 'lightblue': 'lightgrey'}}>
          <View style={{width: '50%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
              Videos
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.bodyContainer, {backgroundColor: 'orange'}]}>
        {this.state.visibility ?  this.linksFlatlist() : this.videoPage()}
        </View>

      </View>
    )
  }
}
