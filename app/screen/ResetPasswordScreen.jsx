import React from "react";
import Background from "../../components/login/Background";
import Logo from "../../components/login/Logo";
import Header from "../../components/login/Header";
import TextInput from "../../components/login/TextInput";
import Button from "../../components/login/Button";

export default function ResetPasswordScreen() {
  //     navigation.navigate('LoginScreen')

  return (
    <Background>
      <Logo />
      <Header>Restaurar Contraseña</Header>
      <TextInput
        label="Direccion de Correo"
        returnKeyType="done"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Recibiras un link para restablecer tu contraseña"
      />
      <Button mode="contained" style={{ marginTop: 16 }}>
        Enviar instrucciones
      </Button>
    </Background>
  );
}
