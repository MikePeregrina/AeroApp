import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  //** Logo de la barra lateral  */
  return (
    <Image
      source={require("../../assets/images/logo.jpg")}
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 80,
    resizeMode: "contain",
  },
});

export default Logo;
