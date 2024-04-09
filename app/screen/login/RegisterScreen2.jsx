import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Background from "../../components/login/Background";
import Button from "../../components/login/Button";
import { theme } from "../../components/login/theme";
import { router, Stack, useGlobalSearchParams } from "expo-router";
import { users } from "../../components/MockApi";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Toast from "react-native-toast-message";
import IMG from "../../assets/login/wido app-07.png";
import MultiSelectCheckbox from "@/app/components/login/MultiSelectCheckbox";

export default function RegisterScreen() {
  const form = useGlobalSearchParams();
  const [loading, setLoading] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  console.log(users);

  const data = [
    "Tecnologia",
    "Administracion",
    "Artes",
    "Programacion",
    "Diseño",
    "Videojuegos",
    "Finanzas",
  ];

  const showToast = (type, texto1, texto2) => {
    Toast.show({
      type: type,
      text1: `${texto1}`,
      text2: texto2,
      position: "top",
    });
  };

  const handleCheckboxToggle = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      if (selectedValues.length < 2) {
        setSelectedValues([...selectedValues, value]);
      } else {
        showToast(
          "error",
          "Oh no¡ ❌ ",
          "Solo puedes seleccionar dos intereses"
        );
      }
    }
  };

  const registerUser = async (checkbox, form) => {
    setLoading(true);
    const data = { ...form, intereses: checkbox, cursos: [] };
    try {
      users.push(data);
      setTimeout(() => {
        showToast(
          "success",
          "En hora Buena ✅",
          "Usuario Registrado Correctamente!"
        );
        setLoading(false);
      }, 4000);
    } catch (err) {
      setLoading(false);
      console.error("Error registering", err);
    }
  };

  return (
    <Background image={IMG}>
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarTranslucent: true,
        }}
      />
      <Toast />
      <View style={{ width: "100%", flex: 1 }}>
        <View style={styles.formContent}>
          <View style={styles.textContent}>
            <Text style={styles.oneText}>2</Text>
            <Text
              style={{
                color: "#D7F9FF",
                fontSize: 17,
                fontWeight: "bold",
                marginHorizontal: 25,
              }}
            >
              SELECCIONA TUS INTERESES
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 13,
              padding: 10,
              marginVertical: 8,
            }}
          >
            <MultiSelectCheckbox
              data={data}
              selectedValues={selectedValues}
              handleCheckboxToggle={handleCheckboxToggle}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Button
            onPress={() => registerUser(selectedValues, form)}
            mode="contained"
            disable={loading}
          >
            {!loading ? (
              "Registrarse"
            ) : (
              <ActivityIndicator animating={true} color={MD2Colors.white} />
            )}
          </Button>
        </View>
      </View>

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
  );
}

const styles = StyleSheet.create({
  row: {
    marginLeft: "auto",
    flexDirection: "column",
    marginTop: 4,
    marginBottom: 20,
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
