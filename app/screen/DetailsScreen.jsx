import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: true,
          headerTitle: "Detalles del Curso",
        }}
      />
      <View>
        <Text style={{ fontWeight: "bold", marginHorizontal: 20 }}>
          Bienvenido al curso
        </Text>
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <Button
            color={"red"}
            title="Clase muestra"
            onPress={handleButtonClick}
          />
        </View>
        <Button title="Comprar Curso" onPress={handleButtonClick} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Text>Contenido del Modal</Text>
              <Button title="Cerrar" onPress={handleCloseModal} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
