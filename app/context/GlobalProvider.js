import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [userData, setUserDate] = useState("");

  const obtenerDatosUsuario = async () => {
    try {
      const datosUsuario = await AsyncStorage.getItem("@dataUsuario");
      const datosUsuarioParseados =
        datosUsuario != null ? JSON.parse(datosUsuario) : null;

      setData(datosUsuarioParseados);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  const eliminarDatosUsuario = async () => {
    try {
      await AsyncStorage.removeItem("@dataUsuario");
      console.log("Datos del usuario eliminados de la caché");
    } catch (error) {
      console.error("Error al eliminar los datos del usuario:", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        obtenerDatosUsuario,
        eliminarDatosUsuario,
        setUserDate,
        userData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
