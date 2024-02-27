import { Link } from "expo-router";
import { Text, View } from "react-native";

const Perfil = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 17, fontWeight: 600, marginVertical: 35 }}>
        <Link href={"/screen/HomeLoginScreen"}>Iniciar sesion</Link>
      </Text>
    </View>
  );
};

export default Perfil;
