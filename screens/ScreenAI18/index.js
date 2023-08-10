import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>We have found a match</Text>
      <Text style={styles.subtitle}>Technician is X min away</Text>
      <View style={styles.mapContainer}>
        {
        /* Google map view */
      }
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.mapImage} />
        {
        /* Display current location of the user and the location of the technician */
      }
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Current Location</Text>
          <Text style={styles.locationText}>Technician Location</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        {
        /* From and to Location of technician */
      }
        <Text style={styles.detailsText}>From: Technician Location</Text>
        <Text style={styles.detailsText}>To: Destination Location</Text>
        {
        /* Buffer period */
      }
        <Text style={styles.bufferText}>You have 20 sec to double check your request</Text>
        {
        /* Details about the buffer period */
      }
        <Text style={styles.bufferDetailsText}>Details about the buffer period</Text>
        {
        /* Skip buffer period (Button) */
      }
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Skip buffer period</Text>
        </TouchableOpacity>
        {
        /* Update request (Button) */
      }
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update request</Text>
        </TouchableOpacity>
        {
        /* Request details */
      }
        <Text style={styles.detailsText}>Request details</Text>
        {
        /* All the details of the service request */
      }
        <Text style={styles.detailsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc. Sed auctor, nunc id aliquet lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.</Text>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20
  },
  mapContainer: {
    flex: 1,
    marginBottom: 20
  },
  mapImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10
  },
  locationContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10
  },
  locationText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5
  },
  detailsContainer: {
    marginBottom: 20
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 10
  },
  bufferText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  bufferDetailsText: {
    fontSize: 14,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};
export default Screen;