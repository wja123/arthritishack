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
  selectRating(value){
    let newQuestionState = Object.assign({}, this.state.questions, {key: this.state.questions[this.state.index].key, rating: value});
    this.setState({questions: newQuestionState})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <View style={styles.headTextContainer}>
            <Text style={styles.viewHeaderText}>
              How Do You Feel?
            </Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.likertSectionTitle}>
            <Text style={styles.likertHeader}>
              {this.state.questions[0].key}
            </Text>
          </View>
          <View style={styles.likertScaleContainer}>
            <RatingLikert />
          </View>
        </View>
      </View>
    )
  }
}
