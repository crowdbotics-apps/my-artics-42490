import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';

const Screen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleCurrentPasswordChange = text => {
    setCurrentPassword(text);
    setPasswordError(false);
  };

  const handleNewPasswordChange = text => {
    setNewPassword(text);
    setPasswordError(false);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
    setPasswordMatchError(false);
  };

  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangePassword = () => {
    if (currentPassword !== 'correctpassword') {
      setPasswordError(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    } // Call API to change password


    console.log('Password changed successfully');
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Current Password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} secureTextEntry={!showCurrentPassword} value={currentPassword} onChangeText={handleCurrentPasswordChange} />
        <TouchableOpacity style={styles.toggleButton} onPress={handleToggleCurrentPasswordVisibility}>
          <Text style={styles.toggleButtonText}>
            {showCurrentPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      {passwordError && <Text style={styles.errorText}>Incorrect current password</Text>}

      <Text style={styles.label}>New Password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} secureTextEntry={!showNewPassword} value={newPassword} onChangeText={handleNewPasswordChange} />
        <TouchableOpacity style={styles.toggleButton} onPress={handleToggleNewPasswordVisibility}>
          <Text style={styles.toggleButtonText}>
            {showNewPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      {passwordError && <Text style={styles.errorText}>Password must be at least 8 characters long and contain at least one capital letter, one number, and one special character</Text>}

      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} secureTextEntry={!showConfirmPassword} value={confirmPassword} onChangeText={handleConfirmPasswordChange} />
        <TouchableOpacity style={styles.toggleButton} onPress={handleToggleConfirmPasswordVisibility}>
          <Text style={styles.toggleButtonText}>
            {showConfirmPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      {passwordMatchError && <Text style={styles.errorText}>Passwords do not match</Text>}

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8
  },
  toggleButton: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 4
  },
  toggleButtonText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  errorText: {
    color: 'red',
    marginBottom: 16
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
};
export default Screen;