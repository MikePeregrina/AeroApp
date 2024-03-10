import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const user = {
  name: "Arturo Garcia",
  correo: "correo@getNormalizedStatePath.com",
  cursos: {
    id: 1,
    title: "Estructura de Datos",
    description: "Estructura de datos para iniciantes",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    prize: "180",
    learn: "Learn how to edit a video Interview",
    Requirements: "No video editinf or Premiere Pro Knowledge is necessary",
    imgUrl: "https://img-b.udemycdn.com/course/480x270/1693748_4c8f.jpg",
  },
};

export const mockLogin = async (values) => {
  const { email, password } = values;
  try {
    if (email === "correo@gmail.com" && password === "12345") {
      const jsonDatosUsuario = JSON.stringify(user);
      await AsyncStorage.setItem("@dataUsuario", jsonDatosUsuario);
      console.log("Data save and load");
      setTimeout(() => {
        const navigation = useNavigation();
        navigation.navigate("Home");
      }, 2000);
    }
  } catch (e) {
    console.error("Date not found", e);
  }
};

export const mockRegister = async (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (values.email && values.password) {
        resolve({ success: true, message: "Registration successful!" });
      } else {
        reject({
          success: false,
          message: "Please provide valid email and password",
        });
      }
    }, 1000);
  });
};
