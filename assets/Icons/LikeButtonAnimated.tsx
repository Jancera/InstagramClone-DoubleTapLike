import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated from "react-native-reanimated";
import iconAnimation from "../../src/components/iconAnimation";

const LikeButtonAnimated = ({ isLiked }) => {
  const { iconFilled, iconRegular } =
    iconAnimation(isLiked);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => (isLiked.value = !isLiked.value)}
    >
      <Animated.View style={iconRegular}>
        <Icon
          name="heart-outline"
          size={30}
          color="white"
        />
      </Animated.View>
      <Animated.View style={[iconFilled, styles.absolute]}>
        <Icon
          name="heart"
          size={30}
          color="rgb(237, 73, 86)"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  },
});

export default LikeButtonAnimated;
