import { Text, View, StyleSheet, Image } from "react-native";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { Button } from "react-native-paper";
import React from "react";
import { GlobalContext } from "@/context/GlobalProvider";
import { ModalLogin } from "@/app/components/home/ModalLogin";

const baseUrl = "https://widolearn.com/public/";

const HomeCursoSreen = () => {
  //**  Trae los datos del card que se mandan en los parametros del router navigation  */
  const cursoDescription = useGlobalSearchParams();
  const { nombre, foto, id_curso } = cursoDescription;
  const router = useRouter();
  const { data } = React.useContext(GlobalContext);

  return (
    <View>
      <Stack.Screen options={{ title: "" }} />
      <View style={{ width: "100%" }}>
        <Image
          style={{ width: "100%", height: 220 }}
          source={{ uri: `${baseUrl}${foto}` }}
        />
      </View>
      <View style={{ margin: 25 }}>
        <View>
          <Text style={styles.title}>Hola, Haz elegido el curso:</Text>
          <Text style={styles.subtitle}>{nombre}</Text>
        </View>
        <View>
          <Text style={styles.title}>¿Deseas Continuar?</Text>
          {data ? (
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={{ fontSize: 16 }}
              onPress={() =>
                router.navigate({
                  pathname: "/components/compraCurso/Loading",
                  params: {
                    id_curso: id_curso,
                    curso: nombre,
                  },
                })
              }
            >
              Siguiente
            </Button>
          ) : (
            <ModalLogin />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "500",
    marginTop: 20,
  },
  requisitos: {
    marginVertical: 30,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#2257ff",
    marginTop: 25,
    height: 43,
    borderRadius: 8,
  },
});

export default HomeCursoSreen;
