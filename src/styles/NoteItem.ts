import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  noteContainer: {
    padding: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#8dc23d',
    borderRadius: 25,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  noteDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  readMoreButton: {
    color: 'blue',
    marginTop: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  imageContainer: {
    height: 25,
    width: 25,
    marginHorizontal: 5,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 5,
  },
  secNoteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
