import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import FlatListCarrousel from "./FlatListCarrousel";
import PostHeader from "./PostHeader";
import { PostCarrouselProps } from "../interfaces";
import PostFooterCarrousel from "./PostFooterCarrousel";
import { TapGestureHandler } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PostCarrousel = ({ item }: PostCarrouselProps) => {
  const activeImage = useSharedValue(0);
  const scale = useSharedValue(0);
  const isLiked = useSharedValue(false);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const likeAnimation = () => {
    isLiked.value = true; //Will make the like button animate to the liked state
    scale.value = withTiming(
      1,
      {
        duration: 200,
        easing: Easing.bezier(0.68, 0, 0.32, 1.6),
      },
      (isFinished) => {
        if (isFinished) {
          scale.value = withDelay(
            500,
            withTiming(0, {
              duration: 100,
              easing: Easing.bezier(1, 0, 0, 1),
            })
          );
        }
      }
    );
  };

  return (
    <>
      <PostHeader {...{ item }} />
      <TapGestureHandler
        numberOfTaps={2}
        onActivated={likeAnimation}
      >
        <Animated.View style={styles.container}>
          <FlatListCarrousel
            data={item.url}
            {...{ activeImage }}
          />
          <Animated.View
            style={[styles.doubleTapIcon, style]}
          >
            <Icon name="heart" size={100} color="white" />
          </Animated.View>
        </Animated.View>
      </TapGestureHandler>
      <PostFooterCarrousel
        quantity={item.url.length}
        {...{ item, activeImage, isLiked }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  doubleTapIcon: {
    position: "absolute",
    alignSelf: "center",
  },
});

export default PostCarrousel;
