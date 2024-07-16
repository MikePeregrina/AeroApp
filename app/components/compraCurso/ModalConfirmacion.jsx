import { fetchData } from "@/app/services/API";
import { showToast } from "@/app/utils/toastUtils";
import { GlobalContext } from "@/context/GlobalProvider";
import React, { useContext, useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import Toast from "react-native-toast-message";

const ModalConfirmacion = ({ hora, props, dia }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data } = useContext(GlobalContext);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const payload = {
    mentorID: props.Mentor_ID,
    hora: hora,
    dia: dia,
    mentorName: props.Mentor,
    cursoName: props.Curso,
    alumnoName: data.nombre,
    correoUsuario: data.correo,
  };

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await fetchData(
        `https://www.widolearn.com/index.php?c=Usuarios&a=agendarCita`,
        { method: "POST", data: JSON.stringify(payload) }
      );
      if (res.success) {
        showToast("success", "En hora Buena ✅", `${res.message}`);
        setTimeout(() => {
          setLoading(false);
          setModalVisible(false);
        }, 3000);
      } else {
        showToast("error", "¡Oh no! ❌ ", `${res.message}`);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Button
        onPress={handleOpenModal}
        labelStyle={{ color: "#0079ff" }}
        style={styles.button1}
      >
        {hora}
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
          <Toast />
          <View style={styles.modalContent}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.tittle}>Master Teach: {props.Mentor}</Text>
              <Text style={styles.subtitles}>Deseas agendar el curso</Text>
              <Text style={styles.span}>{props.Curso}</Text>
              <Text style={styles.subtitles}>
                Para el dia {dia}, a las {hora}
              </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Button
                labelStyle={{ color: "#FFFFFF" }}
                style={styles.buttonConfirmation}
                onPress={fetch}
              >
                {!loading ? (
                  "Agendar Cita"
                ) : (
                  <ActivityIndicator animating={true} color={MD2Colors.white} />
                )}
              </Button>
              <Button
                labelStyle={{ color: "#BA0000" }}
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
    backgroundColor: "white",
    width: "84%",
    borderRadius: 10,
    padding: 30,
  },
  button1: {
    width: "90%",
    marginTop: 14,
    borderRadius: 10,
    backgroundColor: "#e3f3ff",
  },
  tittle: {
    color: "#4F7CAC",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitles: {
    fontSize: 17,
    marginVertical: 5,
  },
  span: {
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonConfirmation: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#3BB143",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default ModalConfirmacion;
