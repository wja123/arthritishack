import React, {Component} from 'react'
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native'
import {styles} from '../styles/styles'
import {RatingLikert} from '../components/RatingLikert'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HowIFeel extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      questions : [
  {
    key: 'Mood',
    rating: null
  }, {
    key: "How's Your Pain?",
    rating: null
  }, {
    key: 'Where Does It Hurt?',
    rating: null
  }, {
    key: 'Strength/Weakness',
    rating: null
  }, {
    key: 'Fatigue',
    rating: null
  }
],
    }
  }
  selectRating(value){
    let newQuestionState = this.state.questions.slice();
    newQuestionState[this.state.index] = Object.assign({}, this.state.questions[this.state.index], {rating: value + 1})
    this.setState({questions: newQuestionState})

    if(this.state.index < this.state.questions.length - 1){
      this.setState({index: this.state.index + 1})
    }
  }
  navBack(){
    if(this.state.index > 0){
      this.setState({index: this.state.index - 1})
    }
  }
  navForward(){
    if(this.state.index < this.state.questions.length -1){
      this.setState({index: this.state.index + 1})
    }
  }
  saveRatings(){
    AsyncStorage.getItem('questions', (err, quest) => {
      let questionsObj = {};
      console.warn(quest)
      let tempObj = quest? JSON.parse(quest) : [];
      questionsObj.questions = this.state.questions.slice();
      questionsObj.time = Date.now();
      tempObj.push(questionsObj);
      AsyncStorage.setItem('questions', JSON.stringify(tempObj));
    })
  }
  clearRatings(){
    AsyncStorage.removeItem('questions', (err) => {
      console.warn(err)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.viewHeader, {flexDirection: 'row-reverse'}]}>
          <View style={{width: '20%'}}></View>
          <View style={{width: '60%', height: '100%', justifyContent: 'center',alignItems:'center'}}>
            <Text style={[styles.viewHeaderText, {fontSize: 25}]}>How Do You Feel?</Text>
          </View>
          <View style={{width: '20%'}}>
            <TouchableOpacity onPress={() => { this.props.navView('HOME')}}>
              <Icon name={'keyboard-arrow-left'} size={35} color={'black'} />
            </TouchableOpacity>
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
          <View style={styles.navBar}>
            <View>
              <Text>
                Back
              </Text>
            </View>
            <View>
              <View>
            {this.state.index === 4?
              (<TouchableOpacity onPress={this.saveRatings.bind(this)}>
                <Text>
                  Submit
                </Text>
              </TouchableOpacity>) : null
            }
          </View>
            </View>
            <View>
              <Text>
                Forward
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
