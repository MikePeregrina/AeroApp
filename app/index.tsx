import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Welcome from "../components/Welcome";
import Logo from "../components/Logo";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#000000" },
          headerShadowVisible: false,
          headerTitle: (props) => <Logo />,
        }}
      />
      <Welcome />
    </SafeAreaView>
  );
}
