import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ProScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Switching to Pro</Text>
      </View>
      <Text style={styles.description}>Simple logo animation</Text>
      <Text style={styles.redirect}>User would be redirected to the Pro Home screen</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10
  },
  redirect: {
    fontSize: 16,
    color: '#999'
  }
});
export default ProScreen;