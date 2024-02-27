import * as React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Cards from "./Card";
import datos from "../datos";
import { PanGestureHandler } from "react-native-gesture-handler";

const Carrusel = () => {
  const { width: screenWidth } = Dimensions.get("window");
  const cardWidth = screenWidth * 0.8;
  const horizontalMargin = (screenWidth - cardWidth) / 2;

  const handleGestureEvent = ({ nativeEvent }) => {
    const { translationX, translationY } = nativeEvent;

    // Detectamos el gesto de desplazamiento
    if (Math.abs(translationX) > Math.abs(translationY)) {
      console.log("Gesto de desplazamiento horizontal detectado");
    } else {
      console.log("Gesto de desplazamiento vertical detectado");
    }
  };

  return (
    <PanGestureHandler onGestureEvent={handleGestureEvent}>
      <View style={{ flex: 1 }}>
        <Carousel
          loop
          width={screenWidth}
          height={300}
          data={datos}
          scrollAnimationDuration={1000}
          pagingEnabled={false}
          snapEnabled={false}
          autoPlay={false}
          mode={"parallax"}
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 90,
          }}
          renderItem={({ item }) => (
            <View
              style={{
                width: 270,
                marginHorizontal: horizontalMargin,
              }}
            >
              <Cards products={item} />
            </View>
          )}
        />
      </View>
    </PanGestureHandler>
  );
};

export default Carrusel;
