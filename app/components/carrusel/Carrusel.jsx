import * as React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Cards from "./Card";
import datos from "../datos";

const Carrusel = () => {
  const { width: screenWidth } = Dimensions.get("window");
  const cardWidth = screenWidth * 0.8;
  const horizontalMargin = (screenWidth - cardWidth) / 2;

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={screenWidth}
        height={300}
        data={datos}
        scrollAnimationDuration={500}
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
            <Cards curso={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Carrusel;
