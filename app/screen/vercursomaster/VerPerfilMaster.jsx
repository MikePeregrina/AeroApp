import React from "react";
import tw from "twrnc";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { Stack } from "expo-router";

import TextwithNBorder from "@/app/components/perfil/TextwithNBorder";

const baseUrl = "https://widolearn.com/public/images/docente/";

const VerPerfilMaster = () => {
  const mentorDescription = useGlobalSearchParams();

  const { Mentor, MentorAcerca, MentorFoto } = mentorDescription;

  const name =
    mentorDescription.Mentor_Nombre != null
      ? mentorDescription.Mentor_Nombre
      : Mentor;
  const about =
    mentorDescription.acercademi != null
      ? mentorDescription.acercademi
      : MentorAcerca;
  const picture =
    mentorDescription.Mentor_Foto != null
      ? mentorDescription.Mentor_Foto
      : MentorFoto;

  console.log("Datos del mentor", mentorDescription);
  const ArrayCadena = name.split(" ");

  return (
    <ScrollView style={tw`bg-[#FFFFFF]`}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <View style={tw`w-full h-125 absolute`}>
          <Image
            source={require("../../assets/images/app-elementos-09.png")}
            style={styles.background}
          />
        </View>
        <View style={styles.content}>
          <View>
            <Text
              style={tw`text-[#FEC400] font-bold text-lg ml-auto mr-[16%] mt-23`}
            >
              PORTAL DE {ArrayCadena[0]}
            </Text>
            <View style={tw`w-65 h-47 ml-auto mr-12 rounded-xl my-8 z-50`}>
              <Image
                style={tw`w-full h-full rounded-xl`}
                source={{
                  uri: `${baseUrl}${picture}/${picture}-description.png`,
                }}
                resizeMode="cover"
              />
            </View>
            <View style={tw`ml-10`}>
              <TextwithNBorder name={name} descripcion={about} />
            </View>
          </View>
          <View style={tw`relative top-[-48px] w-full h-full`}>
            <View>
              <Text style={tw`mx-10 font-bold text-[1rem]`}>
                ¿Qué otros cursos imparte {ArrayCadena[0]}?
              </Text>
            </View>
            <View style={tw`my-5`}>
              <View style={tw`bg-[#D7F9FF] py-5 `}></View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "auto",
    height: "100%",
  },
  content: {
    flex: 1,
    position: "relative",
    zIndex: 500,
  },
});

export default VerPerfilMaster;
