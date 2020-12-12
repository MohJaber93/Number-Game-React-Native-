import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./components";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import EndScreen from "./screens/EndScreen";

export default function App() {
  const [userChoice, setUserChoice] = React.useState();
  const [roundsNumber, setRoundsNumber] = React.useState(0);

  const configureNewGame = () => {
    setUserChoice(null);
    setRoundsNumber(0);
  };

  const startGameHandler = (selctedNumber) => {
    setUserChoice(selctedNumber);
  };

  const endGameHandler = (roundNum) => {
    setRoundsNumber(roundNum);
  };
  let content = <StartScreen startGameHandler={startGameHandler} />;

  if (userChoice && roundsNumber === 0) {
    content = (
      <GameScreen userChoice={userChoice} endGameHandler={endGameHandler} />
    );
  }

  if (roundsNumber && roundsNumber > 0) {
    content = (
      <EndScreen
        userChoice={userChoice}
        roundsNumber={roundsNumber}
        configureNewGame={configureNewGame}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
