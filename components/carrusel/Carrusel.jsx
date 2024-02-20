import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Cards from "./Card";

const Carrusel = ({ typeMode }) => {
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [pagingEnabled, setPagingEnabled] = React.useState(true);
  const [snapEnabled, setSnapEnabled] = React.useState(true);

  const { width: screenWidth, height: screenHeigth } = Dimensions.get("window");
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={screenWidth}
        height={350}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={autoPlay}
        mode={typeMode}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              marginHorizontal: 15,
              justifyContent: "center",
            }}
          >
            <Cards />
          </View>
        )}
      />
    </View>
  );
};

export default Carrusel;
