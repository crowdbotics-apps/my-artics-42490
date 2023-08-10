import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Set Password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Select User Role</Text>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownOption}>Customers</Text>
          <Text style={styles.dropdownOption}>Drivers</Text>
          <Text style={styles.dropdownOption}>Service Providers/Pro (Mechanics)</Text>
        </View>
      </View>
      <Button title="Sign Up" onPress={() => {}} />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
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
    marginBottom: 10,
    paddingHorizontal: 10
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 10
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 5
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  dropdownOption: {
    paddingVertical: 10
  },
  loginButton: {
    marginTop: 20
  },
  loginButtonText: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
};
export default SignUpScreen;