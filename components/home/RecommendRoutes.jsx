import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

const RecommendRoutes = ({ data }) => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: "auto" }}>
      <View>
        <Text style={styles.title}>Rutas Recomendadas</Text>
      </View>
      <View style={{ width: 250, height: 350 }}>
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri: data[1].imgUrl,
            }}
            style={styles.img}
          />
          <Card.Content style={styles.content}>
            <Text style={styles.titleCard} variant="titleLarge">
              {data[1].title}
            </Text>
            <Text variant="bodySmall">{data[1].description}</Text>
          </Card.Content>
          <View style={{ flexDirection: "row", marginTop: "auto" }}>
            <Text style={styles.price}>${data[1].prize}</Text>
            <Link
              href={{
                pathname: "/screen/[id]",
                params: { id: data[1].id },
              }}
            >
              Ver Mas
            </Link>
          </View>
        </Card>
      </View>
    </View>
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
