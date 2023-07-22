import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DeleteIcon, EditIcon} from '../../assets';
import {styles} from '../../styles/NoteItem';

export const NoteItem = ({title, description}: any) => {
  console.log(description, 'description');
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

  return (
    <View style={styles.noteContainer}>
      <View style={styles.secNoteContainer}>
        <Text style={styles.noteTitle}>{title}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => console.log('Edit Functionality add')}>
            <Image source={EditIcon} style={styles.imageContainer} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Edit Functionality add')}>
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
      {getDescriptionText().length > 10 && (
        <TouchableOpacity onPress={toggleExpansion}>
          <Text style={styles.readMoreButton}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
