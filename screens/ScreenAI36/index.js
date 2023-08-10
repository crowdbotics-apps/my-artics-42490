import React from 'react';
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileUsername}>@johndoe</Text>
          <Text style={styles.profileTimestamp}>Last message: 2 hours ago</Text>
        </View>
      </View>
      <View style={styles.conversationsContainer}>
        <Text style={styles.conversationsTitle}>My Conversations</Text>
        {
        /* List of conversations */
      }
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#999" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  profileInfo: {
    marginLeft: 10
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileUsername: {
    fontSize: 16,
    color: '#999'
  },
  profileTimestamp: {
    fontSize: 14,
    color: '#999'
  },
  conversationsContainer: {
    marginTop: 20
  },
  conversationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  searchContainer: {
    marginTop: 20
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16
  }
});
export default Screen;