import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";

const MenuDeslizable = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const menuHeight = new Animated.Value(0);

  const data = [
    { id: "1", text: "Opción 1" },
    { id: "2", text: "Opción 2" },
    { id: "3", text: "Opción 3" },
    // Agrega más opciones según sea necesario
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    Animated.timing(menuHeight, {
      toValue: menuOpen ? 0 : 150, // Ajusta la altura del menú según sea necesario
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
    // Aquí puedes realizar cualquier acción al seleccionar una opción del menú
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.button}>
        <Text>
          {selectedOption ? selectedOption.text : "Seleccionar opción"}
        </Text>
      </TouchableOpacity>
      <Animated.View style={[styles.menu, { height: menuHeight }]}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleOptionPress(item)}
              style={styles.option}
            >
              <Text>{item.text}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  button: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginBottom: 10,
  },
  menu: {
    backgroundColor: "lightgrey",
    borderRadius: 5,
    overflow: "hidden", // Para ocultar el contenido que excede la altura
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default MenuDeslizable;
