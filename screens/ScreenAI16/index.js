import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Confirm your details before you submit your request</Text>
      <View style={styles.detailsContainer}>
        {
        /* Display all the details of the request */
      }
        <Text style={styles.detailsText}>Request details go here</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.editIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Confirm and submit request</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  detailsContainer: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  detailsText: {
    fontSize: 16,
    color: '#333'
  },
  editButton: {
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  editIcon: {
    width: 20,
    height: 20
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default Screen;