import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Number of active requests</Text>
      </View>
      <View style={styles.searchBar}>
        {
        /* Search bar component */
      }
      </View>
      <View style={styles.filter}>
        {
        /* Filter icon component */
      }
      </View>
      <View style={styles.requests}>
        <Text style={styles.sectionTitle}>List of requests</Text>
        <View style={styles.requestItem}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.requestImage} />
          <View style={styles.requestDetails}>
            <Text style={styles.requestType}>Job type</Text>
            <Text style={styles.requestTechnician}>Technician</Text>
            <Text style={styles.requestStatus}>Status</Text>
            <Text style={styles.requestDate}>Estimated completion date and time</Text>
            <Text style={styles.requestLocation}>Location</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  searchBar: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  filter: {
    padding: 16,
    alignItems: 'flex-end'
  },
  requests: {
    flex: 1,
    padding: 16
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16
  },
  requestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  requestImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16
  },
  requestDetails: {
    flex: 1
  },
  requestType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  requestTechnician: {
    fontSize: 14,
    marginBottom: 4
  },
  requestStatus: {
    fontSize: 14,
    marginBottom: 4
  },
  requestDate: {
    fontSize: 14,
    marginBottom: 4
  },
  requestLocation: {
    fontSize: 14
  }
});
export default Screen;