import React from "react";
import { View, StyleSheet } from "react-native";
import Circle from "./Circle";
import { CarrouselIndicatorProps } from "../interfaces";

const CarrouselIndicatorAnimated = ({
  quantity,
  activeImage,
}: CarrouselIndicatorProps) => {
  const indicators = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.container}>
      {indicators.slice(0, quantity).map((_, index) => {
        return (
          <Circle
            key={String(index)}
            {...{ index, activeImage }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default CarrouselIndicatorAnimated;
