import React from 'react';
import { View, Text, Image, Button, SafeAreaView } from 'react-native';

const TechnicianScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Call" onPress={() => {}} />
        <Button title="Chat" onPress={() => {}} />
      </View>
      <View style={styles.mapContainer}>
        {
        /* Google Map View */
      }
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Current Location: New York</Text>
        <Text style={styles.locationText}>Technician Location: Los Angeles</Text>
        <Text style={styles.locationText}>From: Los Angeles</Text>
        <Text style={styles.locationText}>To: New York</Text>
      </View>
      <Text style={styles.requestText}>Request has been officially submitted</Text>
      <Button title="Manage Request" onPress={() => {}} />
      <Text style={styles.detailsText}>Request Details:</Text>
      {
      /* Display request details */
    }
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  mapContainer: {
    height: 200,
    backgroundColor: '#f2f2f2',
    marginBottom: 20
  },
  locationContainer: {
    marginBottom: 20
  },
  locationText: {
    fontSize: 16,
    marginBottom: 5
  },
  requestText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  detailsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
};
export default TechnicianScreen;