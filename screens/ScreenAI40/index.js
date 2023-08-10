import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Congrats</Text>
        <Text style={styles.subtitle}>Your account has been verified</Text>
        <Text style={styles.description}>Now when you have an account you can do XY2</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.locationText}>Verify location</Text>
        <Text style={styles.proceedText}>Proceed</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  proceedText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
export default Screen;