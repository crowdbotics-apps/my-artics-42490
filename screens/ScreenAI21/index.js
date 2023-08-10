import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const PaymentScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment Amount</Text>
      <TextInput style={styles.input} placeholder="Enter payment amount" />

      <Text style={styles.title}>Choose a payment option</Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>Select the card</Text>
      </View>

      <Text style={styles.title}>List of added cards</Text>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Card 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Card 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Card 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addCardButton}>
        <Text style={styles.addCardButtonText}>Add a new card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10
  },
  dropdown: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  dropdownText: {
    fontSize: 16
  },
  card: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  cardText: {
    fontSize: 16
  },
  addCardButton: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  addCardButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  payButton: {
    width: '80%',
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  cancelButton: {
    width: '80%',
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default PaymentScreen;