import React from "react";
import { useSharedValue } from "react-native-reanimated";
import FlatListCarrousel from "./FlatListCarrousel";
import PostHeader from "./PostHeader";
import { PostCarrouselProps } from "../interfaces";
import PostFooterCarrousel from "./PostFooterCarrousel";

const PostCarrousel = ({ item }: PostCarrouselProps) => {
  const activeImage = useSharedValue(0);
  return (
    <>
      <PostHeader {...{ item }} />
      <FlatListCarrousel
        data={item.url}
        {...{ activeImage }}
      />
      <PostFooterCarrousel
        quantity={item.url.length}
        {...{ item, activeImage }}
      />
    </>
  );
};

export default PostCarrousel;
