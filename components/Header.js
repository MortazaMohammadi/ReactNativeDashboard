import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import AvailableJobs from '../screens/AvailableJobs';
import Dashboard from '../screens/Dashboard';
import CurrentJob from '../screens/CurrentJob';
import AddJob from '../screens/AddJob';
import Listings from '../screens/Listings';

const Drawer = createDrawerNavigator();

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings" size={24} color="#fff" />
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://example.com/profile.jpg' }}
            style={styles.profileImage}
          />
        </View>
      </View>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="AvailableJobs" component={AvailableJobs} />
        <Drawer.Screen name="CurrentJob" component={CurrentJob} />
        <Drawer.Screen name="AddJob" component={AddJob} />
        <Drawer.Screen name="Listings" component={Listings} />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  menuButton: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
