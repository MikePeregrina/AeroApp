import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "react-native-paper";
import RecommendRoutes from "./RecommendRoutes";
import Buttons from "./Buttons";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalContext } from "@/context/GlobalProvider";
import { useFocusEffect } from "@react-navigation/native";
import { Keyboard } from "react-native";
import tw from "twrnc";
import ShowResults from "./ShowResults";
import { SearchInput } from "./SearchInput";
import IMG from "../../assets/images/elementos-23.png";

const Welcome = () => {
  const { obtenerDatosUsuario, data } = React.useContext(GlobalContext);
  const [results, setResults] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardEventListener = (event) => {};
    Keyboard.addListener("keyboardDidShow", keyboardEventListener);
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow", keyboardEventListener);
    };
  }, []);

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
              Iniciar Sesion
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
            <SearchInput setResults={setResults} setIsVisible={setIsVisible} />
            <ShowResults results={results} isVisible={isVisible} />
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
        <View style={tw`py-3`}>
          <View style={tw`bg-[#2E3532] py-3`}>
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
          <View style={tw`bg-[#2E3532] p-3`}>
            <View style={tw`flex-row-reverse mx-[10%]`}>
              <View style={tw`w-45 h-33 ml-auto`}>
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
          <ImageBackground resizeMode="stretch" source={IMG}>
            <View style={tw`h-80`}>
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
                <Text style={tw`text-[#FFFFFF] my-auto text-[15px] mx-[15%] `}>
                  En Wido nos adaptamos a tus objetivos de aprendizaje y al
                  nivel que tengas en cada curso creando un temario ideal para
                  ti.
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View>
          <View>
            <View style={tw`w-45 h-45 mx-auto rounded-full`}>
              <Image
                style={tw`w-full h-full rounded-full`}
                source={require("../../assets/images/elementos-20.png")}
              />
            </View>
            <View>
              <Text style={tw`text-xl mx-auto my-3 text-[#4F7CAC] font-bold`}>
                Cursos GRATIS
              </Text>
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
                source={require("../../assets/images/elementos-21.png")}
              />
            </View>
            <View>
              <Text style={tw`text-xl mx-auto my-3 text-[#4F7CAC] font-bold`}>
                Conecta con tu Master Teach
              </Text>
              <Text style={tw`text-base mx-auto mx-[3.3rem]`}>
                No pierdas de vista a tus mentores favoritos. Podras estar en
                contacto con ellos de por vida por medio de nuestro sistema de
                suscripcion a los canales 100% gratis.
              </Text>
            </View>
          </View>
          <View style={tw`mt-10`}>
            <View style={tw`w-45 h-45 mx-auto rounded-full`}>
              <Image
                style={tw`w-full h-full rounded-full`}
                source={require("../../assets/images/elementos-22.png")}
              />
            </View>
            <View>
              <Text style={tw`text-xl mx-auto my-3 text-[#4F7CAC] font-bold`}>
                Obten recompensas
              </Text>
              <Text style={tw`text-base mx-auto mx-[3.3rem]`}>
                En Wido premiamos a nuestros estudiantes por medio de un sistema
                de gramificaion.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;
