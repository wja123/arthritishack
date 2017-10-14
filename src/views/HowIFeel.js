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
    let newQuestionState =this.state.questions.slice();
    newQuestionState[this.state.index] =Object.assign({}, this.state.questions[this.state.index], {rating: value})
    this.setState({questions: newQuestionState})
    if(this.state.index < this.state.questions.length - 1){
      this.setState({index: this.state.index + 1})
    }
    console.warn(JSON.stringify(this.state))
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
              {this.state.questions[this.state.index].key}
            </Text>
          </View>
          <View style={styles.likertScaleContainer}>
            <RatingLikert selectRating={this.selectRating.bind(this)}/>
          </View>
        </View>
      </View>
    )
  }
}
