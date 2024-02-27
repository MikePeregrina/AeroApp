export const mockLogin = async (values) => {
  const { email, password } = values;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "correo@gmail.com" && password === "12345") {
        resolve({ success: true, message: "Login successful!" });
        console.log("Data correcta");
      } else {
        reject({ success: false, message: "Invalid username or password" });
      }
    }, 1000);
  });
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
