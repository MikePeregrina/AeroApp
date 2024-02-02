import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carrousel from "@/components/Carrousel";
import { Searchbar } from "react-native-paper";

const Welcome = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido Jose Ignacio</Text>
        <Text style={styles.subTittle}>¿Que Deseas Aprender?</Text>
      </View>
      <View style={styles.inputquery}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View>
        <Carrousel />
      </View>
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
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 3,
  },
  subTittle: {
    marginBottom: 3,
    fontSize: 20,
    fontWeight: "700",
  },
  inputquery: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
  },
});

export default Welcome;
