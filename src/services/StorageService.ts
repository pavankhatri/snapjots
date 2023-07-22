import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to set data in AsyncStorage
export const setData = async (key: string, value: string) => {
  try {
    const existingNotes: any = await AsyncStorage.getItem(key);
    let notesArray;
    if (existingNotes === null) {
      notesArray = [value]; // Create a new array with the single value
    } else {
      notesArray = JSON.parse(existingNotes); // Parse the existing notes into an array
      if (!Array.isArray(notesArray)) {
        notesArray = [notesArray]; // Convert the single value into an array if needed
      }
      notesArray.push(value);
    }
    await AsyncStorage.setItem(key, JSON.stringify(notesArray));
    return true;
  } catch (error) {
    console.error('Error setting data:', error);
    return false;
  }
};

// Function to get data from AsyncStorage
export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
};

// Function to Delete data from AsyncStorage
export const deleteData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
};
