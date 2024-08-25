import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { GlobalContext } from "@/context/GlobalProvider";
import { useContext, useEffect, useState } from "react";
import { router, Stack } from "expo-router";
import { fetchData } from "@/app/services/API";

const baseUrl = "https://widolearn.com/public/";

const MisClases = () => {
  const { userData } = useContext(GlobalContext);
  const [misCursos, setMisCursos] = useState([]);

  useEffect(() => {
    const loadClase = async () => {
      try {
        if (userData?.datos) {
          const resp = await fetchData(
            `https://www.widolearn.com/index.php?c=Usuarios&a=vistaAprendizaje&idUsuario=${userData.datos.idUsuario}`
          );
          setMisCursos(resp);
        } else {
          console.log("No hay data");
          setMisCursos([]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadClase();
  }, [userData]);

  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Mis Cursos Activos",
        }}
      />
      {misCursos && misCursos.length > 0 ? (
        misCursos.map((data, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() =>
              router.navigate({
                pathname: "/screen/vercursomaster/RutaAprendizaje",
                params: {
                  idMentor: data.Mentor_ID,
                  idCurso: data.id_curso,
                },
              })
            }
            activeOpacity={0.9}
          >
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: `${baseUrl}${data.foto_curso}` }}
                  resizeMode="center"
                />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.description}>{data.nombre_curso}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))
      ) : (
        <View>
          <View style={{ width: "100%", height: 300 }}>
            <Image
              style={{ width: "100%", height: 250 }}
              source={require("../../assets/images/bookicon.jpg")}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "700" }}>
              ¿Qué aprenderás primero?
            </Text>
            <Text style={{ fontSize: 17, marginVertical: 6 }}>
              Tus cursos aparecerán aquí.
            </Text>
          </View>
        </View>
      )}
    </View>
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

export default MisClases;
