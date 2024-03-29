import React from "react";
import Toast from "react-native-toast-message";

const CustomToast = React.forwardRef(({ type, text1, text2, ...rest }, ref) => (
  <Toast
    {...rest}
    text1={text1}
    text2={text2}
    visibilityTime={3000}
    autoHide
    topOffset={30}
    bottomOffset={40}
    textStyle={{ fontSize: 15 }}
    transition={{ fade: true }}
    position="bottom"
    type={type}
    style={{ backgroundColor: type === "error" ? "red" : "green" }}
    ref={ref} // Forward the ref to the Toast component
  />
));

export default CustomToast;
