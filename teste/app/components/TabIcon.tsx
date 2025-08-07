import { Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { images } from "@/constants/images";

const TabIcon = ({
  focused,
  icon,
  text,
}: {
  focused: boolean;
  icon: any;
  text: string;
}) => {
  if (focused) {
    return (
      <>
        <ImageBackground
          source={images.highlight}
          className="flex flex-row w-full flex-1 min-w-[112px] min-h-12 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image source={icon} tintColor="#151312" className="size-5" />
          <Text className="text-secondary text-base font-semibold ml-2">
            {text}
          </Text>
        </ImageBackground>
      </>
    );
  } else {
    return (
      <View className="size-full justify-center items-center mt-5 rounded-full">
        <Image source={icon} tintColor="#A8B5DB" className="size-5" />
      </View>
    );
  }
};

export default TabIcon;
