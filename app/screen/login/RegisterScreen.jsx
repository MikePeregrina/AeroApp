import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Background from "../../components/login/Background";
import Button from "../../components/login/Button";
import { theme } from "../../components/login/theme";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { Stack } from "expo-router";
import { SignupSchema } from "../../components/login/ValidationSchema";
import { users } from "../../components/MockApi";
import { ActivityIndicator, MD2Colors, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import MultiSelectComponent from "@/app/components/login/MultiSelectComponent";
import IMG from "../../assets/login/wido app-07.png";

export default function RegisterScreen() {
  const [loading, setLoading] = React.useState(false);
  const [select, setSelect] = React.useState(false);
  const [text, setText] = React.useState("");
  const router = useRouter();

  const handleSelect = (selectItems) => {
    setSelect(selectItems);
  };

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
    <ScrollView>
      {/* <Background image={IMG}> */}
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarTranslucent: true,
        }}
      />
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
          <View style={{ width: "100%", flex: 1 }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                padding: 14,
                marginVertical: 80,
              }}
            >
              <Text style={{ color: "#FFFFFF", text }}>Crear Cuenta</Text>
              <TextInput
                label="Email"
                value={text}
                onChangeText={(text) => setText(text)}
              />
              <TextInput
                label="Email"
                value={text}
                onChangeText={(text) => setText(text)}
              />
              <TextInput
                label="Email"
                value={text}
                onChangeText={(text) => setText(text)}
              />
            </View>
            {/* <MultiSelectComponent onSelectChange={handleSelect} /> */}
            <Button
              onPress={handleSubmit}
              mode="contained"
              style={{ marginTop: 24, backgroundColor: "#2196F3" }}
              disable={loading}
            >
              {!loading ? (
                "Sign Up"
              ) : (
                <ActivityIndicator animating={true} color={MD2Colors.white} />
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
      {/* </Background> */}
    </ScrollView>
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
