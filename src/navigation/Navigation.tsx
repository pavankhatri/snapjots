import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Welcome from '../screens/WelcomeScreen';
import NoteManager from '../screens/NoteManager';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NoteGallery from '../screens/NoteGallery';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerTransparent: true,
  headerTitle: '',
};

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="NoteGallery" component={NoteGallery} />
          <Stack.Screen name="NoteManager" component={NoteManager} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
