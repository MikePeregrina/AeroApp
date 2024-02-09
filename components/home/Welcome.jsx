import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import CardContent from "./CardContent";
import data from "./../data";
import Buttons from "./Buttons";

const Welcome = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido Jose Ignacio</Text>
        <View style={styles.inputquery}>
          <Searchbar
            placeholder="¿Que deseas aprender?"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
      </View>
      <Buttons />
      <CardContent data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 20,
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#bebeba",
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 15,
    color: "#FF7F50",
  },
  inputquery: {
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
  },
});

export default Welcome;
