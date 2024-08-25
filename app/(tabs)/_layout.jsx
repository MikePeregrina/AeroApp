import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Cursos",
          tabBarIcon: () => <Ionicons name="book-outline" size={20} />,
        }}
      />
      <Tabs.Screen
        name="MisClases"
        options={{
          title: "Mis Clases",
          tabBarIcon: () => <Ionicons name="school-outline" size={20} />,
        }}
      />
      <Tabs.Screen
        name="Perfil"
        options={{
          title: "Perfil",
          tabBarIcon: () => <Ionicons name="person-outline" size={20} />,
        }}
      />
    </Tabs>
  );
}
