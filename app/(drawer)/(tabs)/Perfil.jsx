import { View } from "react-native";
import React from "react";
import Menu from "@/app/components/perfil/Menu";
import { Stack } from "expo-router";

const Perfil = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Menu />
    </View>
  );
};

export default Perfil;
