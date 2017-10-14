import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/styles'
import {RatingLikert} from '../components/RatingLikert'

export default class HowIFeel extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      questions: [{key: 'Mood', rating: 0}, {key: 'Pain', rating: 0}, {key: 'Distribution', rating: 0}, {key: 'Strength/Weakness', rating: 0},  {key: 'Fatigue', rating: 0}],
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
              {this.state.questions[0].key}
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
