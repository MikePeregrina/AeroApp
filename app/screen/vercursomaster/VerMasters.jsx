import Mentores from "@/components/Mentores";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const VerCursos = () => {
  return (
    <ScrollView>
      <View>
        {Mentores.map((data, index) => (
          <View
            key={index}
            style={styles.card}
            onPress={() =>
              router.navigate({
                pathname: "/screen/comprarcurso/HomeCursoSreen",
                params: data,
              })
            }
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: data.fotoPerfil }} />
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.name}>{data.nombreCompleto}</Text>
              <Button style={styles.button} labelStyle={{ color: "#FFFFFF" }}>
                Ver Perfil
              </Button>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 5,
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
    width: 80,
    height: 80,
    overflow: "hidden",
    borderRadius: 100,
    margin: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "700",
    marginVertical: 40,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#24a0ed",
    marginTop: 30,
    width: 110,
    height: 40,
    borderRadius: 8,
    marginRight: 5,
  },
});

export default VerCursos;
