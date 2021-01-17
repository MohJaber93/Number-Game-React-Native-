import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { NumberContainer, Card, CustomButton, Title } from "../components";
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
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
        <CustomButton
          title="Lower"
          onPress={() => nextGuessHandler("lower")}
          style={styles.button}
        />
        <CustomButton
          title="Greater"
          onPress={() => nextGuessHandler("greater")}
          style={styles.button}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    maxWidth: "80%",
    height: 100,
    alignItems: "center",
  },
  button: {
    width: "45%",
  },
});

export default GameScreen;
