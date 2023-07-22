import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {DeleteIcon, EditIcon} from '../../assets';
import {styles} from '../../styles/NoteItem';

export const NoteItem = ({title, description, onDelete, onEdit}: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const getDescriptionText = () => {
    if (typeof description === 'object') {
      return description.notesDescription;
    }
    return description;
  };

  const handleDeleteNote = () => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive', onPress: () => onDelete(title)},
      ],
      {cancelable: true},
    );
  };

  const handleEditNote = () => {
    const editData = {
      notesTitle: title,
      notesDescription: description,
    };
    onEdit(editData);
  };

  return (
    <View style={styles.noteContainer}>
      <View style={styles.secNoteContainer}>
        <Text style={styles.noteTitle}>{title}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleEditNote}>
            <Image source={EditIcon} style={styles.imageContainer} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDeleteNote}>
            <Image source={DeleteIcon} style={styles.imageContainer} />
          </TouchableOpacity>
        </View>
      </View>
      {isExpanded ? (
        <Text style={styles.noteDescription}>{getDescriptionText()}</Text>
      ) : (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.noteDescription}>
          {getDescriptionText()}
        </Text>
      )}
      {getDescriptionText()?.length > 25 && (
        <TouchableOpacity onPress={toggleExpansion}>
          <Text style={styles.readMoreButton}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
