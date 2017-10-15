import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


export const Story = (props) => {
  return(
    <View>
      <View>
        <ImageBackground source={{uri: props.story[props.index].image}} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'contain'}}>
          <View style={{height: '100%', width: '100%', justifyContent: 'flex-end', flexDirection: 'column', backgroundColor: props.story[props.index].blur? 'rgba(256,256,256,0.9)': 'rgba(256,256,256,0)'}}>
            <View style={{height: '20%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{height: '70%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
                  {props.story[props.index].caption}
                </Text>
              </View>
              <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => props.back(props.menuIndex)} style={{width: '50%', alignItems: 'flex-start'}}>
                  <Icon name={'keyboard-arrow-left'} size={35} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.next(props.menuIndex)} style={{width: '50%', alignItems: 'flex-end'}}>
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
