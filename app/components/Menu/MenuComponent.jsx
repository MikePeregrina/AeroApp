import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import tw from "twrnc";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const MenuComponent = ({ onPress }) => {
  const toggleAnim = useSharedValue(0);

  const springConfig = {
    mass: 1,
    velocity: 0,
    stiffness: 250,
    damping: 45,
  };

  const handlePress = () => {
    if (toggleAnim.value) {
      toggleAnim.value = withSpring(0, springConfig);
    } else {
      toggleAnim.value = withSpring(1, springConfig);
    }
    // onPress();
  };

  const centerLineTransform = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(toggleAnim.value, [0, 1], [0, -45])}deg`,
        },
      ],
    };
  });

  const topLineTransform = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: -13.5,
        },
        {
          rotate: `${interpolate(toggleAnim.value, [0, 1], [0, 45])}deg`,
        },
        {
          translateX: interpolate(toggleAnim.value, [0, 1], [13.5, 16]),
        },
      ],
    };
  });

  const bottomLineTransform = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: 13.5,
        },
        {
          rotate: `${interpolate(toggleAnim.value, [0, 1], [0, 45])}deg`,
        },
        {
          translateX: interpolate(toggleAnim.value, [0, 1], [-13.5, -16]),
        },
      ],
    };
  });

  return (
    <View style={tw`flex-1 items-center justify-center mr-5`}>
      <TouchableWithoutFeedback
        onPress={handlePress}
        style={tw`relative w-20 bg-white h-20 rounded-xl flex justify-center items-center`}
      >
        <View style={tw`flex flex-col`}>
          <Animated.View
            style={[tw`flex flex-row justify-start`, topLineTransform]}
          >
            <View style={tw`h-1.5 w-5 rounded-md bg-blue-700 mb-1.5`} />
          </Animated.View>

          <Animated.View
            style={[tw`h-1.5 w-10 rounded-md bg-blue-700`, centerLineTransform]}
          />
          <Animated.View
            style={[tw`flex flex-row justify-end`, bottomLineTransform]}
          >
            <View style={tw`h-1.5 w-5 rounded-md bg-blue-700 mt-1.5`} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MenuComponent;
