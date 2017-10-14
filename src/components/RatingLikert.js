import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
const iconSize = 70;


const likert = [
  {key: "Very Bad", icon: "sentiment-very-dissatisfied"},
  {key: "Bad", icon: "sentiment-dissatisfied"},
  {key: "Okay", icon: "sentiment-neutral"},
  {key: "Good", icon: "sentiment-satisfied"},
  {key: "Great", icon: "sentiment-very-satisfied"}
];

export const RatingLikert = (props) => {
  return (
    <View style={styles.likertBar}>
      {likert.map((x, index) => (
        <TouchableOpacity key={x.key} onPress={() => {

            props.selectRating(index);
          }}>
          <View style={styles.likertButtonContainer}>
            <View>
              <Icon name={x.icon} size={iconSize} color="#900" />
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
