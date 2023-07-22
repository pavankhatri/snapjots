import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderProps} from '../../types';

const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
