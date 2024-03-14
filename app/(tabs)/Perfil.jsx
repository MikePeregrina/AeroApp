import { View } from "react-native";
import { GlobalProvider } from "../context/GlobalProvider";
import React from "react";
import Menu from "@/components/perfil/Menu";

const Perfil = () => {
  return (
    <GlobalProvider>
      <View>
        <Menu />
      </View>
    </GlobalProvider>
  );
};

export default Perfil;
