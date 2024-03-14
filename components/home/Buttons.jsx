import { router } from "expo-router";
import { View } from "react-native";
import { Button } from "react-native-paper";

const Buttons = () => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 20 }}>
      <View style={{ marginLeft: 15 }}>
        <Button
          buttonColor="rgba(78, 116, 289, 1)"
          mode="contained"
          onPress={() => router.navigate("/screen/vercursomaster/VerCursos")}
        >
          Ver Cursos
        </Button>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Button
          buttonColor="rgba(78, 116, 289, 1)"
          mode="contained"
          onPress={() => router.navigate("/screen/vercursomaster/VerMasters")}
        >
          Ver Master
        </Button>
      </View>
      <View style={{ marginLeft: "auto", marginRight: 20 }}>
        <Button disabled={false} buttonColor="gray" mode="contained">
          Reels
        </Button>
      </View>
    </View>
  );
};

export default Buttons;
