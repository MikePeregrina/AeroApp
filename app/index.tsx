import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Welcome from "@/screen/Welcome";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: true,
          headerTitle: "Aerobot Learning",
        }}
      />
      <Welcome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,

    // Sombras para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,

    // Sombras para Android
    elevation: 2,

    // Para agregar sombra solo en la parte inferior
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
});
