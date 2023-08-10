import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>List of Requested Services</Text>
      </View>
      <View style={styles.requestDetails}>
        <Text style={styles.subtitle}>Request Details</Text>
        <Text style={styles.text}>Date of Request: 01/01/2022</Text>
      </View>
      <View style={styles.serviceProviderDetails}>
        <Text style={styles.subtitle}>Service Provider Details</Text>
        <Text style={styles.text}>Name: John Doe</Text>
        <Text style={styles.text}>Phone: 123-456-7890</Text>
        <Text style={styles.text}>Email: john.doe@example.com</Text>
      </View>
      <View style={styles.paymentDetails}>
        <Text style={styles.subtitle}>Payment Details</Text>
        <Text style={styles.text}>Total Amount: $100</Text>
        <Text style={styles.text}>Payment Method: Credit Card</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  header: {
    marginTop: 16,
    marginBottom: 32
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  text: {
    fontSize: 16,
    marginBottom: 4
  },
  requestDetails: {
    marginBottom: 32
  },
  serviceProviderDetails: {
    marginBottom: 32
  },
  paymentDetails: {
    marginBottom: 32
  }
});
export default Screen;