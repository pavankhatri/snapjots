import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
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
    width: '50%',
    height: '7.5%',
    alignSelf: 'center',
    backgroundColor: '#7B27D8',
    borderRadius: 25,
  },
  buttonTextStyle: {
    fontSize: 22,
  },
  noDataFound: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
  },
});
