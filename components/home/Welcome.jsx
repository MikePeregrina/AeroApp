import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RecommendRoutes from "./RecommendRoutes";
import data from "../datos";
import Buttons from "./Buttons";
import ProgrammingArea from "./ProgrammingArea";
import Asesorias from "./Asesorias";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [user, setUser] = React.useState(null);

  // React.useEffect(() => {
  //   const obtenerDatosUsuario = async () => {
  //     try {
  //       const datosUsuario = await AsyncStorage.getItem("@dataUsuario");
  //       const datosUsuarioParseados =
  //         datosUsuario != null ? JSON.parse(datosUsuario) : null;

  //       setUser(datosUsuarioParseados);
  //     } catch (error) {
  //       console.error("Error al obtener los datos del usuario:", error);
  //     }
  //   };

  //   obtenerDatosUsuario();
  // }, []);

  // console.log("Date of user", user);

  const eliminarDatosUsuario = async () => {
    try {
      await AsyncStorage.removeItem("@dataUsuario");
      console.log("Datos del usuario eliminados de la caché");
    } catch (error) {
      console.error("Error al eliminar los datos del usuario:", error);
    }
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.content}>
          {user ? (
            <Text onPress={eliminarDatosUsuario} style={styles.title}>
              Bienvenido {user.name}
            </Text>
          ) : (
            <Text style={styles.title}>Bienvenido</Text>
          )}
          <View style={styles.inputquery}>
            <Searchbar
              placeholder="¿Que deseas aprender?"
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
          </View>
        </View>
        <Buttons />
        <RecommendRoutes data={data} />
        <ProgrammingArea />
        <Asesorias />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 20,
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#bebeba",
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 15,
    color: "#FF7F50",
  },
  inputquery: {
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
  },
});

export default Welcome;
