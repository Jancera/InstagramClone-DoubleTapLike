import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated from "react-native-reanimated";
import iconAnimation from "../../src/components/iconAnimation";

const SavedButton = () => {
  const [trigger, setTrigger] = useState(false);
  const { iconFilled, iconRegular } =
    iconAnimation(trigger);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setTrigger(!trigger)}
    >
      <Animated.View style={iconRegular}>
        <Icon name="bookmark-o" size={30} color="white" />
      </Animated.View>
      <Animated.View style={[iconFilled, styles.absolute]}>
        <Icon name="bookmark" size={30} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  },
});

export default SavedButton;
