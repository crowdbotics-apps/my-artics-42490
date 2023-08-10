import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.fullName}>Sender's Full Name</Text>
      </View>
      <View style={styles.conversationContainer}>
        {
        /* Conversation history */
      }
        <Text style={styles.conversationText}>Conversation History</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Write message" placeholderTextColor="#999" />
        <TouchableOpacity style={styles.iconButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  backButton: {
    marginRight: 12
  },
  backButtonText: {
    fontSize: 16,
    color: '#333'
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  conversationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  conversationText: {
    fontSize: 16,
    color: '#999'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 12
  },
  iconButton: {
    marginLeft: 8
  },
  icon: {
    width: 24,
    height: 24
  },
  sendButton: {
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20
  },
  sendButtonText: {
    fontSize: 16,
    color: '#fff'
  }
};
export default Screen;