import React from 'react';
import {Navigation} from './navigation/Navigation';
import {SafeAreaView} from 'react-native';
import {commonStyles} from './styles/CommonStyles';

const App = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
