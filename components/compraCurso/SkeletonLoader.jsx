import React from "react";
import { StyleSheet, View, Animated } from "react-native";

const SkeletonLoader = () => {
  const animatedOpacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const fadeIn = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedOpacity, {
            toValue: 0.5,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(animatedOpacity, {
            toValue: 0.2,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    fadeIn();
  }, [animatedOpacity]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.skeleton, { opacity: animatedOpacity }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  skeleton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    width: 120,
    height: 120,
    marginBottom: 10,
  },
});

export default SkeletonLoader;
