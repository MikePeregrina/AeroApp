import { router } from "expo-router";
import React from "react";
import {
  Text,
  Image,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
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
        Siguiente
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
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#000000",
                  borderRadius: 20,
                  marginLeft: "auto",
                  marginTop: 15,
                  marginRight: 20,
                }}
                onPress={() => setModalVisible(false)}
              ></TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <Text style={styles.title}>¡Hey!</Text>
              <Text style={{ marginVertical: 5 }}>
                Primero debes iniciar sesion
              </Text>
            </View>
            <View style={styles.imgContent}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../../assets/login/loginFirst.png")}
              />
            </View>
            <View
              style={{
                margin: "auto",
              }}
            >
              <Button
                style={{
                  width: 150,
                  borderRadius: 20,
                  backgroundColor: "#FAC400",
                }}
                labelStyle={{ color: "#000000" }}
                onPress={handleNavigation}
              >
                Iniciar Sesion
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
    width: "75%",
    height: "51%",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    color: "#4F7CAC",
    fontWeight: "bold",
  },
  buttons: {
    width: "100%",
    marginVertical: 20,
    borderColor: "#009dff",
    backgroundColor: "#2257ff",
  },
  buttonText: {
    fontSize: 15,
    color: "#FDFBF6",
  },
  imgContent: {
    width: "100%",
    height: "55%",
  },
});
