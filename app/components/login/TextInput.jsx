import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "./theme";
import { useField } from "formik";

export default function TextInput({ description, isPrimary, ...props }) {
  const [field, meta] = useField(props);

  const primary = {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 1,
  };
  const secondary = {
    borderColor: "#D7F9FF",
  };

  return (
    <View style={styles.container}>
      <Input
        style={[styles.input, isPrimary ? primary : secondary]}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="flat"
        {...props}
      />
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {meta.touched && meta.error ? (
        <Text style={styles.error}>{meta.error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  inputError: {
    borderColor: theme.colors.error,
  },

  input: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
