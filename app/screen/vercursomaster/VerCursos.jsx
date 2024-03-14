import datos from "@/components/datos";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const VerCursos = () => {
  return (
    <ScrollView>
      <View>
        {datos.map((data, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() =>
              router.navigate({
                pathname: "/screen/comprarcurso/HomeCursoSreen",
                params: data,
              })
            }
            activeOpacity={0.9}
          >
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: data.imgUrl }} />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>MX${data.prize}</Text>
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
    fontWeight: "700",
  },
  price: {
    marginTop: 25,
    fontWeight: "500",
  },
});

export default VerCursos;
