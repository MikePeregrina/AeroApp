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
import { Stack } from "expo-router";
import { SignupSchema } from "../../components/login/ValidationSchema";
import { users } from "../../components/MockApi";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Toast from "react-native-toast-message";
export default function LoginScreenMentor() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "En hora Buena ✅",
      text2: "Usuario Registrado Correctamente!",
      position: "top",
    });
  };

  const registerUser = async (userData) => {
    setLoading(true);
    try {
      users.push(userData);
      setTimeout(() => {
        showToast();
        setLoading(false);
      }, 3000);
    } catch (err) {
      setLoading(false);
      console.error("Error registering", err);
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
      <Header>Crear Cuenta Mentor</Header>
      <Toast />
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
              name="age"
              label="Edad"
              returnKeyType="next"
              onChangeText={handleChange("age")}
              onBlur={handleBlur("age")}
            />
            <TextInput
              name="phone"
              label="Telefono"
              returnKeyType="next"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
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
              style={{ marginTop: 24, backgroundColor: "#2196F3" }}
              disable={loading}
            >
              {!loading ? (
                "Registrarse"
              ) : (
                <ActivityIndicator animating={true} color={MD2Colors.blue600} />
              )}
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => router.navigate("/screen/login/LoginScreen")}
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
