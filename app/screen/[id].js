import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Stack, useGlobalSearchParams } from "expo-router";
import data from "@/components/data";
import CustomModal from "@/components/CustomModal";
import { useState } from "react";

const DetailScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    setModalVisible(false);
  };

  const params = useGlobalSearchParams();
  const idRuta = parseInt(params.id);
  const searchValue = data.find((ruta) => ruta.id === idRuta);

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Details",
        }}
      />
      <View>
        <Image
          source={{ uri: searchValue.imgUrl }}
          style={{ width: "100%", height: 220 }}
        />
      </View>
      <View style={{ margin: 20 }}>
        <View>
          <Text style={styles.title}>{searchValue.title}</Text>
          <Text style={styles.subtitle}>{searchValue.description}</Text>
        </View>
        <View>
          <Text style={styles.description}>{searchValue.body}</Text>
        </View>
        <View>
          <Text style={styles.price}>MX${searchValue.prize}</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => setModalVisible(true)}
            title="Muestra Gratis"
            color={"red"}
          />
        </View>
        <Button onPress={() => setModalVisible(true)} title="Comprar Curso" />
        <CustomModal
          visible={modalVisible}
          text="Debes Iniciar Sesion"
          onClose={() => {
            setModalVisible(false);
          }}
          onButtonClick={handleClick}
        />
        <View>
          <Text style={styles.learn}>Que aprenderas?</Text>
          <Text style={{ fontSize: 15, marginVertical: 5 }}>
            {" "}
            -- {searchValue.learn}
          </Text>
        </View>
        <View>
          <Text style={styles.learn}>Requisitos?</Text>
          <Text style={{ fontSize: 15, marginVertical: 5 }}>
            {searchValue.Requirements}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "900",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  description: {
    fontSize: 15,
    marginVertical: 10,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  learn: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "900",
  },
});

export default DetailScreen;
