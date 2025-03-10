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

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="AvailableJobs" component={AvailableJobs} />
          <Drawer.Screen name="CurrentJob" component={CurrentJob} />
          <Drawer.Screen name="AddJob" component={AddJob} />
          <Drawer.Screen name="Listings" component={Listings} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
});
