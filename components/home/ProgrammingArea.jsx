import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Carrusel from "./../carrusel/Carrusel";
import { GestureDetector } from "react-native-gesture-handler";
import { Gesture } from "react-native-gesture-handler";

const ProgrammingArea = () => {
  const panGesture = Gesture.Pan()
    .onStart(() => {
      console.log("Gesto de Pan empezando");
    })
    .onUpdate((e) => {
      if (Math.abs(e.translationX) > Math.abs(e.translationY)) {
        console.log("====================================");
        console.log("Movimiento horizontal");
        console.log("====================================");
      } else {
        console.log("Movimiento Vertical");
      }
    })
    .onEnd(() => {
      console.log("Gesto de Pan termino");
    });

  return (
    <View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={styles.title}>Area de programacion</Text>
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
