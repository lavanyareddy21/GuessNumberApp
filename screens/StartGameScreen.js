import {
  Alert,
  useWindowDimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(userEnteredNumber) {
    setEnteredNumber(userEnteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputBtnHandler() {
    const givenNumber = parseInt(enteredNumber);

    if (isNaN(givenNumber) || givenNumber <= 0 || givenNumber > 99) {
      Alert.alert("InValid Number!", "Enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(givenNumber);

    // Keyboard.dismiss();
  }

  const customMarginTop = height < 380 ? 30 : 300;

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[styles.rootContainer, { marginTop: customMarginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <Text style={styles.instructionText}>Enter a Number</Text>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              placeholder="0"
              placeholderTextColor='#9f8686'
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.btnsContainer}>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={confirmInputBtnHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center'
  },
  instructionText: {
    color: "#c7a432",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "open-sans-bold",
  },
  numberInput: {
    height: 50,
    width: 50,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb53f",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    marginBottom: 12,
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
