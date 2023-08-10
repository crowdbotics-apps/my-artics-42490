import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Other Trucking Services</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.image} />
        <Text style={styles.description}>
          We provide a wide range of trucking services to meet your transportation needs.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2022 Other Trucking Services. All rights reserved.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#f5f5f5"
  },
  footerText: {
    fontSize: 12,
    color: "#888"
  }
});
export default Screen;