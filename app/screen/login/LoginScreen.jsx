import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
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
import IMAGE from "../../assets/login/wido app-06.png";
import { fetchData } from "@/app/services/API";
import { showToast } from "@/app/utils/toastUtils";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Correo Incorrecto").required("Campo Requerido"),
    password: Yup.string().required("Campo Requerido"),
  });

  const mockLogin = async (values) => {
    const { email, password } = values;
    const data = { correo: email, contraseña: password };
    setLoading(true);
    try {
      const res = await fetchData(
        "https://www.widolearn.com/index.php?c=Usuarios&a=iniciarSesion",
        { method: "POST", data: JSON.stringify(data) }
      );
      if (res.success) {
        await AsyncStorage.setItem("@dataUsuario", JSON.stringify(res));
        showToast(
          "success",
          "En hora Buena ✅",
          `${res.message}, Welcome back!`
        );
        setTimeout(() => {
          router.navigate("/(tabs)/Home");
          setLoading(false);
        }, 3000);
      } else {
        showToast("error", "Oh no¡ ❌ ", `${res.message}`);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.error("Data not found", e);
    }
  };

  const theme = {
    colors: {
      primary: "#2E3532",
      underlineColor: "transparent",
      background: "transparent",
    },
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
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
        <Toast />
        <Formik
          initialValues={{ password: "", email: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => mockLogin(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ width: "100%" }}>
              <View style={{ marginBottom: 12 }}>
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
                  theme={theme}
                  isPrimary={true}
                />
              </View>
              <View>
                <TextInput
                  name="password"
                  label="Contraseña"
                  returnKeyType="done"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry
                  theme={theme}
                  isPrimary={true}
                />
              </View>
              <View style={styles.forgotPassword}>
                <TouchableOpacity
                  onPress={() =>
                    router.replace("/screen/login/ResetPasswordScreen")
                  }
                >
                  <Text style={styles.forgot}>Olvidates tu contraseña?</Text>
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
                    <ActivityIndicator
                      animating={true}
                      color={MD2Colors.white}
                    />
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
          <View>
            <FormButton
              style={{
                width: "80%",
                backgroundColor: "#2E3532",
                position: "absolute",
                top: 70,
                marginHorizontal: 23,
              }}
              labelStyle={{ color: "#FFFFFF" }}
              onPress={() =>
                router.replace("/screen/loginMentor/LoginScreenMentor")
              }
            >
              Soy Master Teach
            </FormButton>
          </View>
        </View>
      </Background>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
    marginTop: 3,
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
