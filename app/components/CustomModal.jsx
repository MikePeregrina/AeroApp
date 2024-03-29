import { router } from "expo-router";
import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { formatDate, formatTime } from "./calendario/FormatoDefechas";

const CustomModal = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(false);
      router.navigate({
        pathname: "/screen/comprarcurso/MuestraMentor",
        params: props,
      });
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        labelStyle={{ color: "#ffffff" }}
        onPress={handleOpenModal}
      >
        Continuar
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
            <View style={{ width: 100, height: 100, marginBottom: 10 }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/images/calendar.webp")}
              />
            </View>
            <Text style={styles.modalTitle}>CONFIRMACION DE FECHAS</Text>
            <Text style={styles.dateText}>Tu curso inicia el dia: </Text>
            <Text style={styles.dateText}>
              {formatDate(props.fecha)} a las {formatTime(props.hora)} hrs
            </Text>
            <View style={styles.buttonsContainer}>
              <Button
                style={{ width: 110 }}
                labelStyle={{ color: "#FFFFFF" }}
                contentStyle={{ backgroundColor: "#34da50" }}
                onPress={handleConfirm}
              >
                Confirmar
              </Button>
              <Button
                labelStyle={{ color: "#FFFFFF" }}
                contentStyle={{ backgroundColor: "#ff0000" }}
                onPress={() => setModalVisible(false)}
              >
                Cambiar Fecha
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      {loading && (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    backgroundColor: "#ff7800",
    marginVertical: 50,
    borderRadius: 10,
  },
  buttons: {
    color: "#ffffff",
  },
  modalContent: {
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 15,
  },
});

export default CustomModal;
