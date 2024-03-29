import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ToastAndroid,
  Text,
} from "react-native";
import Background from "../../components/login/Background";
import Button from "../../components/login/Button";
import { Button as FormButton } from "react-native-paper";
import TextInput from "../../components/login/TextInput";
import { theme } from "../../components/login/theme";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { users } from "../../components/MockApi";
import IMAGE from "../../assets/login/wido app-06.png";

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
    <Background image={IMAGE}>
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarTranslucent: true,
        }}
      />
      <View style={styles.tittle}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          ¡HOLA DE NUEVO!
        </Text>
      </View>
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
            <View style={{ alignItems: "center" }}>
              <Button
                onPress={handleSubmit}
                style={{ backgroundColor: "#4F7CAC", color: "#FEC400" }}
                mode="contained"
                disable={loading}
              >
                {!loading ? (
                  "Iniciar Sesion"
                ) : (
                  <ActivityIndicator animating={true} color={MD2Colors.white} />
                )}
              </Button>
            </View>
          </View>
        )}
      </Formik>
      <View>
        <View style={styles.row}>
          <Text>¿Aun no tienes cuenta? </Text>
          <TouchableOpacity
            onPress={() => router.replace("/screen/login/RegisterScreen")}
          >
            <Text style={styles.link}>Registrate aquí</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            top: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormButton
            style={{ backgroundColor: "#2E3532" }}
            labelStyle={{ color: "#FFFFFF" }}
          >
            Soy Master Teach
          </FormButton>
        </View>
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
    color: "#4F7CAC",
  },
  tittle: {
    width: 220,
    height: 40,
    marginTop: "80%",
    marginBottom: "10%",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
