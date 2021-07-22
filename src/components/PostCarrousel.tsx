import React from "react";
import { useSharedValue } from "react-native-reanimated";
import FlatListCarrousel from "./FlatListCarrousel";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { RenderItemProps } from "../interfaces";

const PostCarrousel = ({ item }: RenderItemProps) => {
  const activeImage = useSharedValue(0);
  return (
    <>
      <PostHeader {...{ item }} />
      <FlatListCarrousel
        data={item.url}
        {...{ activeImage }}
      />
      <PostFooter
        quantity={item.url.length}
        {...{ item, activeImage }}
      />
    </>
  );
};

export default PostCarrousel;
