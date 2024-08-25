import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { fetchData } from "@/app/services/API";
import SkeletonCard from "@/app/components/carrusel/SkeletonCard";

const baseUrl = "https://widolearn.com/";

const VerCursos = () => {
  const [mentores, setMentores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(
          "https://www.widolearn.com/index.php?c=Usuarios&a=verMentores"
        );
        setMentores(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading)
    return (
      <View>
        <Stack.Screen options={{ title: "" }} />
        <View style={{ marginTop: 50 }}>
          <SkeletonCard Loading={loading} />
        </View>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );

  return (
    <ScrollView>
      <Stack.Screen options={{ title: "" }} />
      <View>
        {mentores.map((data, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `${baseUrl}public/images/docente/${data.Mentor_Foto}/${data.Mentor_Foto}-profile.png`,
                }}
              />
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.name}>{data.Mentor_Nombre}</Text>
              <Button
                style={styles.button}
                labelStyle={{ color: "#FFFFFF" }}
                onPress={() =>
                  router.navigate({
                    pathname: "/screen/vercursomaster/VerPerfilMaster",
                    params: data,
                  })
                }
              >
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
