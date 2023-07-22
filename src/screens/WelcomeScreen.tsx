import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {WelcomeImage} from '../assets';
import {styles} from '../styles/WelcomeScreen';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const navigateToMainScreen = () => {
    navigation.navigate('NoteGallery');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={WelcomeImage}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text} onPress={navigateToMainScreen}>
          Start
        </Text>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
