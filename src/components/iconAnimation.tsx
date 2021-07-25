import Animated from "react-native-reanimated";
import {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const iconAnimation = (
  isLiked: Animated.SharedValue<boolean>
) => {
  const iconFilled = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(isLiked.value ? 1 : 0, {
            duration: 200,
            easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
          }),
        },
      ],
      opacity: withTiming(isLiked.value ? 1 : 0, {
        duration: 200,
        easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      }),
    };
  });

  const iconRegular = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(isLiked.value ? 0 : 1, {
            duration: 200,
            easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
          }),
        },
      ],
      opacity: withTiming(isLiked.value ? 0 : 1, {
        duration: 200,
        easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      }),
    };
  });
  return { iconFilled, iconRegular };
};

export default iconAnimation;
