import { useRouter } from "expo-router";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const baseUrl = "https://widolearn.com/public/";

const Cards = ({ curso }) => {
  const router = useRouter();

  return (
    <Card style={styles.container}>
      <Card.Cover
        style={styles.cardContent}
        source={{ uri: `${baseUrl}${curso.foto}` }}
        resizeMode="stretch"
      />
      <Card.Actions style={styles.cardButtons}>
        <Button
          onPress={() =>
            router.navigate({
              pathname: "/screen/comprarcurso/HomeCursoSreen",
              params: curso,
            })
          }
          style={styles.buttons}
          labelStyle={styles.buttonText}
        >
          Clase Muestra
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
    backgroundColor: "#233532",
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
    backgroundColor: "#233532",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    width: "80%",
    marginVertical: 10,
    borderColor: "#233532",
    backgroundColor: "#fec400",
  },
  buttonText: {
    fontSize: 15,
    color: "#233532",
    fontWeight: "800",
  },
  disableButton: {
    width: "80%",
    backgroundColor: "#e0dada",
    color: "white",
  },
});

export default Cards;
