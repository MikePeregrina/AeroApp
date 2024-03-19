//* Inicio de sesion ***/

import React from "react";
import Background from "../../../components/login/Background";
import Logo from "../../../components/login/Logo";
import Header from "../../../components/login/Header";
import Button from "../../../components/login/Button";
import Paragraph from "../../../components/login/Paragraph";
import { Link, useRouter } from "expo-router";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <Background>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Logo />
      <Header>Aerobot Learning</Header>
      <Paragraph>
        La plataforma en línea de aprendizaje personalizado por videollamada con
        un mentor
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => router.navigate("/screen/login/LoginScreen")}
        style={{ backgroundColor: "#2196F3" }}
        labelStyle={{ fontWeight: "bold", fontSize: 15, lineHeight: 26 }}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => router.navigate("/screen/login/RegisterScreen")}
        labelStyle={{
          fontWeight: "bold",
          fontSize: 15,
          lineHeight: 26,
          color: "#000000",
        }}
      >
        Sign Up
      </Button>
      <Text>
        Eres mentor?
        <Link
          href={"/screen/loginMentor/LoginScreenMentor"}
          style={{ color: "#2196F3", fontWeight: 700 }}
        >
          {" "}
          Registrate Aqui!
        </Link>
      </Text>
    </Background>
  );
}
