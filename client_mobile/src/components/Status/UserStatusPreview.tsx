import React from "react";
import { Image, Pressable, Text, View } from "../styled";
import { useNavigation } from "@react-navigation/native";
import { userStatusPreviewProps } from "./type";
import { RootStackNavigationProps } from "../../navigations/types";

const UserStatusPreview = (props: userStatusPreviewProps) => {
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>()

  return (
    <Pressable
      onPress={(e) =>
        navigation.navigate("StatusDisplayScreen", {
          content: "",
          type: "image",
          viewedByMe: false,
        })
      }
      android_ripple={{
        color: "#4b5563",
        borderless: false,
        foreground: false,
      }}
      className="flex-row space-x-4 items-center py-2 px-4"
    >
      <View
        className={`w-12 h-12 rounded-full border-2 ${
          props.status[0].viewedByMe ? "border-slate-400" : "border-primary"
        } `}
      >
        <Image
          className="w-full h-full rounded-full"
          resizeMode="contain"
          source={{ uri: props.avatar }}
        />
      </View>
      <View className="space-y-1">
        <Text className="text-lg font-semibold text-gray-900">
          {props.user}
        </Text>
        <Text className="text-sm font-medium text-gray-400">{props.time}</Text>
      </View>
    </Pressable>
  );
};

export default UserStatusPreview;
