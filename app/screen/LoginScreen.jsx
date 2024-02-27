import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
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
import { mockLogin } from "./../../components/MockApi";

export default function LoginScreen() {
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
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
      <Header>Welcome back.</Header>
      <Formik
        initialValues={{ password: "", email: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => mockLogin(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ width: "100%" }}>
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
            <View style={styles.forgotPassword}>
              <TouchableOpacity
                onPress={() => router.replace("/screen/ResetPasswordScreen")}
              >
                <Text style={styles.forgot}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <Button onPress={handleSubmit} mode="contained">
              Login
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => router.replace("/screen/RegisterScreen")}
        >
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
