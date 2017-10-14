import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'orange'
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
    height: '10%',
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headTextContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyContainer: {
    height: '90%',
    flexDirection: 'column',
    backgroundColor: 'pink'
  }
});
