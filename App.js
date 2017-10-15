import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {styles} from './src/styles/styles'
import HowIFeel from './src/views/HowIFeel'
import {Home} from './src/views/Home'
import Stories from './src/views/Stories'
import PainPoints from './src/components/PainPoints'
<<<<<<< HEAD
import Progress from './src/components/Progress'
import Scoreboard from './src/components/Scoreboard'
=======
import Resources from './src/views/Resources'
>>>>>>> 0c4aefce272f25b1c38b5df6a45629625f45412f

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      view: null
    }
    }
    navView(view){
      this.setState({view})
    }
    viewRender(viewName){
      switch(viewName){
        case 'Home':
          return <Home navView={this.navView.bind(this)}/>
        case 'HOW DO I FEEL':
          return <HowIFeel navView={this.navView.bind(this)}/>
        case 'STORY TIME':
          return <Stories navView={this.navView.bind(this)}/>
        case 'RESOURCES':
          return <Resources navView={this.navView.bind(this)}/>
        default:
          return <Home navView={this.navView.bind(this)}/>
      }
    }
  render() {
    return this.viewRender(this.state.view)
  }
}
