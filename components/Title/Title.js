import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ children, style }) => (
  <Text style={{ ...styles.title, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});

export default Title;
