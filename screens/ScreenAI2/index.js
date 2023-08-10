import React, { useEffect } from 'react';
import { Image, StyleSheet, SafeAreaView } from 'react-native';

const SplashScreen = ({
  navigation
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <SafeAreaView style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  }
});
export default SplashScreen;