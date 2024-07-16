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

const baseUrl = "https://widolearn.com/public/";

const VerCursos = () => {
  const { cursos } = useContext(GlobalContext);

  const handleLogin = (datos) => {
    router.navigate({
      pathname: "/screen/comprarcurso/HomeCursoSreen",
      params: datos,
    });
  };

  return (
    <ScrollView>
      <Stack.Screen options={{ title: "" }} />
      <View>
        {cursos.map((data, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handleLogin(data)}
            activeOpacity={0.9}
          >
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: `${baseUrl}${data.foto}` }}
                  resizeMode="center"
                />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.description}>{data.nombre}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
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
