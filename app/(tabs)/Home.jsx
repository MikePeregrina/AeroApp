import "react-native-gesture-handler";
import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Welcome from "../components/home/Welcome";
import MenuComponent from "../components/Menu/MenuComponent";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
          <Welcome />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
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

export default Home;
