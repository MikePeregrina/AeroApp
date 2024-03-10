import { Image, StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View>
      <View style={{ margin: 35, alignItems: "center" }}>
        <Text style={styles.tittle}>
          ESTAMOS BUSCANDO UN MENTOR DE ACUERDO A TUS PREFERENCIAS
        </Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.gif}
          source={require("../../../assets/images/loading.gif")}
        />
      </View>
      <View style={styles.containerImage}>
        <Image
          style={{ width: 350, height: 320 }}
          source={require("../../../assets/images/Picture1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  gif: {
    width: 100,
    height: 100,
  },
  tittle: {
    fontSize: 19,
    fontWeight: "600",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
});

export default Loading;
