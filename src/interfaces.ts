import { ImageSourcePropType } from "react-native";
import Animated from "react-native-reanimated";

export interface ItemModel {
  username: string;
  id: number;
  url: ImageSourcePropType | any;
  user_profile_photo: ImageSourcePropType;
  carrousel: boolean;
  location: string | undefined;
  likes: number;
  commonLike:
    | {
        name: string;
        profilePhoto: ImageSourcePropType;
      }
    | undefined;
  description: string;
  comments: number;
  time: string;
}

export interface ItemToRenderProps {
  item: ItemModel;
}

export interface PostProps {
  item: ItemModel;
}

export interface PostCarrouselProps {
  item: ItemModel;
}

export interface PostFooterProps {
  item: ItemModel;
}

export interface PostFooterCarrouselProps {
  item: ItemModel;
  quantity: number;
  activeImage: Animated.SharedValue<number>;
}

export interface FlatListCarrouselProps {
  data: ({ uri: string } | number)[];
  activeImage: Animated.SharedValue<number>;
}

export interface StoryProps {
  data: StoryModel[];
}

export interface RenderStoryProps {
  item: StoryModel;
}

export interface StoryModel {
  name: string;
  id: number;
  profile_image: ImageSourcePropType;
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
