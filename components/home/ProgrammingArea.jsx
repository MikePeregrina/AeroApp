import React from "react";
import { Text } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import Carrusel from "./../carrusel/Carrusel";

const ProgrammingArea = () => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View>
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Text style={styles.title}>Area de programacion</Text>
        </View>
        <View>
          <Carrusel typeMode={"parallax"} />
        </View>
      </View>
    </ScrollView>
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
