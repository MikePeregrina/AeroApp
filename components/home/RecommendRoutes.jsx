import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Carrusel from "../carrusel/Carrusel";

const RecommendRoutes = () => {
  return (
    <View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={styles.title}>Rutas Recomendadas</Text>
      </View>
      <View>
        <Carrusel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginVertical: 15,
  },
  titleCard: {
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  content: {
    padding: 5,
    margin: 3,
  },
  price: {
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    fontWeight: "bold",
    textDecorationColor: "#000298",
    marginLeft: "auto",
    marginRight: 20,
  },
  card: {
    width: "100%",
    height: "100%",
  },
});

export default RecommendRoutes;
