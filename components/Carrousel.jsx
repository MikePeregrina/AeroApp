import {
  Dimensions,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import data from "./data";
import { Button, Card, Text } from "react-native-paper";
import Carousel from "react-native-snap-carousel";

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
      <Text style={styles.price}>${item.prize}</Text>
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
  // contentImage: {
  //   margin: 0,
  //   padding: 0,
  //   width: "100%",
  //   height: "54%",
  // },
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
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 20,
  },
});
