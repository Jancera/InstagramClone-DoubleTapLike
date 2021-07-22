import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Item from "react-native-vector-icons/Ionicons";
import { dataAPI } from "../data";

const LikesAndComments = ({ item }) => {
  const { userLoggedInfo } = dataAPI;
  return (
    <>
      {item.commonLike !== undefined ? (
        <View style={styles.container}>
          <View style={styles.likes}>
            <Image
              source={item.commonLike.profilePhoto}
              style={styles.image}
            />
            <Text style={styles.text}>
              {"  "}
              Liked by{" "}
            </Text>
            <Text style={styles.textBold}>
              {item.commonLike.name}
            </Text>
            <Text style={styles.text}> and </Text>
            <Text style={styles.textBold}>
              {item.likes} others
            </Text>
          </View>
          <View style={styles.userDescription}>
            <Text style={styles.textBold}>
              {item.username}
            </Text>
            <Text style={styles.text}>
              {"  "}
              {item.description}
            </Text>
          </View>
          {item.comments === 0 ? null : (
            <Text style={styles.textGrey}>
              View all {item.comments} comments
            </Text>
          )}
          <View style={styles.addComment}>
            <View style={styles.horizontal}>
              <Image
                source={userLoggedInfo.profile_image}
                style={styles.image}
              />
              <Text style={styles.textGrey}>
                {"  "}Add a comment...
              </Text>
            </View>
            <Item
              name="add-circle-outline"
              size={15}
              color="grey"
            />
          </View>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.likes}>
            <Text style={styles.textBold}>
              {item.likes} likes
            </Text>
          </View>
          <View style={styles.userDescription}>
            <Text style={styles.textBold}>
              {item.username}
            </Text>
            <Text style={styles.text}>
              {"  "}
              {item.description}
            </Text>
          </View>
          {item.comments === 0 ? null : (
            <Text style={styles.textGrey}>
              View all {item.comments} comments
            </Text>
          )}
          <View style={styles.addComment}>
            <View style={styles.horizontal}>
              <Image
                source={userLoggedInfo.profile_image}
                style={styles.image}
              />
              <Text style={styles.textGrey}>
                {"  "}Add a comment...
              </Text>
            </View>
            <Item
              name="add-circle-outline"
              size={15}
              color="grey"
            />
          </View>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  image: { width: 25, height: 25, borderRadius: 13 },
  text: { color: "white" },
  textBold: { color: "white", fontWeight: "bold" },
  userDescription: {
    flexDirection: "row",
    marginBottom: 5,
  },
  textGrey: { color: "grey", marginBottom: 5 },

  addComment: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  horizontal: { flexDirection: "row" },
  time: { color: "grey", fontSize: 12 },
});

export default LikesAndComments;
