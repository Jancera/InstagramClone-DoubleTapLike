import React from "react";
import { Image, Dimensions } from "react-native";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { RenderItemProps } from "../interfaces";

const Post = ({ item }: RenderItemProps) => {
  const { width } = Dimensions.get("window");
  return (
    <>
      <PostHeader {...{ item }} />
      <Image
        style={{
          width,
          height: width,
        }}
        source={item.url}
        resizeMode="cover"
      />
      <PostFooter {...{ item }} />
    </>
  );
};

export default Post;
