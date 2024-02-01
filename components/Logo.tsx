// Logo.js
import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image source={require("../assets/images/logo.jpeg")} style={styles.logo} />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 50,
    resizeMode: "contain",
  },
});

export default Logo;
