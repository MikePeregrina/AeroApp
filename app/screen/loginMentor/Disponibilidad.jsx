import { fetchData } from "@/app/services/API";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack, useGlobalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ModalCrear } from "./ModalCrear";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import Toast from "react-native-toast-message";
import { showToast } from "@/app/utils/toastUtils";
import { ModalEditar } from "./ModalEditar";

const Disponibilidad = () => {
  const mentorData = useGlobalSearchParams();
  const [horarios, setHorarios] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(null);

  useEffect(() => {
    const loadHorarios = async () => {
      try {
        const result = await fetchData(
          `https://www.widolearn.com/index.php?c=Docentes&a=indexApp&id=${mentorData.mentor_id}`
        );
        setHorarios(result);
      } catch (err) {
        setError(err.message);
      }
    };

    loadHorarios();
  }, [update]);

  const handleEliminar = async (id) => {
    setLoading(true);
    try {
      const res = await fetchData(
        `https://www.widolearn.com/index.php?c=Docentes&a=agendaEliminarApp&id=${id}`
      );
      showToast("info", `${res.message},`);
      setTimeout(() => {
        setUpdate((prev) => !prev);
        setLoading(false);
      }, 1000);
    } catch (e) {
      showToast("error", `${res.message},`);
      setLoading(true);
      console.error(e);
    }
  };

  console.log(horarios);

  return (
    <View>
      <Stack.Screen options={{ title: "" }} />
      <View>
        <ModalCrear props={mentorData} setUpdate={setUpdate} />
      </View>
      <View style={styles.container}>
        <View>
          <Text style={{ color: "#FFFFFF", fontWeight: "700", fontSize: 15 }}>
            Fecha
          </Text>
        </View>
        <View>
          <Text style={{ color: "#FFFFFF", fontWeight: "700", fontSize: 15 }}>
            Hora
          </Text>
        </View>
        <View>
          <Text style={{ color: "#FFFFFF", fontWeight: "700", fontSize: 15 }}>
            Action
          </Text>
        </View>
      </View>
      {horarios.map((horario, index) => (
        <View key={index} style={styles.contentDate}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                color: "#000000",
                fontWeight: "600",
                fontSize: 15,
              }}
            >
              {horario.dia_semana}
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#000000", fontWeight: "600", fontSize: 15 }}>
              {horario.hora}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <ModalEditar
              props={horario.id_disponibilidad}
              setUpdate={setUpdate}
            />
            <Button
              onPress={() => handleEliminar(horario.id_disponibilidad)}
              style={{ width: "auto" }}
            >
              {!loading ? (
                <MaterialIcons name="delete" size={24} color="black" />
              ) : (
                <ActivityIndicator animating={true} color={MD2Colors.black} />
              )}
            </Button>
          </View>
        </View>
      ))}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000000",
    padding: 10,
    marginHorizontal: 10,
  },
  buton: {
    backgroundColor: "#000000",
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  contentDate: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Disponibilidad;
