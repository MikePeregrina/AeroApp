import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "./theme";

export default function Button({ disable, mode, style, ...props }) {
  return (
    <PaperButton
      style={styles.button}
      disabled={disable}
      mode={mode}
      labelStyle={{ color: "#FEC400" }}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 20,
    backgroundColor: "#4F7CAC",
  },
});
