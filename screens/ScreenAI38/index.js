import React from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Company Name</Text>
      <TextInput style={styles.input} placeholder="Enter company name" />

      <Text style={styles.title}>Address</Text>
      <TextInput style={styles.input} placeholder="Enter street address" />

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>City</Text>
          <TextInput style={styles.input} placeholder="Enter city" />
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Zip Code</Text>
          <TextInput style={styles.input} placeholder="Enter zip code" />
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>State</Text>
          <TextInput style={styles.input} placeholder="Enter state" />
        </View>
      </View>

      <Text style={styles.title}>Which account verification method would you like to use</Text>
      <Text style={styles.subtitle}>Text</Text>
      <Text style={styles.subtitle}>Email</Text>

      <Button title="Next" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  column: {
    flex: 1,
    marginRight: 8
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8
  }
};
export default Screen;