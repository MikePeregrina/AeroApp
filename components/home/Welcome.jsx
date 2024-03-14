import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RecommendRoutes from "./RecommendRoutes";
import Buttons from "./Buttons";
import ProgrammingArea from "./ProgrammingArea";
import Asesorias from "./Asesorias";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalContext } from "@/app/context/GlobalProvider";
import { useFocusEffect } from "@react-navigation/native";

const Welcome = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { obtenerDatosUsuario, data } = React.useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      obtenerDatosUsuario();
    }, [])
  );

  return (
    <ScrollView>
      <View>
        <View style={styles.content}>
          {data ? (
            <Text style={styles.title}>Bienvenido {data.name}</Text>
          ) : (
            <Text style={styles.title}>Bienvenido</Text>
          )}
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
