import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './screens/Profile';
import AvailableJobs from './screens/AvailableJobs';
import Dashboard from './screens/Dashboard';
import CurrentJob from './screens/CurrentJob';
import AddJob from './screens/AddJob';
import Listings from './screens/Listings';
import Header from './components/Header';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
   
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="AvailableJobs" component={AvailableJobs} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="CurrentJob" component={CurrentJob} />
        <Drawer.Screen name="AddJob" component={AddJob} />
        <Drawer.Screen name="Listings" component={Listings} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}