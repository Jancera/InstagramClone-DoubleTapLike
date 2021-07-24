import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated from "react-native-reanimated";
import iconAnimation from "../../src/components/iconAnimation";

const LikeButtonAnimated = ({
  focused,
}: {
  focused: boolean;
}) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    console.log("focado");
    setTrigger(true);
  }, [focused]);

  const { IconFilled, IconRegular } =
    iconAnimation(trigger);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setTrigger(!trigger)}
    >
      <Animated.View style={IconRegular}>
        <Icon
          name="heart-outline"
          size={30}
          color="white"
        />
      </Animated.View>
      <Animated.View style={[IconFilled, styles.absolute]}>
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
