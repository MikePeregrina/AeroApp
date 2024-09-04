import Select from "@/app/components/compraCurso/Select";
import { fetchData } from "@/app/services/API";
import { showToast } from "@/app/utils/toastUtils";
import React from "react";
import { Text, Modal, StyleSheet, View } from "react-native";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import Toast from "react-native-toast-message";

export const ModalCrear = ({ props, setUpdate }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [onSelectDia, setOnSelectDia] = React.useState(null);
  const [onSelectHora, setOnSelectHora] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const generateTimeSlots = () => {
    const startHour = 8;
    const endHour = 21;
    const timeSlots = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      const time1 = `${hour}:00`;
      const time2 = `${hour}:30`;
      timeSlots.push({ label: time1, value: time1 });
      if (hour !== endHour) {
        timeSlots.push({ label: time2, value: time2 });
      }
    }

    return timeSlots;
  };

  const handleDate = async () => {
    const data = {
      dia_semana: onSelectDia,
      hora: onSelectHora,
      id_maestro: props.mentor_id,
    };
    setLoading(true);
    try {
      const res = await fetchData(
        "https://www.widolearn.com/index.php?c=Docentes&a=agendaCrearApp",
        { method: "POST", data: JSON.stringify(data) }
      );
      if (res.success) {
        showToast("success", "En hora Buena ✅", `${res.message},`);
        setUpdate((prev) => !prev);
        setTimeout(() => {
          setLoading(false);
          setModalVisible(false);
        }, 2000);
      } else {
        showToast("error", "Oh no¡ ❌ ", `${res.message}`);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.error("Data not found", e);
    }
  };

  const hora = generateTimeSlots();

  const diasSemana = [
    { label: "Lunes", value: "Lunes" },
    { label: "Martes", value: "Martes" },
    { label: "Miercoles", value: "Miercoles" },
    { label: "Jueves", value: "Jueves" },
    { label: "Viernes", value: "Viernes" },
    { label: "Sabado", value: "Sabado" },
    { label: "Domingo", value: "Domingo" },
  ];

  return (
    <>
      <Button
        style={styles.buton}
        labelStyle={{ color: "#FFFFFF", fontWeight: "700", fontSize: 17 }}
        onPress={handleOpenModal}
      >
        Crear
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
            <View>
              <Text
                style={{
                  padding: 10,
                  marginHorizontal: 15,
                  marginTop: 20,
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Seleccione dia de la semana
              </Text>
              <Select data={diasSemana} onSelectChange={setOnSelectDia} />
            </View>
            <View>
              <Text
                style={{
                  padding: 10,
                  marginHorizontal: 15,
                  marginTop: 8,
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Seleccione una hora
              </Text>
              <Select data={hora} onSelectChange={setOnSelectHora} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Button
                style={{
                  backgroundColor: "#2E3532",
                  borderRadius: 10,
                  width: "90%",
                  marginTop: 15,
                  marginBottom: 10,
                }}
                labelStyle={{ color: "#D7F9FF", fontWeight: "700" }}
                onPress={handleDate}
              >
                {!loading ? (
                  "Crear Horario"
                ) : (
                  <ActivityIndicator animating={true} color={MD2Colors.white} />
                )}
              </Button>
              <Button onPress={() => setModalVisible(false)} disabled={loading}>
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
    width: "80%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
  },
  buton: {
    backgroundColor: "#000000",
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
});
