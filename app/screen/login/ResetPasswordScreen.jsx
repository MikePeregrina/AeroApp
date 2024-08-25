import React from "react";
import Background from "../../components/login/Background";
import Logo from "../../components/login/Logo";
import Header from "../../components/login/Header";
import TextInput from "../../components/login/TextInput";
import Button from "../../components/login/Button";
import { View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Stack } from "expo-router";

export default function ResetPasswordScreen() {
  //     navigation.navigate('LoginScreen')

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Correo Incorrecto").required("Campo Requerido"),
  });

  return (
    <Background>
      <Stack.Screen options={{ title: "" }} />

      <Header>Restaurar Contraseña</Header>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ width: "100%" }}>
            <TextInput
              name="email"
              label="Direccion de Correo"
              returnKeyType="done"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              description="Recibiras un link para restablecer tu contraseña"
            />
            <Button
              onPress={handleSubmit}
              mode="contained"
              style={{ marginTop: 16, backgroundColor: "#2196F3" }}
            >
              Enviar instrucciones
            </Button>
          </View>
        )}
      </Formik>
    </Background>
  );
}
