import * as React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";

import Cards from "./Card";
import datos from "../datos";

const Carrusel = () => {
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [pagingEnabled, setPagingEnabled] = React.useState(false);
  const [snapEnabled, setSnapEnabled] = React.useState(false);
  const [verticalScrollEnabled, setVerticalScrollEnabled] =
    React.useState(true);
  const { width: screenWidth } = Dimensions.get("window");
  const cardWidth = screenWidth * 0.8;
  const horizontalMargin = (screenWidth - cardWidth) / 2;

  const handleGestureEvent = (event) => {
    const { translationX, translationY, state } = event.nativeEvent;
    if (Math.abs(translationX) > Math.abs(translationY)) {
      setVerticalScrollEnabled(false); // Deshabilita el scroll vertical si el desplazamiento es horizontal
    } else {
      if (state === State.END) {
        setVerticalScrollEnabled(true); // Restaura el scroll vertical al final del gesto
      }
    }
  };

  const handleScrollEvent = (event) => {
    console.log("Scroll vertical");
  };

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={handleGestureEvent}
        shouldCancelWhenOutside={false}
      >
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={screenWidth}
            height={300}
            data={datos}
            scrollAnimationDuration={1000}
            pagingEnabled={pagingEnabled}
            snapEnabled={snapEnabled}
            autoPlay={autoPlay}
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
            scrollEnabled={verticalScrollEnabled} // Controla el scroll vertical habilitándolo o deshabilitándolo
            onScroll={handleScrollEvent} // Maneja el evento de scroll vertical
          />
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Carrusel;
