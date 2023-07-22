import React, {useEffect, useState} from 'react';
import {View, ImageBackground, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/common/Header';
import Button from '../components/common/Button';
import {NoteGalleryImage} from '../assets';
import {styles} from '../styles/NoteGallery';
import {deleteData, getData} from '../services/StorageService';
import {NoteItem} from '../components/common/NoteItem';

const NoteGallery = () => {
  const navigation = useNavigation();

  const [storedData, setStoredData] = useState<any>(null);

  useEffect(() => {
    // Load data from AsyncStorage when the component mounts
    loadData();

    // Add a focus event listener to load data when the screen gains focus
    const unsubscribeFocus = navigation.addListener('focus', () => {
      loadData();
    });
    // Clean up the event listener when the component is unmounted
    return () => {
      unsubscribeFocus();
    };
  }, [navigation]);

  const loadData = async () => {
    const data = await getData('@snapjots:Notes');
    setStoredData(data);
  };

  const createNewNotes = () => {
    navigation.navigate('NoteManager');
  };

  const deleteDataFromAsyncStorage = async (data: any) => {
    await deleteData('@snapjots:Notes', data);
  };

  const handleDeleteNote = (title: any) => {
    let data = storedData.filter((item: any) => item.notesTitle !== title);
    deleteDataFromAsyncStorage(data);
    setStoredData(data);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={NoteGalleryImage}
        resizeMode="cover"
        style={styles.image}>
        <Header title={'Note Gallery'} />
        {storedData ? (
          <FlatList
            data={storedData}
            renderItem={({item}: any) => (
              <NoteItem
                title={item?.notesTitle}
                description={item?.notesDescription}
                onDelete={handleDeleteNote}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.noDataFound}>No Data Found</Text>
        )}
        <Button
          title="Create Notes"
          onPress={createNewNotes}
          style={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
        />
      </ImageBackground>
    </View>
  );
};

export default NoteGallery;
