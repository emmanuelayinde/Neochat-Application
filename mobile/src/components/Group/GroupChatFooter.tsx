import React, { Dispatch, SetStateAction } from "react";
import { Pressable, TextInput, View } from "../styled";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../@types";


interface GroupChatFooterProp {
  // navigation: RootStackScreenProps<'ChatsTab'>,
  messageInput: string;
  setMessageInput: Dispatch<SetStateAction<string>>;
  isRecording?: boolean;
  setIsRecording?: Dispatch<SetStateAction<boolean>>;
}

const GroupChatFooter = (prop: GroupChatFooterProp) => {
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();

  // const {navigation} = prop.navigation

  return (
    <View className="w-full h-fit space-x-1 p-2 flex-row justify-between items-center bg-[#f9f9f9]">
      <View className="flex-1 flex-row items-center justify-between px-1 rounded-md h-full bg-gray-100 ">
        <Pressable
          className="w-8 h-8 overflow-hidden  rounded-md items-center justify-center bg-transparent"
          android_ripple={{
            color: "#4b5563",
            borderless: false,
            foreground: true,
          }}
        >
          <Entypo name="emoji-flirt" size={18} color="#4b5563" />
        </Pressable>

        <TextInput
          value={prop.messageInput}
          onChangeText={prop.setMessageInput}
          placeholder={"Message"}
          className="flex-1 py-2  text-primaryText "
        />
        <View className="items-center flex-row space-x-1">
          <Pressable
            className="w-8 h-8 overflow-hidden  rounded-md items-center justify-center bg-transparent"
            android_ripple={{
              color: "#4b5563",
              borderless: false,
              foreground: true,
            }}
          >
            <Entypo name="attachment" size={18} color="#4b5563" />
          </Pressable>
          {!prop.messageInput && (
            <Pressable
              onPress={() =>
                navigation.navigate("Camera", { from: "chat", to: "chat" })
              }
              className="w-8 h-8 overflow-hidden  rounded-md items-center justify-center bg-transparent"
              android_ripple={{
                color: "#4b5563",
                borderless: false,
                foreground: true,
              }}
            >
              <Entypo name="camera" size={18} color="#4b5563" />
            </Pressable>
          )}
        </View>
      </View>
      <Pressable
        className="w-10 h-10 overflow-hidden rounded-md items-center justify-center bg-primary"
        android_ripple={{
          color: "#056526",
          borderless: false,
          foreground: true,
        }}
      >
        {prop.messageInput.length > 0 ? (
          <MaterialIcons name="send" size={24} color="#f9f9f9" />
        ) : (
          <MaterialIcons name="keyboard-voice" size={24} color="#f9f9f9" />
        )}
      </Pressable>
    </View>
  );
};

export default GroupChatFooter;
