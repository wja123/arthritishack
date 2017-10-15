import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text
} from 'react-native'
import {styles} from '../styles/styles'
const {height, width} = Dimensions.get('window');

export default class PainPoints extends Component {
  constructor(props){
  	super(props);
  	this.state = {
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
    };
  }
  selectPainPoint(point){
    if(this.state.painPoints[point]){
      let painPoints = Object.assign({},this.state.painPoints);
      painPoints[point].selected = !painPoints[point].selected;
      this.setState({painPoints})
    }
  }
  returnGrid() {
    let grid = []
    let tempRow = [];
    for (let i = 0, len = 400 / 30; i < len; i++) {
      for (let j = 0, len = 600 / 30; j < len; j++) {
        let bgColor = !this.state.painPoints[i+'-'+j]? 'rgba(0,0,0,0)': (this.state.painPoints[i+'-'+j].selected? 'rgba(200,0,0,0.4)' : 'rgba(0,0,0,0.2)');
        let bordRadius = !this.state.painPoints[i+'-'+j]? 'rgba(0,0,0,0)': (this.state.painPoints[i+'-'+j].selected? 'rgba(200,0,0,0.4)' : 'rgba(0,0,0,0.2)');
        tempRow.push(
            <View key={i + '-' + j} style={[{
              width: 30,
              height: 30,
              borderRadius: 50,
            },{backgroundColor: bgColor}]}>
              {this.state.painPoints[i+'-'+j]? (<TouchableOpacity style={{height: '100%', width: '100%'}} onPress={() => this.selectPainPoint(i+'-'+j)}>
              </TouchableOpacity>):
              null
            }
            </View>
        )
      }
      grid.push(<View key={i}>{tempRow}</View>);
      tempRow=[];
    }

  return grid
}
render() {
  return (
    <View style={{
      flex: 1,
      // backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ImageBackground source={{
        uri: 'https://raw.githubusercontent.com/wja123/arthritishack/master/src/assets/Homonculus/joint_homunculus_labeled.001.jpeg'
      }} style={{
        width: 400,
        height: 600
      }} imageStyle={{
        resizeMode: 'contain'
      }}>
        <View style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          margin: 0,
          padding: 0
        }}>
          {this.returnGrid()}
        </View>
      </ImageBackground>
    </View>
  )
}
}
