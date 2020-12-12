import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./components";
import StartScreen from "./screens/StartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
