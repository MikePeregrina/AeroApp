import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nombre demasiado corto!")
    .max(50, "Nombre demasiado largo!")
    .required("Campo Requerido"),

  email: Yup.string().email("Correo Incorrecto").required("Campo Requerido"),

  password: Yup.string().required("Campo Requerido"),

  age: Yup.number()
    .required("La edad es requerida")
    .positive("Inserte un valor positivo")
    .integer("Fecha incorrecta")
    .min(18, "La edad debe ser minimo de 18 años"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
});
