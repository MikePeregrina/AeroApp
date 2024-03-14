import React from "react";
import { TouchableOpacity, StyleSheet, View, ToastAndroid } from "react-native";
import { Text } from "react-native-paper";
import Background from "../../../components/login/Background";
import Logo from "../../../components/login/Logo";
import Header from "../../../components/login/Header";
import Button from "../../../components/login/Button";
import TextInput from "../../../components/login/TextInput";
import { theme } from "../../../components/login/theme";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { users } from "@/components/MockApi";

export default function LoginScreen() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Correo Incorrecto").required("Campo Requerido"),
    password: Yup.string().required("Campo Requerido"),
  });

  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  const mockLogin = async (values) => {
    const { email, password } = values;
    setLoading(true);
    try {
      const userFound = users.find(
        (user) => user.email === email && user.password === password
      );
      if (userFound) {
        const jsonDatosUsuario = JSON.stringify(userFound);
        await AsyncStorage.setItem("@dataUsuario", jsonDatosUsuario);
        showToast("Data saved and loaded");
        setTimeout(() => {
          router.navigate("/(tabs)/Home");
          setLoading(false);
        }, 3000);
      } else {
        setTimeout(() => {
          showToast("Data not found, please try again!");
          setLoading(false);
        }, 3000);
      }
    } catch (e) {
      setLoading(false);
      console.error("Data not found", e);
    }
  };

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
                onPress={() =>
                  router.replace("/screen/login/ResetPasswordScreen")
                }
              >
                <Text style={styles.forgot}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <Button onPress={handleSubmit} mode="contained" disable={loading}>
              {!loading ? (
                "Login"
              ) : (
                <ActivityIndicator animating={true} color={MD2Colors.blue600} />
              )}
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => router.replace("/screen/login/RegisterScreen")}
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
