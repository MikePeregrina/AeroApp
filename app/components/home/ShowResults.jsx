import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
import { ScrollView } from "react-native-gesture-handler";

const ShowResults = ({ results, isVisible }) => {
  return (
    <>
      {isVisible && results.length > 0 ? (
        <View
          style={tw`bg-[#FFFFFF] w-full mt-5 absolute top-5 rounded-xl max-h-75 h-auto z-20 shadow-md`}
        >
          <ScrollView>
            <View>
              {results.map((result, index) => (
                <View key={index} style={tw`w-full h-11 my-2 flex-row`}>
                  <View style={tw`w-10 h-10 ml-3`}>
                    <Image
                      style={tw`w-full h-full`}
                      source={{
                        uri: result.imgUrl,
                      }}
                    />
                  </View>
                  <View style={tw`mx-3`}>
                    <Text style={tw`text-[13px] font-bold`}>
                      {result.description}
                    </Text>
                    <Text style={tw`text-[12px] text-slate-400`}>
                      {result.title}
                    </Text>
                  </View>
                </View>
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
