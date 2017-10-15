import React, { Component } from  'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList} from 'react-native'
import {styles} from '../styles/styles'
import {Story} from '../components/Story'
export default class Stories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storyIndex: 0,
      menuIndex:0,
      showStory: false,
      data : [
  {
    id: 1,
    title: 'Symptoms',
    image1: 'https://github.com/wja123/arthritishack/blob/stories/src/assets/1_gif.gif?raw=true',
    image2: 'https://github.com/wja123/arthritishack/blob/stories/src/assets/speechbubble1.gif?raw=true',
    storyData : [
      {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page0.png?raw=true',
        caption: 'CAPTION 1'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page1.jpg',
        caption: 'CAPTION 2'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page2.jpg',
        caption: 'CAPTION 3'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page3.jpg',
        caption: 'CAPTION 4'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page4.jpg',
        caption: 'CAPTION 5'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page5.jpg',
        caption: 'CAPTION 6'
      },
    ]
  }, {
    id: 2,
    title: 'Medicines',
    image1: 'https://github.com/wja123/arthritishack/blob/stories/src/assets/speechbubble2.gif?raw=true',
    image2: 'https://github.com/wja123/arthritishack/blob/stories/src/assets/2_gif.gif?raw=true',
    storyData : [
      {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page0.png?raw=true',
        caption: 'CAPTION 1'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page1.jpg',
        caption: 'CAPTION 2'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page2.jpg',
        caption: 'CAPTION 3'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page3.jpg',
        caption: 'CAPTION 4'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page4.jpg',
        caption: 'CAPTION 5'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page5.jpg',
        caption: 'CAPTION 6'
      },
    ]
  }, {
    id: 3,
    title: 'Play',
    image1: 'https://github.com/wja123/arthritishack/blob/stories/src/assets/3_gif.gif?raw=true',
    image2: 'https://github.com/wja123/arthritishack/blob/stories/src/assets/speechbubble3.gif?raw=true',
    storyData : [
      {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page0.png?raw=true',
        caption: 'CAPTION 1'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page1.jpg',
        caption: 'CAPTION 2'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page2.jpg',
        caption: 'CAPTION 3'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page3.jpg',
        caption: 'CAPTION 4'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page4.jpg',
        caption: 'CAPTION 5'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page5.jpg',
        caption: 'CAPTION 6'
      },
    ]
  }, {
    id: 4,
    title: 'Bath',
    image1: 'https://github.com/wja123/arthritishack/blob/stories/src/assets/speechbubble4.gif?raw=true',
    image2: 'https://github.com/wja123/arthritishack/blob/stories/src/assets/4_gif.gif?raw=true',
    storyData : [
      {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page0.png?raw=true',
        caption: 'CAPTION 1'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page1.jpg',
        caption: 'CAPTION 2'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page2.jpg',
        caption: 'CAPTION 3'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page3.jpg',
        caption: 'CAPTION 4'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page4.jpg',
        caption: 'CAPTION 5'
      },
      {
        image: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/story1/page5.jpg',
        caption: 'CAPTION 6'
      },
    ]
  }
],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    }
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
  next = (index) => {
    if(this.state.storyIndex < this.state.data[index].storyData.length-1){
      this.setState({storyIndex: this.state.storyIndex + 1})
    } else {
      this.setState({storyIndex: 0, showStory: false})
    }
  }
  back = (index) => {
    if(this.state.storyIndex > 0){
      this.setState({storyIndex: this.state.storyIndex - 1})
    } else {
      this.setState({storyIndex: 0, showStory: false})
    }
  }
  render(){
    return (
      !this.state.showStory ?
        <View style={[styles.container]}>
      <View style={[styles.viewHeader]}>
        <Text style={styles.viewHeaderText}>Stories</Text>
      </View>
      <View style={[styles.bodyContainer]}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <View style={{paddingTop: 30, paddingBottom: 20, alignItems: 'center'}}>
              <View style={{flexDirection: "row", justifyContent: 'center', paddingBottom: 30}}>
                <Image source={{uri: item.image1}} style={{width: 150, height: 150, resizeMode: Image.resizeMode.contain}}>
                </Image>
                <Image source={{uri: item.image2}} style={{width: 150, height: 150, resizeMode: Image.resizeMode.contain}}>
                </Image>
              </View>

              <TouchableOpacity
                style={{width: 150,
                  height: 40,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'purple'}}
                  onPress={() => {this.setState({menuIndex : index, showStory: true})}}
                  >
                <Text style={{color: 'white', fontWeight: "bold"}}>LEARN MORE</Text>
              </TouchableOpacity>

            </View>
          )}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.id}
        />
        </View>
      </View> : <Story story={this.state.data[this.state.menuIndex].storyData} next={this.next.bind(this)} back={this.back.bind(this)} index={this.state.storyIndex} menuIndex={this.state.menuIndex}/>
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
