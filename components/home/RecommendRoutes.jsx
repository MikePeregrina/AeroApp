import React, { useState } from "react";
import { Card, Text } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import Carrusel from "../carrusel/Carrusel";

const RecommendRoutes = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handleCarouselTouchStart = () => {
    setScrollEnabled(false);
  };

  const handleCarouselTouchEnd = () => {
    setScrollEnabled(true);
  };

  return (
    <ScrollView
      nestedScrollEnabled={true}
      scrollEnabled={scrollEnabled}
      onTouchStart={handleCarouselTouchStart}
      onTouchEnd={handleCarouselTouchEnd}
    >
      <View style={{ marginHorizontal: 20, marginVertical: "auto" }}>
        <View>
          <Text style={styles.title}>Rutas Recomendadas</Text>
        </View>
        <View>
          <Carrusel typeMode={"left-align"} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginVertical: 15,
  },
  titleCard: {
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  content: {
    padding: 5,
    margin: 3,
  },
  price: {
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    fontWeight: "bold",
    textDecorationColor: "#000298",
    marginLeft: "auto",
    marginRight: 20,
  },
  card: {
    width: "100%",
    height: "100%",
  },
});

export default RecommendRoutes;
