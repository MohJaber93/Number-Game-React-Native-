import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { CustomButton, Card, Title, ParagraphText } from "../components";
import Colors from "../constants/colors";

const EndScreen = ({ roundsNumber, userChoice, configureNewGame }) => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/images/success.png")}
        style={styles.image}
      />
      <Card style={styles.card}>
        <Title style={styles.title}>The Game is Over!</Title>
        <ParagraphText style={styles.endResultText}>
          Your phone needed{" "}
          <ParagraphText style={styles.highlight}>{roundsNumber}</ParagraphText>{" "}
          rounds to guess the number{" "}
          <ParagraphText style={styles.highlight}>{userChoice}</ParagraphText>
        </ParagraphText>
        <CustomButton
          title="New Game"
          onPress={configureNewGame}
          style={styles.button}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    marginVertical: 10,
  },
  card: {
    width: 300,
    maxWidth: "80%",
    height: 200,
    alignItems: "center",
  },
  button: {
    width: "50%",
  },
  image: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
  endResultText: {
    textAlign: "center",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});
export default EndScreen;
