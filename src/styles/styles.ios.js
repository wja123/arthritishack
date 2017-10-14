import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonContainer: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    backgroundColor: 'lightblue'
  },
  buttonInner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewHeader: {
    height: '15%',
    width: '100%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewHeaderText:{
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%'
  },
  bodyContainer: {
    height: '85%',
    width: '100%',
    flexDirection: 'column',
  },
  likertSectionTitle:{
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  likertHeader:{
    fontSize: 30
  },
  likertScaleContainer:{
    backgroundColor: 'white',
    width: '100%',
    height: '70%'
  },
  likertBar:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  likertButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // backgroundColor: 'orange'
  }
});
