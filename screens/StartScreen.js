import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  StyleSheet,
} from "react-native";
import {
  Card,
  CustomButton,
  Input,
  CustomModal,
  NumberContainer,
  MainButton,
} from "../components";
import Colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";

const StartScreen = ({ startGameHandler }) => {
  const [number, setNumber] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);
  const [selectedNumber, setSelectedNumber] = React.useState();

  const handleNumberInput = (inputNumber) => {
    setNumber(inputNumber.replace(/[^0-9]/g, ""));
  };

  const resetNumberInput = () => {
    setNumber("");
    setConfirmed(false);
  };

  const confirmNumber = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetNumberInput,
          },
        ]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setNumber("");
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <Text style={{ ...styles.title, ...defaultStyles.titleText }}>
            Start a New Game!
          </Text>
          <Card style={styles.card}>
            <Text style={defaultStyles.paragraphText}>Select a Number</Text>
            <Input
              style={styles.input}
              keyboardType="number-pad"
              autoCapitalize="none"
              maxLength={2}
              autoCorrect={false}
              onChangeText={handleNumberInput}
              value={number}
            />
            <View style={styles.buttonsContainer}>
              <CustomButton
                title="Submit"
                color={Colors.primary}
                style={styles.button}
                onPress={confirmNumber}
              />
              <CustomButton
                title="Reset"
                color={Colors.secondary}
                style={styles.button}
                onPress={resetNumberInput}
              />
            </View>
          </Card>
        </View>
      </TouchableWithoutFeedback>
      {confirmed && (
        <CustomModal
          modalVisible={confirmed}
          setModalVisible={setConfirmed}
          style={styles.modal}
        >
          <Text style={defaultStyles.paragraphText}>You selected</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <MainButton onPress={() => startGameHandler(selectedNumber)}>
            Start Game
          </MainButton>
        </CustomModal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  card: {
    marginTop: 10,
    width: 300,
    maxWidth: "80%",
    height: 190,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  button: {
    width: "45%",
  },
  modal: {
    width: "50%",
    height: 170,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 100,
  },
});
export default StartScreen;
