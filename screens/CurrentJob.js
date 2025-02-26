import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentJob = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Job</Text>
      <Text style={styles.subtitle}>This is the Current Job screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

export default CurrentJob;
