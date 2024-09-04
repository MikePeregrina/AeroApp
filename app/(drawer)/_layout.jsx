import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import MyComponent from "./Accordion";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function Layout() {
  return (
    <StripeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={MyComponent}>
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: "Mis Cursos Activos",
              title: "",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </StripeProvider>
  );
}
