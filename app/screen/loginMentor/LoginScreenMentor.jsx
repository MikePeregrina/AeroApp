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
import TextInput from "../../components/login/TextInput";
import { theme } from "../../components/login/theme";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import IMAGE from "../../assets/login/wido app-08.png";
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
    const data = { correo: email, contrasena: password };
    setLoading(true);
    try {
      const res = await fetchData(
        "https://www.widolearn.com/index.php?c=Docentes&a=loginApp",
        { method: "POST", data: JSON.stringify(data) }
      );
      if (res) {
        await AsyncStorage.setItem("@mentor", JSON.stringify(res));
        showToast(
          "success",
          "En hora Buena ✅",
          `${res.message}, Bienvenido Mentor`
        );
        setTimeout(() => {
          router.replace({
            pathname: "/screen/loginMentor/Disponibilidad",
            params: res,
          });
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
      primary: "#D7F9FF",
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
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#D7F9FF" }}>
            ¡HOLA MASTER TEACH!
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
              <View style={{ marginVertical: 15 }}>
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
                  isPrimary={false}
                />
              </View>
              <View style={{ marginVertical: 15 }}>
                <TextInput
                  name="password"
                  label="Contraseña"
                  returnKeyType="done"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry
                  theme={theme}
                  isPrimary={false}
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
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <Button
                  onPress={handleSubmit}
                  style={{
                    backgroundColor: "#4F7CAC",
                    color: "#FEC400",
                  }}
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
    width: 250,
    height: 45,
    marginTop: "80%",
    marginBottom: "10%",
    borderWidth: 2,
    borderColor: "#D7F9FF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
