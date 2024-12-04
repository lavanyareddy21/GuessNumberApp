import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 16,
    maxWidth: "80%",
    width: 300,
  },
});
