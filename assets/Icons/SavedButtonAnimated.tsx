import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated, {
  useSharedValue,
} from "react-native-reanimated";
import iconAnimation from "../../src/components/iconAnimation";

const SavedButton = () => {
  const isSaved = useSharedValue(false); //Local SharedValue because the animation is independent
  const { iconFilled, iconRegular } =
    iconAnimation(isSaved);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => (isSaved.value = !isSaved.value)}
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
