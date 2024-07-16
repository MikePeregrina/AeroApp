import { StyleSheet, View } from "react-native";
import Background from "../login/Background";
import IMG from "../../assets/images/web 2024-13.png";
import tw from "twrnc";
import { router, Stack, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";

const Loading = () => {
  const cursoDescription = useGlobalSearchParams();

  useEffect(() => {
    setTimeout(() => {
      router.replace({
        pathname: "/screen/comprarcurso/MuestraMentor",
        params: cursoDescription,
      });
    }, 4000);
  }, []);

  return (
    <Background image={IMG}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={tw`w-full h-full`}></View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  gif: {
    width: 100,
    height: 100,
  },
  tittle: {
    fontSize: 19,
    fontWeight: "600",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
});

export default Loading;
