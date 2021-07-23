import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { CircleProps } from "../interfaces";

const Circle = ({ index, activeImage }: CircleProps) => {
  const grey = "rgb(168, 168, 168)";
  const blue = "rgb(0, 149, 246)";

  const animation = useDerivedValue(() => {
    return withTiming(activeImage.value);
  });

  const style = useAnimatedStyle(() => {
    const inputRange = [
      index - 4,
      index - 3,
      index - 2,
      index - 1,
      index,
      index + 1,
      index + 2,
      index + 3,
      index + 4,
    ];

    const radius = interpolate(
      animation.value,
      inputRange,
      [0, 3, 4, 6, 6, 6, 4, 3, 0]
    );

    return {
      width: radius,
      height: radius,
      backgroundColor:
        index === activeImage.value ? blue : grey,
    };
  });

  return <Animated.View style={[styles.circle, style]} />;
};

const styles = StyleSheet.create({
  circle: {
    marginHorizontal: 2,
    borderRadius: 3,
  },
});

export default Circle;
