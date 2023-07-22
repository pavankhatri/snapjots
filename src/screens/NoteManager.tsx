import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

import Button from '../components/common/Button';
import Header from '../components/common/Header';

import {NoteCreate} from '../assets';
import {styles} from '../styles/NoteManager';
import ErrorMessage from '../components/common/ErrorMessage';
import {deleteData, getData, setData} from '../services/StorageService';
import {NotesData, Props} from '../types';

const NoteManager = ({route, navigation}: Props) => {
  const {
    control,
    handleSubmit,
    register,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      notesTitle: '',
      notesDescription: '',
    },
  });

  const onSubmit = async (data: NotesData) => {
    if (route.params?.notesTitle) {
      // Retrieve the entire list of notes from AsyncStorage
      const existingNotes = await getData('@snapjots:Notes');

      if (existingNotes) {
        // Find the index of the note to be edited in the existing notes array
        const editIndex = existingNotes.findIndex(
          (note: NotesData) => note.notesTitle === route.params.notesTitle,
        );

        if (editIndex !== -1) {
          // Create a new updated note with the edited data
          const updatedNote = {
            ...route.params, // Existing note data
            notesTitle: data.notesTitle, // Update notesTitle with new value
            notesDescription: data.notesDescription, // Update notesDescription with new value
          };
          // Update the note in the existing notes array
          existingNotes[editIndex] = updatedNote;

          // Update the entire list of notes in AsyncStorage
          const success = await deleteData('@snapjots:Notes', existingNotes);

          if (success) {
            Alert.alert('Success', 'Note updated successfully!');
            navigation.goBack(); // Go back to NoteGallery after editing
          } else {
            Alert.alert('Error', 'Failed to update note.');
          }
        } else {
          Alert.alert('Error', 'Note not found in the list.');
        }
      } else {
        Alert.alert('Error', 'Failed to retrieve existing notes.');
      }
    } else {
      const success = await setData('@snapjots:Notes', data);
      if (success) {
        Alert.alert('Success', 'Data stored successfully!', [
          {
            text: 'OK',
            style: 'destructive',
            onPress: () => navigation.goBack(),
          },
        ]);
        // setTimeout Added For IOS
        setTimeout(() => {
          reset({
            notesTitle: '',
            notesDescription: '',
          });
        }, 2000); 
      } else {
        Alert.alert('Error', 'Failed to store data.');
      }
    }
  };

  useEffect(() => {
    // Reset the form when navigating back to NoteManager
    const unsubscribe = navigation.addListener('focus', () => {
      reset({
        notesTitle: route.params?.notesTitle || '', // Pre-fill with existing note's title if available
        notesDescription: route.params?.notesDescription || '', // Pre-fill with existing note's description if available
      });
    });
    // Clean up the listener when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, [navigation, reset, route.params]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={NoteCreate}
        resizeMode="cover"
        style={styles.image}>
        <Header title={'Note Manager'} />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View style={styles.secContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  {...register('notesTitle', {
                    required: 'Notes Title is required',
                  })}
                  placeholder="Notes Title"
                  placeholderTextColor="white"
                  multiline={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.textInput}
                />
              )}
              name="notesTitle"
            />
            {errors.notesTitle && (
              <ErrorMessage message={`${errors.notesTitle.message}`} />
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  {...register('notesDescription', {
                    required: 'Notes Description is required',
                  })}
                  placeholder="Notes Description"
                  placeholderTextColor="white"
                  multiline={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.textInput}
                />
              )}
              name="notesDescription"
            />
            {errors.notesDescription && (
              <ErrorMessage message={`${errors.notesDescription.message}`} />
            )}
          </View>
          <Button
            title="Submit"
            onPress={handleSubmit(onSubmit)}
            style={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default NoteManager;
