import { GlobalContext } from "@/app/context/GlobalProvider";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Menu = () => {
  const { eliminarDatosUsuario, data } = React.useContext(GlobalContext);
  return (
    <View style={{ alignItems: "center" }}>
      {!data ? null : (
        <Text style={{ fontSize: 17, fontWeight: 600, marginVertical: 35 }}>
          <Link href={"/screen/login/HomeLoginScreen"}>Iniciar sesion</Link>
        </Text>
      )}
      <Text
        style={{ fontSize: 17, fontWeight: 600, marginVertical: 35 }}
        onPress={eliminarDatosUsuario}
      >
        Cerrar Sesion
      </Text>
    </View>
  );
};

export default Menu;
