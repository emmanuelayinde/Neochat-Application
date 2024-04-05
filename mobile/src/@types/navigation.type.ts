import {
    BottomTabScreenProps,
    BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import {
    CompositeNavigationProp,
    CompositeScreenProps,
} from "@react-navigation/native";
import {
    NativeStackScreenProps,
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { IChatHeadProps, callTypes, statusProps } from "../@types";
import { callOrigin } from "../@types/call.type";

export type RootStackParamList = {
    ChatsTab: BottomTabScreenProps<ChatStackParamLists>;
    Login: undefined;
    Register: undefined;
    ResetPassword: { email: string; otp: string };
    VerifyResetOTP: { email: string };
    ForgetPassword: undefined;
    OneToOneChat: IChatHeadProps;
    GroupChat: undefined;
    CallHistory: {};
    IncomingCall: {};
    OutgoingCall: { callType: callTypes, origin: callOrigin, chatId: string, callerId: string, calleeId: string, calleeSocketId: string };
    NewTextStatus: undefined;
    NewMediaStatus: undefined;
    StatusDisplayScreen: statusProps | statusProps[];
    Profile: { userId: string };
    Camera: { from: string; to?: string };
    OnboardingOne: undefined;
    OnboardingTwo: undefined;
    OnboardingThree: undefined
};
export type ChatStackParamLists = {
    Chats: {
        avatar: string | null;
        name: string;
        lastMessage: string;
        lastSeen: string;
        newNessageCounter?: number | null;
        hasStatus?: boolean;
        isGroup?: boolean;
    };
    Groups: {};
    Calls: {};
    Status: {};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
    NativeStackNavigationProp<RootStackParamList, T>;

export type ChatStackScreenProps = CompositeScreenProps<
    BottomTabScreenProps<ChatStackParamLists, "Chats">,
    RootStackScreenProps<keyof RootStackParamList>
>;

export type ChatStackScreenNavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<ChatStackParamLists, "Chats">,
    RootStackNavigationProps<keyof RootStackParamList>
>;