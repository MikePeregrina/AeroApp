import { Image, Text, View } from "react-native";
import IMG from "../../assets/images/bookicon.jpg";

const MisClases = () => {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <View style={{ width: "100%", height: 300 }}>
        <Image style={{ width: "100%", height: 250 }} source={IMG} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: 700 }}>
          Que aprenderas primero?
        </Text>
        <Text style={{ fontSize: 17, marginVertical: 6 }}>
          Tus cursos apareceran aqui.
        </Text>
      </View>
    </View>
  );
};

export default MisClases;
