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
      <Header>AeroBot Learning</Header>
      <Paragraph>
        La platataforma educativa especializada en coding para instituciones,
        escuelas y usuarios
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
