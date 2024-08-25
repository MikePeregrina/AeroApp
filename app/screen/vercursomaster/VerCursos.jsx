import { router, Stack } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalProvider";
import GridPosition from "@/app/components/home/GridPosition";

const VerCursos = () => {
  const { cursos } = useContext(GlobalContext);

  const programacion = cursos.filter(
    (cursor) => cursor.tipo === "programacion"
  );

  const administracion = cursos.filter(
    (cursor) => cursor.tipo === "administracion"
  );

  const videojuegos = cursos.filter((cursor) => cursor.tipo === "videojuegos");

  const dibujo = cursos.filter(
    (cursor) => cursor.tipo === "dibujo-ilustracion"
  );

  return (
    <ScrollView>
      <Stack.Screen options={{ title: "Cursos" }} />
      <View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "700", padding: 10 }}>
            Cursos de Programacion
          </Text>
          <GridPosition data={programacion} />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "700", padding: 10 }}>
            Cursos de Administracion
          </Text>
          <GridPosition data={administracion} />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "700", padding: 10 }}>
            Cursos de Videojuegos
          </Text>
          <GridPosition data={videojuegos} />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "700", padding: 10 }}>
            Cursos de Dibujo
          </Text>
          <GridPosition data={dibujo} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  imageContainer: {
    width: 120,
    height: 100,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  description: {
    marginHorizontal: "auto",
    marginVertical: "auto",
    fontWeight: "700",
  },
  price: {
    marginTop: 25,
    fontWeight: "500",
  },
});

export default VerCursos;
