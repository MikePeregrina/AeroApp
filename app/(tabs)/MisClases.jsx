import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import IMG from "../assets/images/bookicon.jpg";
import { GlobalContext } from "@/context/GlobalProvider";
import { useContext, useEffect, useState } from "react";
import tw from "twrnc";

const MisClases = () => {
  const { data, userData } = useContext(GlobalContext);
  const [timerCount, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        if (lastTimerCount == 0) {
          console.log("Curso disponible");
        } else {
          lastTimerCount <= 1 && clearInterval(interval);
          return lastTimerCount - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      {userData.nombre === "" ? (
        <View>
          {data.cursos.map((item, index) => (
            <TouchableWithoutFeedback key={index} activeOpacity={0.9}>
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                </View>
                <View style={styles.contentContainer}>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={tw`justify-center`}>
                  {timerCount == 0 ? (
                    <View>
                      <Text style={tw`font-bold text-[12px]`}>
                        Mentor asignado
                      </Text>
                      <Text style={tw`text-center text-[12px]`}>
                        {item.mentor}
                      </Text>
                    </View>
                  ) : (
                    <View>
                      <Text>Tu curso Inicia en:</Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {timerCount}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      ) : (
        <View>
          <View style={{ width: "100%", height: 300 }}>
            <Image style={{ width: "100%", height: 250 }} source={IMG} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: 700 }}>
              Que aprenderas primero?
            </Text>
            <Text style={{ fontSize: 17, marginVertical: 6 }}>
              Tus cursos apareceran aqui.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  imageContainer: {
    width: 120,
    height: 100,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  description: {
    fontWeight: "700",
    fontSize: 12,
  },
});

export default MisClases;
