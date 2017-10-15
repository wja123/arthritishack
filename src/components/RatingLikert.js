import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import {styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
const iconSize = 70;
let {height, width} = Dimensions.get('window')
import PainPoints from './PainPoints'

const likert = [
  {key: "Very Bad", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/1_likert.gif", color: 'red'},
  {key: "Bad", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/2_likert.gif", color: 'orange'},
  {key: "Okay", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/3_likert.gif", color:'gold'},
  {key: "Good", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/4_likert.gif", color: 'lightgreen'},
  {key: "Great", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/5_likert.gif", color:'darkgreen'}
];

export const RatingLikert = (props) => {
  const likert = props.likertText;
  return (
    props.likertIndex === 2?
    <View style={{height: '100%', width: '100%'}}>
        <PainPoints setPainPoints={(values)=>{props.selectRating(values)}}/>
    </View>
    :
    <View style={styles.likertBar}>
      {likert.map((x, index) => (
        <TouchableOpacity key={x.key} onPress={() => {
            props.selectRating(index);
          }}>
          <View style={styles.likertButtonContainer}>
            <View>
              <Image source={{uri: x.image}} style={{height: width/5, width: width/5, resizeMode: 'contain'}} />
            </View>
            <View>
              <Text>
                {x.key}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}
