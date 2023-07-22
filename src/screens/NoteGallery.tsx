import React, {useEffect, useState} from 'react';
import {View, ImageBackground, FlatList, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/common/Header';
import Button from '../components/common/Button';
import {NoteGalleryImage} from '../assets';
import {styles} from '../styles/NoteGallery';
import {getData} from '../services/StorageService';
import {NoteItem} from '../components/common/NoteItem';

const NoteGallery = () => {
  const navigation = useNavigation();

  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    // Load data from AsyncStorage on component mount
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getData('@snapjots:Notes');
    setStoredData(data);
    console.log(data, 'datadatadata');
  };

  const createNewNotes = () => {
    navigation.navigate('NoteManager');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={NoteGalleryImage}
        resizeMode="cover"
        style={styles.image}>
        <Header title={'Note Gallery'} />
        <ScrollView>
          {storedData ? (
            <FlatList
              data={storedData}
              renderItem={({item}: any) => (
                <NoteItem
                  title={item.notesTitle}
                  description={item.notesDescription}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <Text style={styles.noDataFound}>No Data Found</Text>
          )}
        </ScrollView>
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
