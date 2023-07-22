import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    margin: 16,
    width: '40%',
    height: '8%',
    alignSelf: 'center',
    backgroundColor: '#5261AF',
    borderRadius: 25,
  },
  buttonTextStyle: {
    fontSize: 18,
  },
  textInput: {
    paddingTop: 20,
    padding: 20,
    alignContent: 'center',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#5261AF',
    borderRadius: 25,
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
