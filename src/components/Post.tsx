import React from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { TapGestureHandler } from "react-native-gesture-handler";
import { PostProps } from "../interfaces";

const Post = ({ item }: PostProps) => {
  const isLiked = useSharedValue(false);
  const scale = useSharedValue(0);
  const { width } = Dimensions.get("window");

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
        <View style={styles.container}>
          <Image
            style={{
              width,
              height: width,
            }}
            source={item.url}
            resizeMode="cover"
          />
          <Animated.View
            style={[styles.doubleTapIcon, style]}
          >
            <Icon
              name="heart"
              size={100}
              color="white"
              style={styles.shadow}
            />
          </Animated.View>
        </View>
      </TapGestureHandler>
      <PostFooter {...{ item, isLiked }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center" },
  doubleTapIcon: {
    position: "absolute",
    alignSelf: "center",
  },
  shadow: {
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default Post;
