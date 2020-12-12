import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.NumContainer}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  NumContainer: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 8,
    borderRadius: 10,
  },
  numText: {
    fontSize: 22,
    color: Colors.primary,
  },
});

export default NumberContainer;
