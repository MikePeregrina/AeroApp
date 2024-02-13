import { Link } from "expo-router";
import { Text, View } from "react-native";

const Asesorias = () => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>Asesorias</Text>
      <Link href={"/screen/Login"}>Iniciar sesion</Link>
    </View>
  );
};

export default Asesorias;
