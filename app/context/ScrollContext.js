import { Redirect } from "expo-router";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState(false);
  const [data, setData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const mockLogin = async (values) => {
    const { email, password } = values;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "correo@gmail.com" && password === "12345") {
          resolve({ success: true, message: "Login successful!" });
          console.log("Data correcta");
          setData({
            name: "Arturo Garcia",
            correo: email,
            cursos: {
              id: 1,
              title: "Estructura de Datos",
              description: "Estructura de datos para iniciantes",
              body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
              prize: "180",
              learn: "Learn how to edit a video Interview",
              Requirements:
                "No video editinf or Premiere Pro Knowledge is necessary",
              imgUrl:
                "https://img-b.udemycdn.com/course/480x270/1693748_4c8f.jpg",
            },
          });
          setLoggedIn(true);
        } else {
          reject({ success: false, message: "Invalid username or password" });
        }
      }, 1000);
    });
  };

  return (
    <GlobalContext.Provider
      value={[globalVariable, setGlobalVariable, mockLogin, data]}
    >
      {children}
    </GlobalContext.Provider>
  );
};
