import React, { useState } from 'react';
import { TextInput, Button, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTokenChange = value => {
    setToken(value);
  };

  const handleNewPasswordChange = value => {
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
  };

  const handleSubmit = () => {// Handle submit logic
  };

  const handleResendToken = () => {// Handle resend token logic
  };

  const handleCancel = () => {// Handle cancel logic
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter token" keyboardType="numeric" value={token} onChangeText={handleTokenChange} />
      <Button title="Submit" onPress={handleSubmit} />

      <TextInput style={styles.input} placeholder="Set new password" secureTextEntry value={newPassword} onChangeText={handleNewPasswordChange} />
      <TextInput style={styles.input} placeholder="Confirm new password" secureTextEntry value={confirmPassword} onChangeText={handleConfirmPasswordChange} />
      <Button title="Submit" onPress={handleSubmit} />

      <TouchableOpacity onPress={handleResendToken}>
        <Text style={styles.link}>Re-send token</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCancel}>
        <Text style={styles.link}>Cancel</Text>
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
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10
  }
};
export default Screen;