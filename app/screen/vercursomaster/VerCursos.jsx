import datos from "../../components/datos";
import { router, Stack } from "expo-router";
import Toast from "react-native-toast-message";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalProvider";

const VerCursos = () => {
  const { data } = useContext(GlobalContext);

  console.log(data);

  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "Lo sentimos ❌",
      text2: "Debes iniciar sesion primero!",
      position: "top",
      visibilityTime: 2000,
    });
  };

  const handleLogin = (datos) => {
    if (data) {
      router.navigate({
        pathname: "/screen/comprarcurso/HomeCursoSreen",
        params: datos,
      });
    } else {
      console.log("no hay data");
      showToast();
    }
  };

  return (
    <ScrollView>
      <Stack.Screen options={{ title: "" }} />
      <View>
        {datos.map((data, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handleLogin(data)}
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
      <Toast />
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
