import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const Cards = ({ products }) => {
  return (
    <Card style={styles.container}>
      <Card.Cover
        style={styles.cardContent}
        source={{ uri: products.imgUrl }}
      />
      <Card.Actions style={styles.cardButtons}>
        <Button style={styles.buttons} labelStyle={styles.buttonText}>
          Clase muestra
        </Button>
        <Button style={styles.disableButton} disabled>
          Suscripcion(proximamente)
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#009dff",
    borderRadius: 25,
  },
  cardContent: {
    borderRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    height: "55%",
  },
  cardButtons: {
    backgroundColor: "#009dff",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    width: "80%",
    marginVertical: 10,
    borderColor: "#009dff",
    backgroundColor: "#ff8c00",
  },
  buttonText: {
    fontSize: 15,
    color: "#FDFBF6",
  },
  disableButton: {
    width: "80%",
    backgroundColor: "#e0dada",
    color: "white",
  },
});

export default Cards;
