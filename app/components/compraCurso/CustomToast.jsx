// CustomToast.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CustomToast = () => {
  return (
    <View style={styles.toastContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/POPAGENDADO.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    width: 350,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default CustomToast;
