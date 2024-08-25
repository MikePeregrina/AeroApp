import React from "react";
import { ActivityIndicator, View } from "react-native";

const SkeletonCard = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ marginVertical: "auto", marginHorizontal: "auto" }}>
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
};

export default SkeletonCard;
