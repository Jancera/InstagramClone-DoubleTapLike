import Animated from "react-native-reanimated";

export interface PostCarrouselProps {
  username: string;
  id: number;
  url: ({ uri: string } | number)[];
  user_profile_photo: string | number;
  carrousel: boolean;
  location: string;
  likes: number;
  commonLike: {
    name: string;
    profilePhoto: { uri: string } | string | number;
  };
  description: string;
  comments: number;
  time: string;
}

export interface PostProps {
  username: string;
  id: number;
  url: { uri: string } | number;
  user_profile_photo: string | number;
  carrousel: boolean;
  location: string;
  likes: number;
  commonLike: {
    name: string;
    profilePhoto: { uri: string } | string | number;
  };
  description: string;
  comments: number;
  time: string;
}

export interface PostFooterProps {
  item: {
    username: string;
    id: number;
    url:
      | { uri: string }
      | number
      | ({ uri: string } | number)[];
    /**
      I am defining both url types ( { uri: string } | number and ({ uri: string } | number)[] ) 
      because I am using the PostFooter component in both Post ans PostCarrousel and the types are
      different
      */
    user_profile_photo: string | number;
    carrousel: boolean;
    location: string;
    likes: number;
    commonLike: {
      name: string;
      profilePhoto: { uri: string } | string | number;
    };
    description: string;
    comments: number;
    time: string;
  };
  quantity?: number;
  activeImage?: Animated.SharedValue<number>;
}

export interface StoryProps {
  data: {
    name: string;
    id: number;
    profile_image: string | number;
  }[];
}

export interface FlatListCarrouselProps {
  data: ({ uri: string } | number)[];
  activeImage: Animated.SharedValue<number>;
}

export interface HomeIconNavBarProps {
  focused: boolean;
}

export interface ProfileIconNavBarProps {
  focused: boolean;
}

export interface ReelsIconNavBarProps {
  focused: boolean;
}

export interface SearchIconNavBarProps {
  focused: boolean;
}

export interface CarrouselIndicatorProps {
  quantity: number;
  activeImage: Animated.SharedValue<number>;
}

export interface CircleProps {
  animation: Animated.DerivedValue<number>;
  index: number;
  activeImage: Animated.SharedValue<number>;
}

export interface StoryGradientProps {
  width: number;
  height: number;
  stroke: number;
}