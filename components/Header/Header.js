import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
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
    fontSize: 18,
    color: "#000",
  },
});

export default Header;
