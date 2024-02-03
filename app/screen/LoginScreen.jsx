import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useUserContext } from "../context/useContext";

const LoginScreen = () => {
  const { dispatch } = useUserContext();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "") {
      dispatch({
        type: "SET_USER",
        payload: { username },
      });
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
