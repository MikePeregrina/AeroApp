import { View } from "react-native";
import { Button } from "react-native-paper";

const Buttons = () => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 20 }}>
      <View style={{ marginLeft: 25 }}>
        <Button buttonColor="rgba(78, 116, 289, 1)" mode="contained">
          Ver Cursos
        </Button>
      </View>
      <View style={{ marginLeft: "auto", marginRight: 25 }}>
        <Button buttonColor="rgba(78, 116, 289, 1)" mode="contained">
          Ver Master
        </Button>
      </View>
    </View>
  );
};

export default Buttons;
