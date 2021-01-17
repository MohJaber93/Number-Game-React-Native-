import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../Title/Title";
import Colors from "../../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Title style={styles.headerTitle}>{title}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  headerTitle: {
    color: "#000",
  },
});

export default Header;
