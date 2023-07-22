import React, {useEffect, useState} from 'react';
import {View, ImageBackground, FlatList, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/common/Header';
import Button from '../components/common/Button';
import {NoteGalleryImage} from '../assets';
import {styles} from '../styles/NoteGallery';
import {deleteData, getData} from '../services/StorageService';
import {NoteItem} from '../components/common/NoteItem';
import {NotesData} from '../types';

const NoteGallery = () => {
  const navigation = useNavigation();
  const [storedData, setStoredData] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load data from AsyncStorage when the component mounts
    loadData();

    // Add a focus event listener to load data when the screen gains focus
    const unsubscribeFocus = navigation.addListener('focus', () => {
      loadData();
      setSearchQuery('');
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

  const deleteDataFromAsyncStorage = async (data: NotesData) => {
    await deleteData('@snapjots:Notes', data);
  };

  const handleDeleteNote = async (title: NotesData) => {
    const oldData = await getData('@snapjots:Notes');
    let data = oldData.filter((item: any) => item.notesTitle !== title);
    deleteDataFromAsyncStorage(data);
    setStoredData(data);
    setSearchQuery('');
  };

  const handleEditNote = (note: NotesData) => {
    navigation.navigate('NoteManager', note);
  };

  const handleSearch = () => {
    if (!searchQuery) {
      // If search query is empty, load the original data from AsyncStorage
      loadData();
    } else {
      // Filter data based on searchQuery in both notesTitle and notesDescription
      const filteredData = storedData.filter(
        (item: NotesData) =>
          item.notesTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.notesDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
      );
      setStoredData(filteredData);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={NoteGalleryImage}
        resizeMode="cover"
        style={styles.image}>
        <Header title={'Note Gallery'} />
        {storedData?.length !== 0 ? (
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="white"
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
              style={styles.searchInput}
            />
            <Button
              title="Search"
              onPress={handleSearch}
              style={styles.searchButtonStyle}
              buttonTextStyle={styles.searchButtonTextStyle}
            />
          </View>
        ) : null}
        {storedData?.length !== 0 ? (
          <FlatList
            data={storedData}
            renderItem={({item}: any) => (
              <NoteItem
                title={item?.notesTitle}
                description={item?.notesDescription}
                onDelete={handleDeleteNote}
                onEdit={handleEditNote}
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
