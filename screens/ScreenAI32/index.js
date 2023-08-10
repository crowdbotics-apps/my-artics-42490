import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, SafeAreaView } from 'react-native';

const Screen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [invitedUsers, setInvitedUsers] = useState([]);

  const handleInvite = () => {
    const newUser = {
      name,
      email
    };
    setInvitedUsers([...invitedUsers, newUser]);
    setName('');
    setEmail('');
  };

  const renderUser = ({
    item
  }) => <View style={_styles.aNeLuTnV}>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
    </View>;

  return <SafeAreaView style={_styles.iWtIdmfd}>
      <Text style={_styles.FLcCoVCp}>Refer a Driver/Pro</Text>
      <TextInput style={_styles.FCyzYcHa} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={_styles.BFfJXCZc} placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Invite" onPress={handleInvite} />
      <Text style={_styles.mrOpIVzu}>List of all Invited users</Text>
      <FlatList data={invitedUsers} renderItem={renderUser} keyExtractor={(item, index) => index.toString()} />
    </SafeAreaView>;
};

export default Screen;

const _styles = StyleSheet.create({
  aNeLuTnV: {
    marginBottom: 10
  },
  iWtIdmfd: {
    flex: 1,
    padding: 16
  },
  FLcCoVCp: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  FCyzYcHa: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16
  },
  BFfJXCZc: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16
  },
  mrOpIVzu: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16
  }
});