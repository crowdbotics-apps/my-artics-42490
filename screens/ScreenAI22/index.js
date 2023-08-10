import React from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Address Line 1" />
      <TextInput style={styles.input} placeholder="Address Line 2" />
      <TextInput style={styles.input} placeholder="City" />
      <TextInput style={styles.input} placeholder="State" />
      <TextInput style={styles.input} placeholder="Zip" />
      <TextInput style={styles.input} placeholder="Country" />

      <Text style={styles.title}>Payment Information</Text>
      <TextInput style={styles.input} placeholder="Card Number" />
      <TextInput style={styles.input} placeholder="Card Expiration date" />
      <TextInput style={styles.input} placeholder="CVV" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Screen;