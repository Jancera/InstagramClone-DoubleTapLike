import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CarrouselIndicatorAnimated from "./CarrouselIndicatorAnimated";
import LikesAndComments from "./LikesAndComments";
import CommentIconStatic from "../../assets/Icons/CommentIconStatic";
import LikeButtonAnimated from "../../assets/Icons/LikeButtonAnimated";
import SavedButtonAnimated from "../../assets/Icons/SavedButtonAnimated";
import ShareIconStatic from "../../assets/Icons/ShareIconStatic";
import { PostFooterCarrouselProps } from "../interfaces";

const { width } = Dimensions.get("window");

const PostFooterCarrousel = ({
  item,
  quantity,
  activeImage,
  isLiked,
}: PostFooterCarrouselProps) => {
  return (
    <>
      <View style={styles.containerMain}>
        <View style={styles.containerLike}>
          <LikeButtonAnimated {...{ isLiked }} />
          <CommentIconStatic />
          <ShareIconStatic />
        </View>
        <CarrouselIndicatorAnimated
          {...{ quantity, activeImage }}
        />
        <View style={styles.flexDirection} />
        <SavedButtonAnimated />
      </View>
      <LikesAndComments {...{ item }} />
    </>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  containerLike: {
    flexDirection: "row",
    width: width * 0.3,
    justifyContent: "space-between",
  },
  flexDirection: {
    flexDirection: "row",
  },
});

export default PostFooterCarrousel;
