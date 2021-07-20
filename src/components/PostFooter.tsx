import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CommentIconStatic from "../../assets/Icons/CommentIconStatic";
import LikeButtonAnimated from "../../assets/Icons/LikeButtonAnimated";
import SavedButtonAnimated from "../../assets/Icons/SavedButtonAnimated";
import ShareIconStatic from "../../assets/Icons/ShareIconStatic";
import CarrouselIndicatorAnimated from "./CarrouselIndicatorAnimated";
import LikesAndComments from "./LikesAndComments";
import { PostFooterProps } from "../interfaces";

const { width } = Dimensions.get("window");

const PostFooter = ({
  item,
  quantity,
  activeImage,
}: PostFooterProps) => {
  return (
    <>
      <View style={styles.containerMain}>
        <View style={styles.containerLike}>
          <LikeButtonAnimated />
          <CommentIconStatic />
          <ShareIconStatic />
        </View>
        {item.carrousel ? (
          <CarrouselIndicatorAnimated
            {...{ quantity, activeImage }}
          />
        ) : null}
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

export default PostFooter;
