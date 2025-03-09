import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export const Table1 = () => (
  <ScrollView style={styles.listingContainer}>
    {Array.from({ length: 15 }).map((_, index) => (
      <ListingItem key={index} />
    ))}
  </ScrollView>
);

export const Table2 = () => (
  <ScrollView style={styles.listingContainer}>
    {Array.from({ length: 15 }).map((_, index) => (
      <View key={index} style={styles.row}>
        <ListingItemSquare />
        <ListingItemSquare />
      </View>
    ))}
  </ScrollView>
);

export const Table3 = () => (
  <ScrollView style={styles.listingContainer}>
    {Array.from({ length: 15 }).map((_, index) => (
      <ListingItem key={index} />
    ))}
  </ScrollView>
);

export const Table4 = () => (
  <ScrollView style={styles.listingContainer}>
    {Array.from({ length: 15 }).map((_, index) => (
      <ListingItem key={index} />
    ))}
  </ScrollView>
);

const ListingItem = () => (
  <View style={styles.listingItem}>
    <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>Job Title</Text>
      <Text style={styles.subtitle}>Company Name</Text>
      <Text style={styles.description}>Job Description</Text>
    </View>
  </View>
);

const ListingItemVertical = () => (
  <View style={styles.listingItemVertical}>
    <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.image} />
    <Text style={styles.title}>Job Title</Text>
    <Text style={styles.subtitle}>Company Name</Text>
    <Text style={styles.description}>Job Description</Text>
  </View>
);

const ListingItemSquare = () => (
  <View style={styles.listingItemSquare}>
    <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.image} />
    <Text style={styles.title}>Job Title</Text>
    <Text style={styles.subtitle}>Company Name</Text>
    <Text style={styles.description}>Job Description</Text>
  </View>
);

const ListingItemDifferent = () => (
  <View style={styles.listingItemDifferent}>
    <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.imageDifferent} />
    <View style={styles.textContainer}>
      <Text style={styles.titleDifferent}>Job Title</Text>
      <Text style={styles.subtitleDifferent}>Company Name</Text>
      <Text style={styles.descriptionDifferent}>Job Description</Text>
    </View>
  </View>
);

const ListingItemUnique = () => (
  <View style={styles.listingItemUnique}>
    <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.imageUnique} />
    <View style={styles.textContainer}>
      <Text style={styles.titleUnique}>Job Title</Text>
      <Text style={styles.subtitleUnique}>Company Name</Text>
      <Text style={styles.descriptionUnique}>Job Description</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  listingContainer: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  listingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  listingItemVertical: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  listingItemSquare: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  listingItemDifferent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  listingItemUnique: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#e0f7fa',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  imageDifferent: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  imageUnique: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
    borderColor: 'blue',
    borderWidth: 1,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 12,
    color: '#999',
  },
  titleDifferent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  subtitleDifferent: {
    fontSize: 16,
    color: '#777',
  },
  descriptionDifferent: {
    fontSize: 14,
    color: '#aaa',
  },
  titleUnique: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005662',
  },
  subtitleUnique: {
    fontSize: 18,
    color: '#00796b',
  },
  descriptionUnique: {
    fontSize: 16,
    color: '#004d40',
  },
});
