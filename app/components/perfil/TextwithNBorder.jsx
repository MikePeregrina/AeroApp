import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";

const TextwithNBorder = ({ name, descripcion }) => {
  return (
    <View style={tw`relative bottom-20`}>
      <View style={tw`h-54 bg-transparent`}>
        <View
          style={tw`z-10 absolute rounded-2xl border-l-[3px] border-t-[3px] border-b-[3px] border-[#4F7CAC] h-full w-1/2`}
        ></View>

        <Text style={tw`mt-16 text-[#FEC400] font-bold text-base mb-2 ml-5`}>
          ¡Hola, soy {name}!
        </Text>
        <View style={tw`mb-6 mb-auto mx-8`}>
          <Text style={tw`mb-6 mb-auto mx-auto text-[13px]`}>
            {descripcion}
          </Text>
        </View>
        <View style={tw`mx-auto relative`}>
          <View
            style={tw`w-4 h-4 rounded-full bg-[#4F7CAC] bottom-[-6px] left-[-6px]`}
          ></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {},
});

export default TextwithNBorder;
