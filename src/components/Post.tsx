import React from "react";
import { Image, Dimensions } from "react-native";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { PostProps } from "../interfaces";
import { useSharedValue } from "react-native-reanimated";
import { TapGestureHandler } from "react-native-gesture-handler";

const Post = ({ item }: PostProps) => {
  const isLiked = useSharedValue(false);
  const { width } = Dimensions.get("window");
  return (
    <>
      <PostHeader {...{ item }} />
      <TapGestureHandler
        numberOfTaps={2}
        onActivated={() => {
          console.log("Disparado");
        }}
      >
        <Image
          style={{
            width,
            height: width,
          }}
          source={item.url}
          resizeMode="cover"
        />
      </TapGestureHandler>
      <PostFooter {...{ item, isLiked }} />
    </>
  );
};

export default Post;
