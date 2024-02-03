import { SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Welcome from "@/app/screen/Welcome";
import { UserProvider } from "./context/useContext";

export default function TabOneScreen() {
  return (
    <UserProvider>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerShadowVisible: true,
            headerTitle: "Aerobot Learning",
          }}
        />
        <Welcome />
      </SafeAreaView>
    </UserProvider>
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
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
});
