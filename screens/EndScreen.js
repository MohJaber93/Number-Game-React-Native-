import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomButton, Card } from "../components";

const EndScreen = ({ roundsNumber, userChoice, configureNewGame }) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.title}>The Game is Over!</Text>
        <Text>Number of rounds: {roundsNumber}</Text>
        <Text>Number was: {userChoice}</Text>
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
    padding: 10,
  },
  title: {
    fontSize: 20,
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
});
export default EndScreen;
