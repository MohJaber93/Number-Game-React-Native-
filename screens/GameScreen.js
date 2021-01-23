import React from "react";
import { View, Image, Alert, StyleSheet, ScrollView } from "react-native";
import {
  NumberContainer,
  Card,
  MainButton,
  Title,
  ParagraphText,
} from "../components";
import { Ionicons } from "@expo/vector-icons";
import generateRandomBetween from "../helpers/generateRandomBetween";

const renderListItem = (value, numOfRounds) => (
  <Card key={value} style={styles.listItem}>
    <ParagraphText>{value}</ParagraphText>
    <ParagraphText>#{numOfRounds}</ParagraphText>
  </Card>
);

const GameScreen = ({ userChoice, endGameHandler }) => {
  const firstGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = React.useState(firstGuess);
  console.log(firstGuess, typeof firstGuess);
  const [rounds, setRounds] = React.useState([firstGuess]);
  const currentLow = React.useRef(1);
  const currentHigh = React.useRef(100);

  React.useEffect(() => {
    if (userChoice === currentGuess) {
      endGameHandler(rounds.length);
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
      currentLow.current = currentGuess + 1;
    }
    const nextGuessedNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuessedNumber);
    setRounds((prevRounds) => [nextGuessedNumber, ...prevRounds]);
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
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {rounds.map((round, index) =>
            renderListItem(round, rounds.length - index)
          )}
        </ScrollView>
      </View>
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
  listContainer: {
    marginVertical: 10,
    width: "50%",
    flex: 1,
  },
  list: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  listItem: {
    width: "93%",
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GameScreen;
