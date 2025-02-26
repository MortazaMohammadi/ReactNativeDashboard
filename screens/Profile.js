import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Picker } from '@react-native-picker/picker';

export default function Profile() {
  const [profileImage, setProfileImage] = useState('/assets/profile.jpg');
  const [selectedValue, setSelectedValue] = useState("java");
  const [selectedFile, setSelectedFile] = useState('');

  const pickProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const pickFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
    });

    if (result.type === 'success') {
      setSelectedFile(result.name);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: profileImage }}
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
        <Text style={styles.section_title}>Professional Profile</Text>

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
            <Text style={styles.fileInputText}>{selectedFile ? selectedFile : "Choose File"}</Text>
          </TouchableOpacity>
          {selectedFile && <Text style={styles.selectedFileText}>{selectedFile}</Text>}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.section_title}>Professional Profile</Text>

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
      </View>

      <View style={styles.section}>
        <Text style={styles.section_title}>Professional Profile</Text>

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
    padding: 20,
    paddingBottom: 50,
    borderRadius: 10,
    marginBottom: 20,
    position: 'relative',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  section_title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formGroup: {
    marginBottom: 0,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    opacity: 0.6,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  selectedFileText: {
    marginTop: 5,
    color: '#666',
  },
  submitButton: {
    position: 'relative',
    width: '40%',
    backgroundColor: '',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#b39dd4',
    marginTop: 10,
    marginTop:5,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
