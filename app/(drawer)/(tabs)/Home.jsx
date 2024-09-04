import "react-native-gesture-handler";
import React from "react";
import { View, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Welcome from "@/app/components/home/Welcome";

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

export default Home;
