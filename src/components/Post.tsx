import React from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { PostProps } from "../interfaces";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TapGestureHandler } from "react-native-gesture-handler";

const Post = ({ item }: PostProps) => {
  const isLiked = useSharedValue(false);
  const scale = useSharedValue(2);
  const { width } = Dimensions.get("window");

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <>
      <PostHeader {...{ item }} />
      <TapGestureHandler
        numberOfTaps={2}
        onActivated={() => {
          console.log("Disparado");
        }}
      >
        <Animated.View style={styles.container}>
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
            <Icon name="heart" size={100} color="white" />
          </Animated.View>
        </Animated.View>
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
});

export default Post;
