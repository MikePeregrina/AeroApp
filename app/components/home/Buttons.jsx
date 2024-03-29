import { router } from "expo-router";
import { View } from "react-native";
import { Button } from "react-native-paper";
import tw from "twrnc";

const Buttons = () => {
  return (
    <View style={tw`flex-row bg-slate-300 h-14`}>
      <View style={tw`my-auto mx-auto`}>
        <Button
          buttonColor="#4f7cac"
          labelStyle={{ color: "#fec400" }}
          mode="contained"
          onPress={() => router.navigate("/screen/vercursomaster/VerCursos")}
        >
          Areas de aprendizaje
        </Button>
      </View>
      <View style={tw`my-auto mx-auto`}>
        <Button
          buttonColor="#2e3532"
          mode="contained"
          onPress={() => router.navigate("/screen/vercursomaster/VerMasters")}
        >
          Master Teach
        </Button>
      </View>
      {/* <View style={tw`my-auto mx-auto`}>
        <Button disabled={false} buttonColor="gray" mode="contained">
          Reels
        </Button>
      </View> */}
    </View>
  );
};

export default Buttons;
