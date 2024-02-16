import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Carrusel from "../carrusel/Carrusel";

const ProgrammingArea = () => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
      <Text style={styles.title}>Area de programacion</Text>
      <Carrusel />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 0,
    width: "100",
    height: "60%",
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
});

export default ProgrammingArea;
