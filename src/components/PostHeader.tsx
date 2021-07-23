import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { PostHeaderProps } from "../interfaces";
import StoryBorderGradient from "./StoryBorderGradient";

const PostHeader = ({ item }: PostHeaderProps) => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.imageNameContainer}>
        <View style={styles.profileImageContainer}>
          <StoryBorderGradient
            width={37}
            height={37}
            stroke={6}
          />
          <Image
            style={styles.profileImage}
            source={item.user_profile_photo}
          />
        </View>
        <View style={styles.nameLocation}>
          <Text style={styles.profileText}>
            {item.username}
          </Text>
          {item.location !== undefined ? (
            <Text style={styles.locationText}>
              {item.location}
            </Text>
          ) : null}
        </View>
      </View>
      <Icon
        name="dots-horizontal"
        size={30}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  imageNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: "absolute",
  },
  nameLocation: {
    justifyContent: "center",
  },
  profileText: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  locationText: {
    color: "white",
    fontSize: 10,
    marginHorizontal: 5,
  },
});

export default PostHeader;
