import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({roundsNumber,userNumber,onStartNewGame,}) {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 380){
    imageSize = 150;
  }
  
  if (height < 400){
    imageSize = 80;
  }

  
  const imageStyle = {
    width : imageSize,
    height : imageSize,
    borderRadius : imageSize / 2
  }



  return (
    <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.ImageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summary}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start Over</PrimaryButton>
    </View>
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: deviceWidth < 350 ? 12 :24,
    justifyContent: "center",
    alignItems: "center",
  },

  ImageContainer: {
    // width: deviceWidth < 360 ? 150 : 250,
    // height: deviceWidth < 360 ? 150 : 250,
    // borderRadius: deviceWidth < 360 ? 75 : 125,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary700,
  },
});
