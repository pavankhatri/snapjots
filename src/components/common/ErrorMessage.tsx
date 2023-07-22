import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
  return message ? (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Light red background color
    width: '90%',
    height: '7.5%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 8,
    margin: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ErrorMessage;
