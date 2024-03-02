import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  BlurView,
  TouchableOpacity,
  View,
  screenHeight,
  screenWidth,
} from "../../components/styled";
import { BGImage, Logo } from "../../../assets";
import InputField from "../../components/Form/InputField";
import { Entypo } from "@expo/vector-icons";
import { avatars } from "../../utils/avatar";
import { useNavigation } from "@react-navigation/native";
import { createNewAccount } from "../../services/api/auth";
import LoadingDots from "react-native-loading-dots";
import Toast from "react-native-toast-message";
import { RootStackNavigationProps } from "../../navigations/types";
import useCurrentUser from "../../hooks/UserHooks";

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(avatars[0]);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();;
  const [submitting, setSubmitting] = useState(false);
  const { currentUser, loginCurrentUser } = useCurrentUser()

  const createAccount = async () => {
    setSubmitting(true);
    try {
      if (fullName && email && password && confirmPassword) {
        const res = await createNewAccount(
          fullName,
          email,
          password,
          confirmPassword
        );
        console.log({ res });

        if (!res?.error) {
          Toast.show({
            type: "success",
            text1: "Welcome to the community",
            text2: res?.message,
          });
          if (res === null) {
            throw new Error();
          }

          loginCurrentUser({
            user: {
              ...res.data!
            },
            userToken: ''
          })
          navigation.navigate('ChatsTab');
        } else {
          Toast.show({
            type: "error",
            text1: "An error occured!",
            text2: res?.message,
          });
        }
      }
    } catch (error) {
      return;
    } finally {
      setSubmitting(false);
      return;
    }
  };


  useEffect(() => {
    if (!currentUser) {
      return;
    }
    return navigation.navigate("OneToOneChat");
  }, []);


  return (
    <View className="flex-1 items-center justify-start">
      <Image source={BGImage} resizeMode="cover" className="h-80 w-full " />
      <View className="w-full h-full -mt-44 p-6 bg-white rounded-tl-[75px] space-y-6 items-center justify-start">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />
        <Text className="text-primaryText text-xl font-bold">
          Join us today!
        </Text>

        <View className="w-20 h-20 rounded-full border-2 border-primary relative">
          <Image
            source={{ uri: avatar?.url }}
            className="w-full h-full"
            resizeMode="contain"
          />
          <Pressable
            onPress={() => setIsAvatarOpen(true)}
            className="items-center justify-center w-6 h-6 rounded-full bg-primary p-1 absolute top-0 right-0"
          >
            <Entypo size={14} name="pencil" color={"#fff"} />
          </Pressable>
        </View>

        <View>
          <InputField
            iconName="person"
            placeholder="Enter Name"
            setValue={setFullName}
            value={fullName}
          />
          <InputField
            iconName="email"
            placeholder="Enter Email"
            setValue={setEmail}
            value={email}
          />
          <InputField
            iconName="lock"
            placeholder="Enter Password"
            setValue={setPassword}
            value={password}
            isPassword={true}
          />
          <InputField
            iconName="lock"
            placeholder="Confirm Password"
            setValue={setConfirmPassword}
            value={confirmPassword}
            isPassword={true}
          />
          <TouchableOpacity onPress={createAccount}>
            <View className="w-full flex-row items-center justify-center rounded-lg py-2 my-3 bg-primary ">
              {submitting ? (
                <Text className="font-semibold text-xl text-white">
                  <LoadingDots dots={4} size={12} bounceHeight={5} />
                </Text>
              ) : (
                <Text className="font-semibold text-xl text-white">
                  Sign up
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center space-x-2">
          <Text className="text-sm font-semibold text-primaryText">
            Already have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text className="text-primary text-sm font-semibold ">
              Login In
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Avatar Modal */}
      {isAvatarOpen && (
        <View
          className="absolute inset-0 z-10 "
          style={{ width: screenWidth, height: screenHeight }}
        >
          <ScrollView>
            <BlurView
              intensity={40}
              tint="light"
              className="py-16 px-4 justify-evenly items-center flex-row flex-wrap"
            >
              {avatars.map((avatar) => (
                <TouchableOpacity
                  onPress={() => {
                    setAvatar(avatar);
                    setIsAvatarOpen(false);
                  }}
                  key={avatar?._id}
                  className="w-20 h-20 m-3  border-2 border-primary rounded-full"
                >
                  <Image
                    source={{ uri: avatar?.url }}
                    className="w-full h-full"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ))}
            </BlurView>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default RegisterScreen;
