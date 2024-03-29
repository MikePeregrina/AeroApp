import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SearchBar } from "react-native-elements";
import RecommendRoutes from "./RecommendRoutes";
import Buttons from "./Buttons";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalContext } from "@/context/GlobalProvider";
import { useFocusEffect } from "@react-navigation/native";
import tw from "twrnc";

const Welcome = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { obtenerDatosUsuario, data } = React.useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      obtenerDatosUsuario();
    }, [])
  );

  return (
    <ScrollView>
      <View>
        <View style={tw`w-full h-80`}>
          <Image
            style={tw`w-full h-full`}
            source={require("../../assets/images/homeElement.png")}
          />
          <View style={tw`relative bottom-19`}>
            <Button
              style={tw`bg-[#fec400] w-[44%] mr-auto ml-16`}
              labelStyle={{ color: "#2e3532", fontWeight: "700" }}
            >
              Clase muestra gratuita
            </Button>
          </View>
        </View>
        <View style={tw`mb-3`}>
          <Text style={tw`mx-[15%] text-xl font-bold`}>
            El aprendizaje personalizado a tus
            <Text style={tw`text-2xl`}> NECESIDADES</Text>
          </Text>
          <Text style={tw`mx-[15%] text-[10.1px] text-[#4f7cac]`}>
            Accede a diferentes cursos con un mentor por videollamada
          </Text>
        </View>
        <Buttons />
        <View style={tw`items-center`}>
          <View style={tw`w-[90%] mt-7 mb-10`}>
            <SearchBar
              placeholder="¿Que deseas aprender?"
              onChangeText={setSearchQuery}
              value={searchQuery}
              platform="android"
              containerStyle={{
                width: "100%",
                height: 35,
                backgroundColor: "#D7F9FF",
                borderRadius: 50,
                justifyContent: "center",
                paddingHorizontal: 10,
              }}
            />
          </View>
        </View>
        <RecommendRoutes />
        <View style={tw`my-10`}>
          <Button
            buttonColor="#4f7cac"
            style={tw`w-[70%] mx-auto`}
            labelStyle={{ color: "#fec400" }}
            mode="contained"
            onPress={() => router.navigate("/screen/vercursomaster/VerCursos")}
          >
            Areas de aprendizaje
          </Button>
        </View>
        <View style={tw`bg-[#2E3532] py-3`}>
          <View style={"content"}>
            <View style={tw`flex-row mx-[10%]`}>
              <View style={tw`w-45 h-33 m-0 p-0`}>
                <Image
                  style={tw`w-full h-full`}
                  source={require("../../assets/images/app elementos-10.png")}
                />
              </View>
              <View>
                <Text style={tw`text-[#FFFFFF] my-auto font-bold`}>
                  Personalizacion
                </Text>
              </View>
            </View>
            <View>
              <Text style={tw`text-[#FFFFFF] my-auto text-[15px] mx-[17%]`}>
                En wido aprendes en vivo de forma personalizada con un Master
                Teatch
              </Text>
            </View>
          </View>
          <View style={tw`my-5`}>
            <View style={tw`flex-row-reverse mx-[10%]`}>
              <View style={tw`w-45 h-33 m-0 p-0`}>
                <Image
                  style={tw`w-full h-full`}
                  source={require("../../assets/images/app elementos-11.png")}
                />
              </View>
              <View style={tw`w-35 my-auto`}>
                <Text style={tw`text-[#FFFFFF] ml-auto font-bold`}>
                  Cursos / Asesorias
                </Text>
                <Text style={tw`text-[#FFFFFF] ml-auto font-bold`}>
                  escolares y
                </Text>
                <Text style={tw`text-[#FFFFFF] ml-auto font-bold`}>
                  laborales
                </Text>
              </View>
            </View>
            <View>
              <Text style={tw`text-[#FFFFFF] my-auto text-[15px] mx-[15%]`}>
                Accede a cursos y asesorias de acuerdo a{" "}
                <Text style={tw`font-bold`}>tus objetivos y tiempos</Text>
              </Text>
            </View>
          </View>
          <View style={tw`my-5`}>
            <View style={tw`flex-row mx-[10%]`}>
              <View style={tw`w-45 h-33 m-0 p-0`}>
                <Image
                  style={tw`w-full h-full`}
                  source={require("../../assets/images/app elementos-12.png")}
                />
              </View>
              <View style={tw`w-35 my-auto`}>
                <Text style={tw`text-[#FFFFFF] mr-auto ml-3 font-bold`}>
                  Nos
                </Text>
                <Text style={tw`text-[#FFFFFF] mr-auto ml-3 font-bold`}>
                  adaptamos
                </Text>
                <Text style={tw`text-[#FFFFFF] mr-auto ml-3 font-bold`}>
                  a ti
                </Text>
              </View>
            </View>
            <View>
              <Text style={tw`text-[#FFFFFF] my-auto text-[15px] mx-[20%]`}>
                En Wido nos adaptamos a tus objetivos de aprendizaje y al nivel
                que tengas en cada curso creando un temario ideal para ti.
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <View>
            <View style={tw`w-45 h-45 mx-auto rounded-full`}>
              <Image
                style={tw`w-full h-full rounded-full`}
                source={{
                  uri: "https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2020/04/CATHO_Blog-Guia-home-office-1200x900.png",
                }}
              />
            </View>
            <View>
              <Text style={tw`text-xl mx-auto my-3`}>Cursos GRATIS</Text>
            </View>
            <View>
              <Text style={tw`text-base mx-auto mx-[3.3rem]`}>
                Cursos OnDemand totalmente gratis.
              </Text>
              <Text style={tw`text-base mx-auto mx-[3.3rem]`}>
                En Wido a diferencia de otras plataformas nuestros cursos
                grabados no tienen costotemario ideal para ti.
              </Text>
            </View>
          </View>
          <View style={tw`mt-10`}>
            <View style={tw`w-45 h-45 mx-auto rounded-full`}>
              <Image
                style={tw`w-full h-full rounded-full`}
                source={{
                  uri: "https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2020/04/CATHO_Blog-Guia-home-office-1200x900.png",
                }}
              />
            </View>
            <View>
              <Text style={tw`text-xl mx-auto my-3`}>
                Conecta con tu Master Teach
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;
