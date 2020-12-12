import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.cardContainer, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    shadowColor: "black",
    padding: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Card;
