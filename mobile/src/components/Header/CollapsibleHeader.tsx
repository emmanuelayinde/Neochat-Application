import React, { useRef } from "react";
import { View, Animated, Image, ScrollView, Text } from "react-native";

const H_MAX_HEIGHT = 150;
const H_MIN_HEIGHT = 52;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const CollapsibleHeader = () => {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const headerScrollHeight = scrollOffsetY.interpolate({
        inputRange: [0, H_SCROLL_DISTANCE],
        outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
        extrapolate: "clamp"
    });

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
                ])}
                scrollEventThrottle={16}
            >
                <View style={{ paddingTop: H_MAX_HEIGHT }}>
                    {/** Page contant goes here **/}

                    <View style={{ padding: 20 }}>
                        <Text>React Native Collapsible Header</Text>
                    </View>

                    <View style={{ padding: 20, height: 200, backgroundColor: "red" }}>
                        <Text>View 1</Text>
                    </View>

                    <View style={{ padding: 20, height: 200, backgroundColor: "yellow" }}>
                        <Text>View 1</Text>
                    </View>

                    <View style={{ padding: 20, height: 200, backgroundColor: "green" }}>
                        <Text>View 1</Text>
                    </View>
                </View>
            </ScrollView>

            {
                /** 
                 * We put the header at the bottom of
                 * our JSX or it will not take priority
                 * on Android (for some reason, simply
                 * setting zIndex does not work)
                 **/
            }
            <Animated.View
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: headerScrollHeight,
                    width: "100%",
                    overflow: "hidden",
                    zIndex: 999,
                    // STYLE
                    borderBottomColor: "#EFEFF4",
                    borderBottomWidth: 2,
                    padding: 10,
                    backgroundColor: "red"
                }}
            >
                <Image
                    source={{ uri: "https://via.placeholder.com/300" }}
                    style={{ flex: 1 }}
                    resizeMode={"contain"}
                />
            </Animated.View>
        </View>
    )
}

export default CollapsibleHeader;