import { FlatGrid } from "react-native-super-grid";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const baseUrl = "https://widolearn.com/public/";

const GridPosition = ({ data }) => {
  return (
    <FlatGrid
      data={data}
      style={styles.gridView}
      horizontal={true}
      staticDimension={300}
      maxItemsPerRow={2}
      spacing={10}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback
          onPress={() => {
            router.navigate({
              pathname: "/screen/comprarcurso/HomeCursoSreen",
              params: item,
            });
          }}
        >
          <View style={[styles.itemContainer, styles.elevation]}>
            <View style={{ width: 80, height: 80 }}>
              <Image
                style={styles.image}
                source={{ uri: `${baseUrl}${item.foto}` }}
                resizeMode="cover"
              />
            </View>
            <View style={{ width: "50%" }}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.itemName}
              >
                {item.nombre}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    width: 280,
    height: 130,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  itemName: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "600",
  },
  elevation: {
    elevation: 2,
  },
});

export default GridPosition;
