import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


export const Story1 = (props) => {
    let index = 0;
    const story1Obj = [
    {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page0.png?raw=true',
        caption: 'CAPTION 1'
    },
    {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page1.png?raw=true',
        caption: 'CAPTION 2'
    },
    {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page2.png?raw=true',
        caption: 'CAPTION 3'
    },
    {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page3.png?raw=true',
        caption: 'CAPTION 4'
    },
    {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page4.png?raw=true',
        caption: 'CAPTION 5'
    },
    {
        image: 'https://github.com/wja123/arthritishack/blob/master/src/assets/story1/page5.png?raw=true',
        caption: 'CAPTION 6'
    },

    ]
    function next(){
      index = index > story1Obj.length? index : index+ 1;
    }
    function next(){
      index = index > 0? index : index- 1;
    }

  return(
    <View>
      <View>
        <ImageBackground source={{uri: story1Obj[index].image}} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'contain'}}>
          <View style={{height: '100%', width: '100%', justifyContent: 'flex-end', flexDirection: 'column'}}>
            <View style={{height: '30%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{height: '70%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 30}}>
                  {story1Obj[index].caption}
                </Text>
              </View>
              <View style={{width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'orange'}}>
                <TouchableOpacity onPress={this.next} style={{width: '50%', alignItems: 'flex-end'}}>
                  <Icon name={'navigate-next'} size={35} color={'black'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}
