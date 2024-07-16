// utils/toastUtils.js

import Toast from "react-native-toast-message";

export const showToast = (type, texto1, texto2) => {
  Toast.show({
    type: type,
    text1: `${texto1}`,
    text2: texto2,
    position: "top",
  });
};
