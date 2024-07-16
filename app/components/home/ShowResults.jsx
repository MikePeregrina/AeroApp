import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";

const baseUrl = "https://widolearn.com/public/";

const ShowResults = ({ results, isVisible }) => {
  const handleLogin = (datos) => {
    router.navigate({
      pathname: "/screen/comprarcurso/HomeCursoSreen",
      params: datos,
    });
  };

  return (
    <>
      {isVisible && results.length > 0 ? (
        <View
          style={tw`bg-[#FFFFFF] w-full mt-5 absolute top-5 rounded-xl max-h-75 h-auto z-20 shadow-md`}
        >
          <ScrollView>
            <View>
              {results.map((result, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleLogin(result)}
                >
                  <View style={tw`w-full h-11 my-2 flex-row`}>
                    <View style={tw`w-10 h-10 ml-3`}>
                      <Image
                        style={tw`w-full h-full`}
                        source={{
                          uri: `${baseUrl}${result.foto}`,
                        }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={tw`mx-3`}>
                      <Text style={tw`text-[13px] font-bold m-auto`}>
                        {result.nombre}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ShowResults;
