import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Carrousel  from '@/components/Carrousel';

const Welcome = () => {
  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.title}>Hello Alumno</Text>
        <Text style={styles.subTittle}>Encuentra Tu Curso Ideal</Text>
      </View>
      <View>
        <Carrousel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 20,
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#bebeba",
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 3,
  },
  subTittle: {
    marginBottom: 3,
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Welcome;
