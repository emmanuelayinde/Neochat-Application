
import React from "react";
import { Pressable, SafeAreaView, Text, View } from "../styled";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// type routeNamesProp = 'Chats' | 'Groups' | 'Status' | 'Calls'

const renderActiveTabIcon = (routeName: string) => {
  switch (routeName) {
    case "Chats":
      return <Ionicons name="chatbox-ellipses" size={24} color="white" />
    case 'Groups':
      return <MaterialCommunityIcons name="account-group" size={24} color="white" />
    case 'Calls':
      return <Ionicons name="call" size={24} color="white" />
    case 'Status':
      return <MaterialCommunityIcons name="checkbox-multiple-blank-circle" size={24} color="white" />
    default:
      break;
  }
}

const renderTabIcon = (routeName: string) => {
  switch (routeName) {
    case "Chats":
      return <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
    case 'Groups':
      return <MaterialCommunityIcons name="account-group-outline" size={24} color="black" />
    case 'Calls':
      return <Ionicons name="call-outline" size={24} color="black" />
    case 'Status':
      return <MaterialCommunityIcons name="checkbox-multiple-blank-circle-outline" size={24} color="black" />
    default:
      break;
  }
}

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return (
    <SafeAreaView edges={["bottom"]} >
      <View className="flex-row justify-between items-center px-3 bg-white">
        {props.state.routes.map((route, i) => {
          const isActive = i === props.state.index;
          return (
            <TabItem
              key={i}
              isActive={isActive}
              routeName={route.name}
              navigation={props.navigation}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomBottomTabs;

const TabItem = ({
  routeName,
  isActive,
  navigation,
}: {
  routeName: string;
  isActive: boolean;
  navigation: any;
}) => {

  const handlePress = () => {
    navigation.navigate(routeName);
  };

  return (
    <Pressable
      onPress={handlePress}
      className="flex-1 items-center justify-center flex-col py-3"
    >
      <View
        className={`${isActive ? 'w-24 bg-primary px-3' : 'w-9 bg-transparent'} h-10 flex-row items-center justify-center rounded-full`}
      >
        {isActive ? renderActiveTabIcon(routeName) : renderTabIcon(routeName)}
        {isActive && (
          <Text className="ml-1 text-lg font-semibold text-white"  >
            {routeName}
          </Text>
        )}
      </View>
    </Pressable>
  );
};