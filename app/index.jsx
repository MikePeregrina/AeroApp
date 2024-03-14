//** Ruta main */

import { Redirect } from "expo-router";
import Home from "./(tabs)/Home";

export default function Index() {
  return <Redirect href="/(tabs)/Home" />;
}
