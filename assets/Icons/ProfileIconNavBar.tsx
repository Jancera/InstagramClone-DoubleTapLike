import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ProfileIconNavBarProps } from "../../src/interfaces";

const ProfileIconNavBar = ({
  focused,
}: ProfileIconNavBarProps) => {
  return (
    <>
      {focused ? (
        <Icon
          name="account-circle"
          size={30}
          color="white"
        />
      ) : (
        <Icon
          name="account-circle-outline"
          size={30}
          color="white"
        />
      )}
    </>
  );
};

export default ProfileIconNavBar;
