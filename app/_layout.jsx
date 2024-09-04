import { GlobalProvider } from "@/context/GlobalProvider";
import { Stack } from "expo-router";
import Drawer from "expo-router/drawer";
import { RootSiblingParent } from "react-native-root-siblings";

export default function Layout() {
  return (
    <RootSiblingParent>
      <GlobalProvider>
        <Stack>
          <Stack.Screen
            name="(drawer)"
            options={{ headerShown: false, title: "Home" }}
          />
        </Stack>
      </GlobalProvider>
    </RootSiblingParent>
  );
}
