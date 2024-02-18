import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Welcome from "../../components/home/Welcome";
import Logo from "../../components/logo/Logo";

const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#F8F8F8" },
            headerShadowVisible: true,
            headerTitle: (props) => <Logo />,
          }}
        />
        <Welcome />
      </View>
    </SafeAreaView>
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
