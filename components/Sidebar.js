import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sidebar() {
  const navigation = useNavigation();

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={() => navigation.navigate('CurrentJob')}>
        <Text style={styles.menuItem}>Current Job</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AvailableJobs')}>
        <Text style={styles.menuItem}>Available Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Listings')}>
        <Text style={styles.menuItem}>Listings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddJob')}>
        <Text style={styles.menuItem}>Add Job</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.menuItem}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 200,
    backgroundColor: '#e0f7fa', // Light blue background color
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#00796b', // Darker blue border color
    position: 'absolute', // Added to make the sidebar hover
    left: 0, // Align to the left side
    top: 0, // Align to the top
    bottom: 0, // Stretch to the bottom
    zIndex: 1000, // Ensure the sidebar overlays on the body
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#004d40', // Even darker blue for menu item borders
    color: '#004d40', // Text color matching the border
  },
});
