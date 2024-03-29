import { router } from "expo-router";
import React from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export const ModalLogin = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleNavigation = () => {
    setModalVisible(false);
    router.navigate("/screen/login/LoginScreen");
  };

  return (
    <>
      <Button
        style={styles.buttons}
        labelStyle={styles.buttonText}
        onPress={handleOpenModal}
      >
        Clase Muestra
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>
              Inicia sesion para llevarte este curso
            </Text>
            <View
              style={{
                flexDirection: "row-reverse",
                marginLeft: "auto",
              }}
            >
              <Button
                style={{ width: "auto", borderRadius: 10 }}
                labelStyle={{ color: "#000000" }}
                onPress={handleNavigation}
              >
                Iniciar Sesion
              </Button>
              <Button
                style={{ width: "auto", borderRadius: 10, marginLeft: "auto" }}
                labelStyle={{ color: "#000000" }}
                onPress={() => setModalVisible(false)}
              >
                Cerrar
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    marginHorizontal: 20,
    width: "85%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    elevation: 5,
  },
  title: {
    marginLeft: 5,
    marginRight: "auto",
    paddingVertical: 20,
  },
  buttons: {
    width: "80%",
    marginVertical: 10,
    borderColor: "#009dff",
    backgroundColor: "#ff8c00",
  },
  buttonText: {
    fontSize: 15,
    color: "#FDFBF6",
  },
});
