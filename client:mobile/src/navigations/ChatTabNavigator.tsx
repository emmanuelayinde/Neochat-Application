import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomBottomTabs } from "../components";
import { CallHistoryScreen, ChatScreen, GroupScreen, StatusScreen } from "../screens";
import { ChatStackParamLists } from "./types";

const TabsStack = createBottomTabNavigator<ChatStackParamLists>();

const ChatTabNavigator = () => {
  return (
    <TabsStack.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <TabsStack.Screen name="Chats" component={ChatScreen} />
      <TabsStack.Screen name="Groups" component={GroupScreen} />
      <TabsStack.Screen name="Status" component={StatusScreen} />
      <TabsStack.Screen name="Calls" component={CallHistoryScreen} />
    </TabsStack.Navigator>
  );
};

export default ChatTabNavigator;
