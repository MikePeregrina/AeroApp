import {
  Dimensions,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import data from "./data";
import { Card, Text } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { Link } from "expo-router";

const SLIDER_WIDTH = Dimensions.get("window").width + 80;

const renderItem = ({ item }) => {
  return (
    <Card style={{ borderRadius: 0 }}>
      <Card.Cover
        source={{
          uri: item.imgUrl,
        }}
        style={styles.img}
      />
      <Card.Content style={styles.content}>
        <Text style={styles.title} variant="titleLarge">
          {item.title}
        </Text>
        <Text variant="bodySmall">{item.description}</Text>
        <Text></Text>
      </Card.Content>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.price}>${item.prize}</Text>
        <Link style={styles.button} href={"/screen/DetailsScreen"}>
          Details
        </Link>
      </View>
    </Card>
  );
};

export default function Carrousel() {
  return (
    <KeyboardAvoidingView behavior="position">
      <View onPress={() => navigation.navigate("Other")}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={280}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

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
