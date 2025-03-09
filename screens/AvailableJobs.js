import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Table1, Table2, Table3, Table4 } from '../components/Tables';

export default function AvailableJobs() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Table 1");

  const renderContent = () => {
    switch (activeTab) {
      case "Table 1":
        return <Table1 />;
      case "Table 2":
        return <Table2 />;
      case "Table 3":
        return <Table3 />;
      case "Table 4":
        return <Table4 />;
      default:
        return <Table1 />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
        <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
          <Ionicons name="filter" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.tablesContainer}>
        <TouchableOpacity style={styles.table} onPress={() => setActiveTab("Table 1")}>
          <Text style={styles.tableText}>Table 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.table} onPress={() => setActiveTab("Table 2")}>
          <Text style={styles.tableText}>Table 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.table} onPress={() => setActiveTab("Table 3")}>
          <Text style={styles.tableText}>Table 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.table} onPress={() => setActiveTab("Table 4")}>
          <Text style={styles.tableText}>Table 4</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {renderContent()}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Options</Text>
            <View style={styles.modalFormGroup}>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Option 1" value="option1" />
                  <Picker.Item label="Option 2" value="option2" />
                </Picker>
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Option 1" value="option1" />
                  <Picker.Item label="Option 2" value="option2" />
                </Picker>
              </View>
            </View>
            <View style={styles.modalFormGroup}>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Option 1" value="option1" />
                  <Picker.Item label="Option 2" value="option2" />
                </Picker>
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Option 1" value="option1" />
                  <Picker.Item label="Option 2" value="option2" />
                </Picker>
              </View>
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalButtonText}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(254, 255, 255)',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'rgb(31, 23, 42)',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  tablesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  table: {
    width: 80,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableText: {
    color: 'black',
  },
  scrollView: {
    flex: 1,
  },
  listingContainer: {
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalFormGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  pickerContainer: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
