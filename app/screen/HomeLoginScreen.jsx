//* Inicio de sesion ***/

import React from "react";
import Background from "../../components/login/Background";
import Logo from "../../components/login/Logo";
import Header from "../../components/login/Header";
import Button from "../../components/login/Button";
import Paragraph from "../../components/login/Paragraph";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <Background>
      <Logo />
      <Header>Aerobot Learning</Header>
      <Paragraph>
        La plataforma en línea de aprendizaje personalizado por videollamada con
        un mentor
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => router.navigate("/screen/LoginScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => router.navigate("/screen/RegisterScreen")}
      >
        Sign Up
      </Button>
    </Background>
  );
}
