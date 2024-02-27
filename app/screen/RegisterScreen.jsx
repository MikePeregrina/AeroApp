import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Background from "../../components/login/Background";
import Logo from "../../components/login/Logo";
import Header from "../../components/login/Header";
import Button from "../../components/login/Button";
import TextInput from "../../components/login/TextInput";
import { theme } from "../../components/login/theme";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Stack } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Nombre demasiado corto!")
      .max(50, "Nombre demasiado largo!")
      .required("Campo Requerido"),
    email: Yup.string().email("Correo Incorrecto").required("Campo Requerido"),
    password: Yup.string().required("Campo Requerido"),
  });

  return (
    <Background>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Logo />
      <Header>Crear Cuenta</Header>
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ width: "100%" }}>
            <TextInput
              name="name"
              label="Nombre"
              returnKeyType="next"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            <TextInput
              name="email"
              label="Correo"
              returnKeyType="next"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              name="password"
              label="Contraseña"
              returnKeyType="done"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
            />
            <Button
              onPress={handleSubmit}
              mode="contained"
              style={{ marginTop: 24 }}
            >
              Sign Up
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => router.navigate("/screen/LoginScreen")}
        >
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
