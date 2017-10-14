import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/styles'
import {RatingLikert} from '../components/RatingLikert'

const questions =['Mood', 'Pain', 'Distribution', 'Strength/Weakness', 'Fatigue']

export default class HowIFeel extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      questions: ['Mood', 'Pain', 'Distribution', 'Strength/Weakness', 'Fatigue'],
      rating: [0,0,0,0,0]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <View style={styles.headTextContainer}>
            <Text>
              How Do I Feel
            </Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View>
            <Text>
              {questions[0]}
            </Text>
          </View>
          <View>
            <RatingLikert />
          </View>
        </View>
      </View>
    )
  }
}
