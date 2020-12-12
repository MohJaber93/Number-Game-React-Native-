import React from "react";
import { View, Modal, StyleSheet } from "react-native";

const CustomModal = ({ modalVisible, setModalVisible, style, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // when use press back button on android or menu button on ios
        setModalVisible(false);
      }}
    >
      <View style={styles.fullScreenView}>
        <View style={{ ...styles.modalView, ...style }}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  fullScreenView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CustomModal;
