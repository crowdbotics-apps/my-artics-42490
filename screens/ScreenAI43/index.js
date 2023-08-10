import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.offerContainer}>
        <TouchableOpacity style={styles.offerButton}>
          <Text style={styles.offerText}>Basic Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.offerButton}>
          <Text style={styles.offerText}>Premium Offer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  offerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  offerButton: {
    backgroundColor: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  offerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
};
export default Screen;