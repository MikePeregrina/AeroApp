import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RecommendRoutes from "./RecommendRoutes";
import data from "../datos";
import Buttons from "./Buttons";
import ProgrammingArea from "./ProgrammingArea";
import Asesorias from "./Asesorias";

const Welcome = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
        <RecommendRoutes data={data} />
        <ProgrammingArea />
        <Asesorias />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
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
