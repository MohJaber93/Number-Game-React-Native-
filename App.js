import React from "react";
import { StyleSheet, View } from "react-native";
// import AppLoading from "expo-app-loading";
import { Header } from "./components";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import EndScreen from "./screens/EndScreen";
import { useFonts } from "expo-font";

// import fetchFonts from "./helpers/fetchFonts";

export default function App() {
  const [userChoice, setUserChoice] = React.useState();
  const [roundsNumber, setRoundsNumber] = React.useState(0);
  // const [fontLoaded, setFontLoaded] = React.useState(false);
  const [loaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  console.log(loaded, "just test");
  if (!loaded) return null; // maybe return any splash screen

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

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
