import React from "react";
import { View, Button, StyleSheet } from "react-native";

const CustomButton = ({ style, width, color, label, ...rest }) => {
  return (
    <View style={{ ...styles.buttonContainer, ...style }}>
      <Button
        {...rest}
        color={color ? color : "#287bf7"}
        accessibilityLabel={label ? label : "button"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },
});

export default CustomButton;
