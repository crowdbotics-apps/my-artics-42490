import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={() => {}} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nunc id aliquet tincidunt, nunc nunc tincidunt nunc, ac
          lacinia nunc nunc auctor nunc. Nullam consectetur, nunc id aliquet
          tincidunt, nunc nunc tincidunt nunc, ac lacinia nunc nunc auctor nunc.
          Nullam consectetur, nunc id aliquet tincidunt, nunc nunc tincidunt
          nunc, ac lacinia nunc nunc auctor nunc.
        </Text>
        <Text style={styles.description}>
          Nullam consectetur, nunc id aliquet tincidunt, nunc nunc tincidunt
          nunc, ac lacinia nunc nunc auctor nunc. Nullam consectetur, nunc id
          aliquet tincidunt, nunc nunc tincidunt nunc, ac lacinia nunc nunc
          auctor nunc. Nullam consectetur, nunc id aliquet tincidunt, nunc nunc
          tincidunt nunc, ac lacinia nunc nunc auctor nunc.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    padding: 16
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    marginBottom: 24
  }
};
export default PrivacyPolicyScreen;