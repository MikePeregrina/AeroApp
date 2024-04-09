import React, { useState } from "react";
import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";

const MultiSelectCheckbox = ({
  data,
  handleCheckboxToggle,
  selectedValues,
}) => {
  return (
    <View>
      {data.map((value, index) => (
        <CheckBox
          key={index}
          title={`${value}`}
          textStyle={{ color: "#D7F9FF", fontSize: 17 }}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            margin: 0,
          }}
          uncheckedColor={"#D7F9FF"}
          checkedColor={"#D7F9FF"}
          checked={selectedValues.includes(value)}
          onPress={() => handleCheckboxToggle(value)}
        />
      ))}
    </View>
  );
};

export default MultiSelectCheckbox;
