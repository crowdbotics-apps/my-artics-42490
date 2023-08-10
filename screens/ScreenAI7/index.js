import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleBackButton = () => {// Handle back button functionality here
  };

  return <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod, nunc id aliquet tincidunt, nisl nunc
          consectetur nunc, nec tincidunt nunc nunc id mauris. Sed
          ullamcorper, nunc id aliquet tincidunt, nisl nunc consectetur nunc,
          nec tincidunt nunc nunc id mauris.
        </Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={handleCheckbox}>
            {isChecked && <View style={styles.checkboxInner} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#333'
  },
  checkboxLabel: {
    fontSize: 16
  }
});
export default Screen;