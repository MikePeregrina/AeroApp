import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from "./data";
import Carousel from "react-native-snap-carousel";

interface datapick {
  title: string;
  body: string;
  imgUrl: string;
}

const renderItem = ({ item }: { item: datapick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentImage}>
        <Image
          source={{ uri: item.imgUrl }}
          style={{
            flex: 1,
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    </View>
  );
};

export default function Carrousel() {
  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={350}
        layoutCardOffset={1}
        itemWidth={250}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,

    // Add elevation for Android
    elevation: 2,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  contentImage: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  content: {
    padding: 5,
    margin: 3,
  },
});
