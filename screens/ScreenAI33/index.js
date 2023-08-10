import React, { useState } from 'react';
import { View, Text, SafeAreaView, Switch, TouchableOpacity } from 'react-native';

const Screen = () => {
  const [notifications, setNotifications] = useState(false);
  const [pushNotification, setPushNotification] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);
  const [smsNotification, setSmsNotification] = useState(false);

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const togglePushNotification = () => {
    setPushNotification(!pushNotification);
  };

  const toggleEmailNotification = () => {
    setEmailNotification(!emailNotification);
  };

  const toggleSmsNotification = () => {
    setSmsNotification(!smsNotification);
  };

  const handlePrivacyPolicy = () => {// Handle privacy policy button press
  };

  const handleTermsAndConditions = () => {// Handle terms and conditions button press
  };

  const handleChangePassword = () => {// Handle change password button press
  };

  const handleDeleteAccount = () => {// Handle delete account button press
  };

  const handleLogout = () => {// Handle logout button press
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Switch value={notifications} onValueChange={toggleNotifications} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Push Notification</Text>
        <Switch value={pushNotification} onValueChange={togglePushNotification} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Email Notifications</Text>
        <Switch value={emailNotification} onValueChange={toggleEmailNotification} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SMS Notifications</Text>
        <Switch value={smsNotification} onValueChange={toggleSmsNotification} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePrivacyPolicy}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleTermsAndConditions}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log out</Text>
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
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default Screen;