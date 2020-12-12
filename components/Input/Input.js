import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ style, ...rest }) => {
  return <TextInput {...rest} style={{ ...styles.input, ...style }} />;
};

const styles = StyleSheet.create({
  input: {
    padding: 4,
    borderBottomWidth: 1,
    marginVertical: 10,
    height: 30,
  },
});

export default Input;
