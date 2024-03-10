import { Text, View, StyleSheet, Image } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { Button } from "react-native-paper";

const HomeCursoSreen = () => {
  //**  Trae los datos del card que se mandan en los parametros del router navigation  */
  const cursoDescription = useGlobalSearchParams();
  const { title, Requirements, imgUrl } = cursoDescription;
  const router = useRouter();

  return (
    <View>
      <View style={{ width: "100%" }}>
        <Image
          style={{ width: "100%", height: 220 }}
          source={{ uri: imgUrl }}
        />
      </View>
      <View style={{ margin: 25 }}>
        <View>
          <Text style={styles.title}>Hola, Haz elegido el curso:</Text>
          <Text style={styles.subtitle}>{title}</Text>
        </View>
        <View style={styles.requisitos}>
          <Text style={styles.title}>
            Este Curso tiene los siguientes requisitos:
          </Text>
          <Text style={styles.subtitle}>{Requirements}</Text>
        </View>
        <View>
          <Text style={styles.title}>¿Deseas Continuar?</Text>
          <Button
            mode="contained"
            style={styles.button}
            labelStyle={{ fontSize: 16 }}
            onPress={() =>
              router.navigate({
                pathname: "/screen/comprarcurso/SelectFecha",
                params: {
                  curso: title,
                },
              })
            }
          >
            Siguiente
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  requisitos: {
    marginVertical: 30,
  },
  subtitle: {
    marginTop: 3,
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
