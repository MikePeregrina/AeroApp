import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";

const ModalConfirmacion = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);

  console.log("props de la modal", props);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <Button
        onPress={handleOpenModal}
        labelStyle={{ color: "#ffffff" }}
        style={styles.button1}
      >
        Agendar
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
                source={require("@/assets/images/arrow.png")}
              />
            </View>
            <View style={{ marginVertical: 10, alignItems: "center" }}>
              <Text style={styles.modalTitle}>Confirmacion de Curso</Text>
              <Text style={styles.cursotitle}>
                Haz comprado el siguiente curso:
              </Text>
              <Text style={styles.curso}>Curso HTML</Text>
              <Text style={styles.dateText}>Tu curso inicia el dia: </Text>
              <Text style={styles.time}>24/02/24 a las 15:00 hrs </Text>
              <Text style={styles.mentorTitle}>
                Se le notificaran al mentor agendado
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                labelStyle={{ color: "#ffffff" }}
                contentStyle={{ backgroundColor: "#34b233" }}
              >
                Confrimar
              </Button>
              <Button
                labelStyle={{ color: "#FFFFFF" }}
                contentStyle={{ backgroundColor: "#ff0000" }}
                onPress={() => setModalVisible(false)}
              >
                Cancelar
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
  cursotitle: {
    fontSize: 17,
    fontWeight: "500",
  },
  curso: {
    marginVertical: 5,
    fontSize: 17,
    fontWeight: "400",
  },
  mentorTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginVertical: 5,
  },
  dateText: {
    marginVertical: 2,
    fontSize: 17,
    fontWeight: "600",
  },
  time: {
    marginVertical: 2,
    fontSize: 17,
    fontWeight: "400",
  },
  button1: {
    width: "90%",
    marginTop: 14,
    borderRadius: 10,
    backgroundColor: "#fa8128",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5,
    padding: 10,
  },
});

export default ModalConfirmacion;
