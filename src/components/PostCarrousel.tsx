import React, { useRef } from "react";
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import FlatListCarrousel from "./FlatListCarrousel";
import PostHeader from "./PostHeader";
import { PostCarrouselProps } from "../interfaces";
import PostFooterCarrousel from "./PostFooterCarrousel";
import { TapGestureHandler } from "react-native-gesture-handler";
import { View } from "react-native";

const PostCarrousel = ({ item }: PostCarrouselProps) => {
  const activeImage = useSharedValue(0);
  const isLiked = useSharedValue(false);

  return (
    <>
      <PostHeader {...{ item }} />
      <TapGestureHandler
        numberOfTaps={2}
        onActivated={() => {
          console.log("Disparado");
        }}
      >
        <View>
          <FlatListCarrousel
            data={item.url}
            {...{ activeImage, isLiked }}
          />
        </View>
      </TapGestureHandler>

      <PostFooterCarrousel
        quantity={item.url.length}
        {...{ item, activeImage, isLiked }}
      />
    </>
  );
};

export default PostCarrousel;
