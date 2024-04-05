import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import { styled } from "nativewind";
import {
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "@gorhom/bottom-sheet";
import { FlashList as InfiniteFlatList } from "@shopify/flash-list";
import { RTCView } from "react-native-webrtc";


const _Text = styled(Text);
const _View = styled(View);
const _SafeAreaView = styled(SafeAreaView);
const _Pressable = styled(Pressable);
const _Image = styled(Image);
const _TextInput = styled(TextInput);
const _TouchacleOpacity = styled(TouchableOpacity);
const _ScrollView = styled(ScrollView);
const _BlurView = styled(BlurView);
const _BottomSheetTextInput = styled(BottomSheetTextInput);
const _BottomSheet = styled(BottomSheet);
const _ImageBackground = styled(ImageBackground)
const _FlatList = styled(FlatList)
const _InfiniteFlatList = styled(InfiniteFlatList)
const _RTCView = styled(RTCView)

export { _SafeAreaView as SafeAreaView };
export { _Text as Text };
export { _View as View };
export { _Pressable as Pressable };
export { _Image as Image };
export { _TextInput as TextInput };
export { _TouchacleOpacity as TouchableOpacity };
export { _ScrollView as ScrollView };
export { _BlurView as BlurView };
export { _BottomSheetTextInput as BottomSheetTextInput };
export { _BottomSheet as BottomSheet };
export { _ImageBackground as ImageBackground };
export { _FlatList as FlatList }
export { _InfiniteFlatList as InfiniteFlatList }
export { _RTCView as RTCView }


export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;
