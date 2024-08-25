import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../../components/login/Background";
import Button from "../../components/login/Button";
import { theme } from "../../components/login/theme";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { Stack } from "expo-router";
import { SignupSchema } from "../../components/login/ValidationSchema";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import IMG from "../../assets/login/wido app-07.png";
import TextInput from "@/app/components/login/TextInput";

export default function RegisterScreen() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const theme = {
    colors: {
      primary: "#D7F9FF",
      color: "#D7F9FF",
      underlineColor: "transparent",
      background: "transparent",
      error: "red",
    },
  };

  const registerUser = async (userData) => {
    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
        router.navigate({
          pathname: "/screen/login/RegisterScreen2",
          params: userData,
        });
      }, 2000);
    } catch (err) {
      setLoading(false);
      console.error("Datos incorrectos", err);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Background image={IMG}>
        <Stack.Screen
          options={{
            headerShown: false,
            statusBarTranslucent: true,
          }}
        />
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
            age: "",
            phone: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => registerUser(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, resetForm }) => (
            <View style={{ width: "100%", flex: 1 }}>
              <View style={styles.formContent}>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      width: "80%",
                      borderWidth: 1,
                      borderColor: "#D7F9FF",
                      color: "#D7F9FF",
                      fontWeight: "bold",
                      fontSize: 20,
                      padding: 13,
                      borderRadius: 30,
                      textAlign: "center",
                    }}
                  >
                    Crear una cuenta
                  </Text>
                </View>
                <View style={styles.textContent}>
                  <Text style={styles.oneText}>1</Text>
                  <Text
                    style={{
                      color: "#D7F9FF",
                      fontSize: 17,
                      fontWeight: "bold",
                      marginHorizontal: 25,
                    }}
                  >
                    Datos Personales
                  </Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 13,
                    padding: 10,
                    marginVertical: 8,
                  }}
                >
                  <TextInput
                    name="name"
                    label="Nombre completo"
                    returnKeyType="done"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    theme={theme}
                    isPrimary={false}
                    textColor={"#D7F9FF"}
                  />
                  <TextInput
                    name="age"
                    label="Edad"
                    returnKeyType="done"
                    onChangeText={handleChange("age")}
                    onBlur={handleBlur("age")}
                    theme={theme}
                    isPrimary={false}
                    textColor={"#D7F9FF"}
                  />
                  <TextInput
                    name="email"
                    label="Correo electronico"
                    returnKeyType="done"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    theme={theme}
                    isPrimary={false}
                    textColor={"#D7F9FF"}
                  />
                  <TextInput
                    name="phone"
                    label="Whatsapp"
                    returnKeyType="done"
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    theme={theme}
                    isPrimary={false}
                    textColor={"#D7F9FF"}
                  />
                  <TextInput
                    name="password"
                    label="Contraseña"
                    returnKeyType="done"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    secureTextEntry
                    theme={theme}
                    isPrimary={false}
                    textColor={"#D7F9FF"}
                  />
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Button
                  onPress={handleSubmit}
                  mode="contained"
                  disable={loading}
                >
                  {!loading ? (
                    "Siguiente"
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
        <View style={styles.row}>
          <Text style={{ color: "#4f7cac", fontSize: 12 }}>
            Ya tienes una cuenta?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => router.navigate("/screen/login/LoginScreen")}
          >
            <Text style={styles.link}>Iniciar sesion</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  row: {
    marginLeft: "auto",
    flexDirection: "column",
    top: "95%",
    left: "70%",
    position: "absolute",
  },
  link: {
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: 12,
    color: theme.colors.primary,
  },
  formContent: {
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 14,
    marginTop: 80,
    marginBottom: 30,
  },
  textContent: {
    alignItems: "center",
    marginTop: 3,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  oneText: {
    width: 50,
    height: 50,
    backgroundColor: "#D7F9FF",
    color: "rgba(0, 0, 0, 0.8)",
    borderRadius: 100,
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 0,
  },
});
