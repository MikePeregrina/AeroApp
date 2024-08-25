import { Text, View, StyleSheet, Image } from "react-native";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { Button } from "react-native-paper";
import React from "react";
import { GlobalContext } from "@/context/GlobalProvider";
import { ModalLogin } from "@/app/components/home/ModalLogin";
import Select from "@/app/components/compraCurso/Select";

const baseUrl = "https://widolearn.com/public/";

const HomeCursoSreen = () => {
  //**  Trae los datos del card que se mandan en los parametros del router navigation  */
  const cursoDescription = useGlobalSearchParams();
  const { nombre, foto, id_curso } = cursoDescription;
  const router = useRouter();
  const { data } = React.useContext(GlobalContext);
  const [onSelectConocimiento, setOnSelectConocimiento] = React.useState(null);
  const [onSelectEdad, setOnSelectEdad] = React.useState(null);
  const [error, setError] = React.useState({ conocimientos: "", edad: "" });

  const conocimientos = {
    Si: "Si, tengo conocimientos previos",
    "Un poco": "Un poco, tengo pocos conocimientos previos",
    No: "No, no tengo conocimientos previos",
  };

  const edades = Array.from({ length: 53 }, (_, i) => ({
    label: `${i + 8} años`,
    value: i + 8,
  }));

  const conocimientosArray = Object.keys(conocimientos).map((key) => ({
    label: conocimientos[key],
    value: key,
  }));

  const handleContinue = () => {
    let valid = true;
    let errorMessages = { conocimientos: "", edad: "" };

    if (!onSelectConocimiento) {
      valid = false;
      errorMessages.conocimientos = "Por favor selecciona una opción.";
    }

    if (!onSelectEdad) {
      valid = false;
      errorMessages.edad = "Por favor selecciona una edad.";
    }

    setError(errorMessages);

    if (valid) {
      router.navigate({
        pathname: "/components/compraCurso/Loading",
        params: {
          id_curso: id_curso,
          curso: nombre,
          conocimientos: conocimientos[onSelectConocimiento],
          edad: onSelectEdad,
        },
      });
    }
  };

  return (
    <View>
      <Stack.Screen options={{ title: "" }} />
      <View style={{ width: "100%" }}>
        <Image
          style={{ width: "100%", height: 220 }}
          source={{ uri: `${baseUrl}${foto}` }}
        />
      </View>
      <View style={{ padding: 10, backgroundColor: "#FFFFFF", height: "100%" }}>
        <View style={{ margin: 10 }}>
          <View>
            <Text style={styles.title}>Hola, Haz elegido el curso:</Text>
            <Text style={styles.subtitle}>{nombre}</Text>
          </View>
          <View>
            <Text style={styles.title}>Requisitos para este curso:</Text>
            <Text style={styles.requisitos}>
              ¿Tienes Conocimientos previos de {nombre}?
            </Text>
            <Select
              data={conocimientosArray}
              onSelectChange={setOnSelectConocimiento}
            />
            {error.conocimientos ? (
              <Text style={styles.errorText}>{error.conocimientos}</Text>
            ) : null}
            <Text style={styles.requisitos}>¿Cuál es tu edad?</Text>
            <Select data={edades} onSelectChange={setOnSelectEdad} />
            {error.edad ? (
              <Text style={styles.errorText}>{error.edad}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.title}>¿Deseas Continuar?</Text>
            {data ? (
              <Button
                mode="contained"
                style={styles.button}
                labelStyle={{ fontSize: 16 }}
                onPress={handleContinue}
              >
                Siguiente
              </Button>
            ) : (
              <ModalLogin />
            )}
          </View>
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
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 10,
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
  errorText: {
    textAlign: "center",
    color: "red",
    marginVertical: 3,
  },
});

export default HomeCursoSreen;
