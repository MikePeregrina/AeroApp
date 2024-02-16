import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "./theme";
import { useField } from "formik";

export default function TextInput({ errorText, description, ...props }) {
  const [field, meta] = useField(props);

  const inputStyle = [
    styles.input,
    meta.touched && meta.error ? styles.inputError : null,
  ];

  return (
    <View style={styles.container}>
      <Input
        style={inputStyle}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Text style={styles.error}>{meta.error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },

  inputError: {
    borderColor: theme.colors.error,
  },

  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
