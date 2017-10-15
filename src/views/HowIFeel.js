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
    key: 'How Do You Feel Right Now?',
    rating: null
  }, {
    key: "How's Your Pain?",
    rating: null
  }, {
    key: 'Where Does It Hurt?',
    rating: null,
    painPoints: {
      '4-8': {name: 'Right Shoulder', selected: false},
      '4-10': {name: 'Right Elbow', selected: false},
      '4-12': {name: 'Right Wrist', selected: false},
      '4-13': {name: 'Right Fingers', selected: false},
      '5-12': {name: 'Right Hip', selected: false},
      '7-12': {name: 'Left Hip', selected: false},
      '5-17': {name: 'Right Ankle', selected: false},
      '7-17': {name: 'Left Angle', selected: false},
      '5-15': {name: 'Right Knee', selected: false},
      '8-8': {name: 'Left Shoulder', selected: false},
      '8-10': {name: 'Left Elbow', selected: false},
      '8-12': {name: 'Left Wrist', selected: false},
      '8-13': {name: 'Left Fingers', selected: false},
      '7-15': {name: 'Left Knee', selected: false},
    }
  }, {
    key: 'How Strong Do You Feel',
    rating: null
  }, {
    key: "How's Your Energy Level ",
    rating: null
  }
],
  likertText: [
    [
      {key: "Very Bad", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/1_likert.gif", color: 'red'},
      {key: "Bad", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/2_likert.gif", color: 'orange'},
      {key: "Okay", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/3_likert.gif", color:'gold'},
      {key: "Good", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/4_likert.gif", color: 'lightgreen'},
      {key: "Great", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/5_likert.gif", color:'darkgreen'}
    ],
    [
      {key: "Extreme", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/1_likert.gif", color: 'red'},
      {key: "Very Painful", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/2_likert.gif", color: 'orange'},
      {key: "Some Pain", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/3_likert.gif", color:'gold'},
      {key: "Little Pain", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/4_likert.gif", color: 'lightgreen'},
      {key: "No Pain", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/5_likert.gif", color:'darkgreen'}
    ],
    [
      {key: "Very Bad", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/1_likert.gif", color: 'red'},
      {key: "Bad", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/2_likert.gif", color: 'orange'},
      {key: "Okay", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/3_likert.gif", color:'gold'},
      {key: "Good", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/4_likert.gif", color: 'lightgreen'},
      {key: "Great", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/5_likert.gif", color:'darkgreen'}
    ],
    [
      {key: "Very Weak", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/1_likert.gif", color: 'red'},
      {key: "Weak", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/2_likert.gif", color: 'orange'},
      {key: "Normal", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/3_likert.gif", color:'gold'},
      {key: "Strong", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/4_likert.gif", color: 'lightgreen'},
      {key: "Super Strong", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/5_likert.gif", color:'darkgreen'}
    ],
    [
      {key: "Very Low", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/1_likert.gif", color: 'red'},
      {key: "Low", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/2_likert.gif", color: 'orange'},
      {key: "Normal", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/3_likert.gif", color:'gold'},
      {key: "High", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/4_likert.gif", color: 'lightgreen'},
      {key: "Super", image: "https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/How%20do%20I%20feel/5_likert.gif", color:'darkgreen'}
    ],

  ]
    }
  }
  selectRating(value){
    if(Number.isInteger(value)){
      let newQuestionState = this.state.questions.slice();
      newQuestionState[this.state.index] = Object.assign({}, this.state.questions[this.state.index], {rating: value + 1})
      this.setState({questions: newQuestionState})

      if(this.state.index < this.state.questions.length - 1){
        this.setState({index: this.state.index + 1})
      }
    } else{
      let newQuestionState = this.state.questions.slice();
      newQuestionState[this.state.index] = Object.assign({}, this.state.questions[this.state.index], {painPoints: value})
      this.setState({questions: newQuestionState})
    }
  }
  navBack(){
    if(this.state.index > 0){
      this.setState({index: this.state.index - 1})
    } else {
      this.props.navView('Home')
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
  footer(){
    return (
      <View style={styles.navBar}>
        <View>
          <TouchableOpacity onPress={this.navBack.bind(this)}>
            <Text>
              Previous
            </Text>
          </TouchableOpacity>
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
          <TouchableOpacity onPress={this.navForward.bind(this)}>
            <Text>
              Next
            </Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.viewHeader, {flexDirection: 'row-reverse'}]}>
          <View style={{width: '20%'}}></View>
          <View style={{width: '60%', height: '100%', justifyContent: 'center',alignItems:'center'}}>
            <Text style={[styles.viewHeaderText, {fontSize: 25}]}>Symptom Tracking</Text>
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
            <RatingLikert
              selectRating={this.selectRating.bind(this)}
              question={this.state.questions[this.state.index].key}
              likertText={this.state.likertText[this.state.index]}
              likertIndex={this.state.index}
              navForward={this.navForward.bind(this)}
              navBack={this.navBack.bind(this)}
              />
          </View>
          {this.footer()}
        </View>
      </View>
    )
  }
}
