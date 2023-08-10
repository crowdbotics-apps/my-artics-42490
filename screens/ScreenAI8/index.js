import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.summary}>Experienced truck driver</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Driver Information</Text>
          <Text style={styles.detail}>Full Name: John Doe</Text>
          <Text style={styles.detail}>Email: johndoe@example.com</Text>
          <Text style={styles.detail}>Phone: 123-456-7890</Text>
          <Text style={styles.detail}>Driver ID: 123456789</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Truck Details</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add/Edit Truck</Text>
          </TouchableOpacity>
          <View style={styles.truckCard}>
            <Text style={styles.truckMake}>Make: Ford</Text>
            <Text style={styles.truckModel}>Model: F-150</Text>
            <Text style={styles.truckLicense}>License Plate: ABC123</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.truckCard}>
            <Text style={styles.truckMake}>Make: Chevrolet</Text>
            <Text style={styles.truckModel}>Model: Silverado</Text>
            <Text style={styles.truckLicense}>License Plate: XYZ789</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back to Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  userInfo: {
    marginLeft: 16
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  summary: {
    fontSize: 14,
    color: '#888'
  },
  menuButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#ccc'
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  content: {
    flex: 1,
    padding: 16
  },
  section: {
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  detail: {
    fontSize: 16,
    marginBottom: 4
  },
  addButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginBottom: 8
  },
  addButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  truckCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8
  },
  truckMake: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  truckModel: {
    fontSize: 14,
    marginBottom: 4
  },
  truckLicense: {
    fontSize: 14,
    marginBottom: 8
  },
  editButton: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginBottom: 4
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  deleteButton: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: '#ccc'
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  saveButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginBottom: 8
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  backButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#ccc'
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default ProfileScreen;