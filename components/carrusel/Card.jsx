import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const Cards = () => {
  return (
    <Card style={styles.container}>
      <Card.Cover
        style={styles.cardContent}
        source={{ uri: "https://i.ytimg.com/vi/z95mZVUcJ-E/maxresdefault.jpg" }}
      />
      <Card.Actions style={styles.cardButtons}>
        <Button style={styles.buttons} labelStyle={styles.buttonText}>
          Clase muestra
        </Button>
        <Button disabled>Suscripcion(proximamente)</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FDFBF6",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  cardContent: {
    borderRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "65%",
  },
  cardButtons: {
    backgroundColor: "#FDFBF6",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    width: "80%",
    marginVertical: 10,
    borderColor: "#ffffff",
    backgroundColor: "#ff9537",
  },
  buttonText: {
    color: "#FDFBF6",
  },
});

export default Cards;
