import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const CameraScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Camera Options</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upload from Local Storage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Capture with Camera</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
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
    fontWeight: 'bold'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20
  }
};
export default CameraScreen;