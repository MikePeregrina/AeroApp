import React, { createContext, useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [cursos, setCursos] = useState([]);
  const showToastRef = useRef(null);

  const newUser = () => {
    setUserData((prev) => ({
      ...prev,
      datos: data,
    }));
  };

  useEffect(() => {
    newUser();
  }, [data]);

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

  const toastConfirmacion = () => {
    if (showToastRef.current) {
      showToastRef.current();
    }
  };

  const eliminarDatosUsuario = async () => {
    try {
      await AsyncStorage.removeItem("@dataUsuario");
      setData(null);
      setUserData(null);
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
        setUserData,
        userData,
        cursos,
        setCursos,
        toastConfirmacion,
        showToastRef,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
