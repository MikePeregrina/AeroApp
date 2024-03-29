import { GlobalProvider } from "@/context/GlobalProvider";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
}
