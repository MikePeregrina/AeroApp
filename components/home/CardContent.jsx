import React from "react";
import { Card, Text } from "react-native-paper";
import { Button, StyleSheet, View } from "react-native";
import { Link, useRouter } from "expo-router";

const CardContent = ({ data }) => {
  const router = useRouter();
  return (
    <Card>
      <Card.Cover
        source={{
          uri: data[1].imgUrl,
        }}
        style={styles.img}
      />
      <Card.Content style={styles.content}>
        <Text style={styles.title} variant="titleLarge">
          {data[1].title}
        </Text>
        <Text variant="bodySmall">{data[1].description}</Text>
        <Text></Text>
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
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 0,
    width: "100",
    height: "55%",
  },
  title: {
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
});

export default CardContent;
