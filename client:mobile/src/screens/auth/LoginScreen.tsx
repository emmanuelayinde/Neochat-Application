import React, { useEffect, useState } from "react";
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
import { login } from "../../services";
import LoadingDots from "react-native-loading-dots";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/reducer/userReducer";
import { getItemFromStorage, setItemToStorage } from "../../utils/persistence";
import Toast from "react-native-toast-message";
import { useAppSelector } from "../../redux/type";
import { RootStackNavigationProps } from "../../navigations/types";

const LoginScreen = () => {
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();;

  const dispatch = useDispatch();
  const userData = useAppSelector((state) => state.userReducer.user);
  console.log({ ...userData });

  /**
   *
   * @returns
   */
  const loginUser = async () => {
    setSubmitting(true);
    try {
      if (email && password) {
        const res = await login(email, password);
        if (res === null) {
          throw new Error();
        }
        if (!res?.error) {
          Toast.show({
            type: "success",
            text1: "Welcome Back!",
            text2: res.message || "You have successfully login",
          });
          await setItemToStorage("user", JSON.stringify(res?.data));
          dispatch(createUser({ ...res?.data }));
          navigation.navigate('GroupChat');
        } else {
          Toast.show({
            type: "error",
            text1: "An error occured",
            text2: res.message,
          });
        }
      }
    } catch (err) {
      console.log({ err });
      return;
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const checkIfLogin = async () => {
      const userData = await getItemFromStorage("user");
      if (!userData) {
        return;
      }
      dispatch(createUser({ ...userData }));
      return navigation.navigate("GroupChat");
    };

    checkIfLogin();
  }, []);

  return (
    <View className="flex-1 items-center justify-start">
      <Image source={BGImage} resizeMode="cover" className="h-96 w-full " />
      <View className="w-full h-full -mt-44 p-6 bg-white rounded-tl-[75px] space-y-6 items-center justify-start">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />
        <Text className="text-primaryText text-xl font-bold">Welcome Back</Text>
        <View>
          <InputField
            iconName="person"
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
          <TouchableOpacity className="m-0 p-0" onPress={loginUser}>
            <View className="w-full flex-row items-center justify-center rounded-lg py-2 mt-2 bg-primary ">
              {submitting ? (
                <Text className="font-semibold text-xl text-white">
                  <LoadingDots dots={4} size={12} bounceHeight={5} />
                </Text>
              ) : (
                <Text className="font-semibold text-xl text-white">
                  Sign In
                </Text>
              )}
            </View>
          </TouchableOpacity>
          <View className="w-full flex-row items-center justify-end space-x-2 mt-1">
            <Text className="text-sm font-semibold text-primaryText">
              Forget Password
            </Text>
            <Pressable onPress={() => navigation.navigate("ForgetPassword")}>
              <Text className="text-primary text-sm font-semibold ">
                Reset Here
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="flex-row items-center justify-center space-x-2">
          <Text className="text-sm font-semibold text-primaryText">
            Doesn't have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text className="text-primary text-sm font-semibold ">
              Create here
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
