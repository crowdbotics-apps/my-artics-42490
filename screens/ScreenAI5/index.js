import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

const Screen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email === '') {
      Alert.alert('Error', 'Please enter your registered email');
    } else {
      // Send password reset link to user's email
      // Implement SendGrid API here
      Alert.alert('Success', 'Password reset link sent to your email');
    }
  };

  const handleCancel = () => {
    // Implement cancel action here
    Alert.alert('Cancel', 'Process cancelled');
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput style={styles.input} placeholder="Enter registered email" onChangeText={text => setEmail(text)} value={email} keyboardType="email-address" autoCapitalize="none" />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cancelButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default Screen;