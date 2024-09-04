import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";

const Recorrido = ({ creditos, cursados }) => {
  const images = [];

  const handlePress = async () => {
    const meet = "https://us02web.zoom.us/j/82296455704?pwd=SVR2d#success";
    try {
      await Linking.openURL(meet);
    } catch (error) {
      console.error("Error al abrir el enlace: ", error);
    }
  };

  for (let i = 1; i <= creditos; i++) {
    let imageSource;

    if (i === 1 || i === creditos) {
      imageSource = require("@/app/assets/cursos/track-start.png");
    } else if (i >= 2 && i <= cursados) {
      imageSource = require("@/app/assets/cursos/track-complete.png");
    } else {
      imageSource = require("@/app/assets/cursos/track-wait.png");
    }

    images.push(
      <View key={i} style={styles.imageContainer}>
        {i >= 2 && i <= cursados ? (
          <TouchableWithoutFeedback onPress={handlePress}>
            <Image
              source={imageSource}
              style={styles.image}
              resizeMode="center"
            />
          </TouchableWithoutFeedback>
        ) : (
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="center"
          />
        )}
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>{images}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  offset: {
    marginTop: 30,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default Recorrido;
