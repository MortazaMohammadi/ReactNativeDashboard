import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Picker } from '@react-native-picker/picker';

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [selectedValue, setSelectedValue] = useState("java");
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const pickProfileImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        setSelectedFile({
          name: result.name,
          uri: result.uri,
          mimeType: result.mimeType
        });
      }
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };

  const handleFilePress = async () => {
    if (selectedFile?.uri) {
      try {
        await Linking.openURL(selectedFile.uri);
      } catch (error) {
        console.log('Error opening file:', error);
      }
    }
  };

  const openFile = async (fileUri, fileType) => {
    try {
      await Linking.openURL(fileUri);
    } catch (error) {
      console.log('Error opening file:', error);
    }
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../assets/profile.jpg')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIcon} onPress={pickProfileImage}>
            <Ionicons name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.professionalService}>Software Engineer</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color="#ffd700" />
          <Ionicons name="star" size={18} color="#ffd700" />
          <Ionicons name="star" size={18} color="#ffd700" />
          <Ionicons name="star" size={18} color="#ffd700" />
          <Ionicons name="star-outline" size={18} color="#ffd700" />
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('professionalProfile')}>
          <Text style={styles.section_title}>Professional Profile</Text>
          <Ionicons name={activeSection === 'professionalProfile' ? "remove-circle-outline" : "add-circle-outline"} size={24} color="#000" />
        </TouchableOpacity>
        {activeSection === 'professionalProfile' && (
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />
            <Text style={styles.label}>Phone</Text>
            <TextInput style={styles.input} placeholder="Enter your Phone Number" />
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} placeholder="Enter your Address" />
            <Text style={styles.label}>Number</Text>
            <TextInput style={styles.input} placeholder="Enter a number" keyboardType="numeric" />
            <Text style={styles.label}>Dropdown</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <Text style={styles.label}>File Input</Text>
            <TouchableOpacity style={styles.fileInput} onPress={pickFile}>
              <Text style={styles.fileInputText}>
                {selectedFile ? 'Change File' : 'Choose File'}
              </Text>
            </TouchableOpacity>
            {selectedFile && (
              <TouchableOpacity 
                style={styles.selectedFileContainer}
                onPress={handleFilePress}
              >
                <Ionicons 
                  name={selectedFile.mimeType?.includes('image') ? 'image' : 'document-text'} 
                  size={24} 
                  color="#666"
                />
                <Text style={styles.selectedFileText}>{selectedFile.name}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('contactInfo')}>
          <Text style={styles.section_title}>Contact Information</Text>
          <Ionicons name={activeSection === 'contactInfo' ? "remove-circle-outline" : "add-circle-outline"} size={24} color="#000" />
        </TouchableOpacity>
        {activeSection === 'contactInfo' && (
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />
            <Text style={styles.label}>Phone</Text>
            <TextInput style={styles.input} placeholder="Enter your Phone Number" />
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} placeholder="Enter your Address" />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('additionalInfo')}>
          <Text style={styles.section_title}>Additional Information</Text>
          <Ionicons name={activeSection === 'additionalInfo' ? "remove-circle-outline" : "add-circle-outline"} size={24} color="#000" />
        </TouchableOpacity>
        {activeSection === 'additionalInfo' && (
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />
            <Text style={styles.label}>Phone</Text>
            <TextInput style={styles.input} placeholder="Enter your Phone Number" />
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} placeholder="Enter your Address" />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    backgroundColor: '#b39dd4',
    alignItems: 'center',
    padding: 20,
    borderRadius: 0,
    marginBottom: 0,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 0,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#fff',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor:'black',
    borderRadius: 12,
    padding: 3,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  professionalService: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 20,
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  section_title:{
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  formGroup: {
    marginTop: 10,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
    paddingTop: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    opacity: 0.6,
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
  },
  pickerContainer: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  fileInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  fileInputText: {
    color: '#666',
  },
  selectedFileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedFileText: {
    marginLeft: 10,
    color: '#444',
    fontSize: 14,
    flex: 1,
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: '#b39dd4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    minWidth: 120,
    shadowColor: '#b39dd4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  submitButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
