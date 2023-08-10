import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>List of all requested services</Text>
        {
        /* Render the list of requested services */
      }
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Request details</Text>
        {
        /* Render the request details */
      }
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Date of request</Text>
        {
        /* Render the date of request */
      }
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Service provider details</Text>
        {
        /* Render the service provider details */
      }
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment details</Text>
        {
        /* Render the payment details */
      }
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  section: {
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  }
});
export default Screen;