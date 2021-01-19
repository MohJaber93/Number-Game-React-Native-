import React from "react";
import { View, Image, Alert, StyleSheet } from "react-native";
import { NumberContainer, Card, MainButton, Title } from "../components";
import { Ionicons } from "@expo/vector-icons";
import generateRandomBetween from "../helpers/generateRandomBetween";

const GameScreen = ({ userChoice, endGameHandler }) => {
  const [currentGuess, setCurrentGuess] = React.useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [roundsNumber, setRoundsNumber] = React.useState(0);
  const currentLow = React.useRef(1);
  const currentHigh = React.useRef(100);

  React.useEffect(() => {
    if (userChoice === currentGuess) {
      endGameHandler(roundsNumber);
    }
  }, [userChoice, currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You Know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuessedNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuessedNumber);
    setRoundsNumber((prevRoundsNum) => prevRoundsNum + 1);
  };

  return (
    <View style={styles.screen}>
      <Image
        source={{
          uri:
            "https://image.freepik.com/free-vector/flat-thinking-concept_23-2148163823.jpg",
        }}
        style={styles.image}
      />
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} color="#fff" />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color="#fff" />
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  title: {
    marginVertical: 10,
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    maxWidth: "80%",
    height: 100,
    alignItems: "center",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default GameScreen;
