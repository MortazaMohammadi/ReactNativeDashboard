import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddJob = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Job</Text>
      <Text style={styles.subtitle}>This is the Add Job screen</Text>
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

export default AddJob;
