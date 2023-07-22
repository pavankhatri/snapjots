import React from 'react';
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
import { setData } from '../services/StorageService';

interface NotesData {
  notesTitle: string;
  notesDescription: string;
}

const NoteManager = () => {
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
    const success = await setData('@snapjots:Notes', data);
    if (success) {
      Alert.alert('Success', 'Data stored successfully!');
      reset({
        notesTitle: '',
        notesDescription: '',
      });
    } else {
      Alert.alert('Error', 'Failed to store data.');
    }
  };

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
