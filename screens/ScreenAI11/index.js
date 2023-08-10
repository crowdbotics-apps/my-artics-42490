import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';

const MapScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        {
        /* Google Map View */
      }
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.mapImage} />
        {
        /* Current location marker */
      }
        <View style={styles.currentLocationMarker} />
        {
        /* Technician location marker */
      }
        <View style={styles.technicianLocationMarker} />
      </View>
      <View style={styles.optionsContainer}>
        {
        /* Zoom in and zoom out buttons */
      }
        <View style={styles.zoomButtonsContainer}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.zoomButton} />
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.zoomButton} />
        </View>
        {
        /* Notification and Save icons */
      }
        <View style={styles.iconsContainer}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.icon} />
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.icon} />
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapImage: {
    width: '100%',
    height: '100%'
  },
  currentLocationMarker: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    top: '50%',
    left: '50%',
    transform: [{
      translateX: -10
    }, {
      translateY: -10
    }]
  },
  technicianLocationMarker: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    top: '40%',
    left: '60%',
    transform: [{
      translateX: -10
    }, {
      translateY: -10
    }]
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  zoomButtonsContainer: {
    flexDirection: 'row'
  },
  zoomButton: {
    width: 40,
    height: 40,
    marginRight: 8
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 8
  }
});
export default MapScreen;