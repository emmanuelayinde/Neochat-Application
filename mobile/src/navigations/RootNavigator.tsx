import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatTabNavigator } from ".";
import {
  ForgetPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  MediaStatusScreen,
  TextStatusScreen,
  ProfileScreen,
  OneToOneChat,
  GroupChat,
  OutgoingCallScreen,
  StatusDisplayScreen,
  VerifyResetOTPScreen,
  IncomingCallScreen,
  CallHistoryScreen
} from "../screens";
import { RootStackParamList } from "../@types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="ChatsTab" component={ChatTabNavigator} />

      {/* Auth Page */}
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <RootStack.Screen name="VerifyResetOTP" component={VerifyResetOTPScreen} />
      <RootStack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
      />

      {/* Chat Screens */}
      <RootStack.Screen name="OneToOneChat" component={OneToOneChat} />
      <RootStack.Screen name="GroupChat" component={GroupChat} />

      {/* Call Screens */}
      <RootStack.Screen
        name="CallHistory"
        component={CallHistoryScreen}
      />
      <RootStack.Screen
        name="IncomingCall"
        component={IncomingCallScreen}
      />
      <RootStack.Screen
        name="OutgoingCall"
        component={OutgoingCallScreen}
      />
      {/* Status Screen */}
      <RootStack.Screen name="NewTextStatus" component={TextStatusScreen} />
      <RootStack.Screen name="NewMediaStatus" component={MediaStatusScreen} />
      <RootStack.Screen
        name="StatusDisplayScreen"
        component={StatusDisplayScreen}
      />

      {/* User Screen */}
      <RootStack.Screen name="Profile" component={ProfileScreen} />

      {/* Onboarding Screen */}
      {/* <RootStack.Screen name="OnboardingOne" component={OnboardingScreenOne} />
      <RootStack.Screen name="OnboardingTwo" component={OnboardingScreenTwo} />
      <RootStack.Screen name="OnboardingThree" component={OnboardingScreenThree} /> */}
      {/* </Stack.Navigator> */}

    </RootStack.Navigator>
  );
};

export default RootNavigator;
