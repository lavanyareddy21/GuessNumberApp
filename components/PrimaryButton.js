import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnercontainer, styles.onBtnPress]
            : styles.btnInnercontainer
        }
        onPress={onPress}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 24,
    margin: 3,
  },
  btnInnercontainer: {
    backgroundColor: "#470325",
    padding: 10,
    marginBottom: 5,
    borderRadius: 24,
  },
  btnText: {
    color: "antiquewhite",
    fontWeight: "700",
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  onBtnPress: {
    opacity: 0.55,
  },
});
