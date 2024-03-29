import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nombre demasiado corto!")
    .max(50, "Nombre demasiado largo!")
    .required("Campo Requerido"),

  email: Yup.string().email("Correo Incorrecto").required("Campo Requerido"),

  password: Yup.string().required("Campo Requerido"),

  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(18, "Age must be at least 18 years old"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
});
