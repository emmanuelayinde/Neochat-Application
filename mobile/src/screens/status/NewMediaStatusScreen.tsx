import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  TextInput,
  View,
  screenHeight,
  screenWidth,
} from "../../components/styled";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import ExpoCamera from "../../components/Camera";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { RootStackNavigationProps } from "../../navigations/types";

const NewMediaStatusScreen = () => {
  const [duration, setDuration] = useState(24)
  const [caption, setcCaption] = useState<string | undefined>(undefined)
  const [media, setMedia] = useState<string | undefined>(undefined)

  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();

  const handleCapture = (url: string) => {
    setMedia(url);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, position: "relative" }}
    >
      <StatusBar style="dark" />
      <View className="w-full flex-1 z-10">
        {/* HEADER */}
        {media && (
          <View className="flex-row items-start justify-between px-4 py-2 w-full">
            <Pressable
              onPress={() => navigation.goBack()}
              android_ripple={{
                color: "#4b5563",
                borderless: false,
                foreground: true,
              }}
              className="w-8 h-8 items-center justify-center overflow-hidden rounded-full z-10"
            >
              <FontAwesome5 name="times" size={24} color="#0f0f0f" />
            </Pressable>
          </View>
        )}

        {/*  */}
        <View className="flex-1 w-full justify-center items-center ">
          <View className=" flex-1 justify-center items-center mx-auto">
            {media ? (
              <View style={{ width: screenWidth, height: screenHeight }}>
                <Image
                  source={{ uri: media }}
                  resizeMode="contain"
                  className="w-full h-full"
                />
              </View>
            ) : (
              <ExpoCamera onCapture={handleCapture} />
            )}
          </View>
        </View>

        {/* FOOTER */}
        {media && (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View className="px-2 flex-row items-center space-x-2 w-full blur-md bg-white">
              <View className="flex-1 flex-row items-center justify-between rounded-md space-x-2 px-2 my-2 border border-gray-200">
                <MaterialIcons size={24} name={"countertops"} color={"#555"} />
                <TextInput
                  value={caption}
                  onChangeText={setcCaption}
                  placeholder={"Caption here"}
                  className="flex-1 py-2  text-primaryText"
                />
              </View>

              <Pressable
                className="overflow-hidden w-12 h-12 rounded-full items-center justify-center bg-primary"
                android_ripple={{
                  color: "#056526",
                  borderless: false,
                  foreground: true,
                }}
              >
                <FontAwesome name="send" size={24} color="#f9f9f9" />
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NewMediaStatusScreen;
