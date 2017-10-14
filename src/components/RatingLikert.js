import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
const VerySatisfied = (<Icon name="sentiment-very-satisfied" size={30} color="#900" />)
const Satisfied = (<Icon name="sentiment-satisfied" size={30} color="#900" />)
const Neutral = (<Icon name="sentiment-neutral" size={30} color="#900" />)
const Dissatisfied = (<Icon name="sentiment-dissatisfied" size={30} color="#900" />)
const VeryDissatisfied = (<Icon name="sentiment-very-dissatisfied" size={30} color="#900" />)

const likert = [
  {key: "Very Bad", icon: VeryDissatisfied},
  {key: "Bad", icon: Dissatisfied},
  {key: "Okay", icon: Neutral},
  {key: "Good", icon: Satisfied},
  {key: "Great", icon: VerySatisfied}
];

export const RatingLikert = (props) => {
  return (
    <View style={styles.likertBar}>
      {likert.map((x, index) => (<View key={x.key}>{x.icon}</View>))}
    </View>
  )
}
