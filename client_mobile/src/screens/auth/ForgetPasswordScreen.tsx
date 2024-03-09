import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "../../components/styled";
import { BGImage, Logo } from "../../../assets";
import InputField from "../../components/Form/InputField";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetLink } from "../../services/api/auth";
import Toast from "react-native-toast-message";
import LoadingDots from "react-native-loading-dots";
import { RootStackNavigationProps } from "../../navigations/types";

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();;

  const handleSendPasswordResetLink = async () => {
    if (!email) return;

    setSubmitting(true)
    try {
      const res = await sendPasswordResetLink(email);
      if (res === null) {
        throw new Error();
      }
      if (!res?.error) {
        navigation.navigate("VerifyResetOTP", { email });
      } else {
        Toast.show({
          type: "error",
          text1: "An error occured",
          text2: res.message,
        });
      }
    } catch (err) {
      console.log({ err });
      return;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View className="flex-1 items-center justify-start">
      <Image source={BGImage} resizeMode="cover" className="h-96 w-full " />
      <View className="w-full h-full -mt-44 p-6 bg-white rounded-tl-[75px] space-y-6 items-center justify-start">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />
        <Text className="text-primaryText text-xl font-bold">
          Forget Passowrd
        </Text>

        <View>
          <InputField
            iconName="email"
            placeholder="Enter Email"
            setValue={setEmail}
            value={email}
          />
          <TouchableOpacity onPress={handleSendPasswordResetLink}>
            <View className="w-full flex-row items-center justify-center rounded-lg py-2 my-2 bg-primary ">
              {submitting ? (
                <Text className="font-semibold text-xl text-white">
                  <LoadingDots dots={4} size={12} bounceHeight={5} />
                </Text>
              ) : (
                <Text className="font-semibold text-xl text-white">
                  Forgot Password
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center space-x-2">
          <Text className="text-sm font-semibold text-primaryText">
            Remember your password?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text className="text-primary text-sm font-semibold ">Sign In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
