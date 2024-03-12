import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { Easing, interpolate, runOnJS, useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import ChatHead from './ChatHead';

const ChatHederWithAnimation: React.FC = () => {
    const translateY = useSharedValue(0);
    const isExpanded = useSharedValue(false);

    const translateInterpolation = useDerivedValue(() =>
        interpolate(translateY.value, [0, 100], [0, 100])
    );

    const expandHeader = () => {
        if (!isExpanded.value) {
            isExpanded.value = true;
            runOnJS(doSomethingWhenExpanded)();
        }
    };

    const doSomethingWhenExpanded = () => {
        // You can perform some actions when the header is expanded.
    };

    const onGestureEvent = Animated.event([{ nativeEvent: { contentOffset: { y: translateY } } }], {
        useNativeDriver: false,
    });

    return (
        <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === 5) {
                isExpanded.value = false;
                translateY.value = withTiming(0, { duration: 300, easing: Easing.ease });
            }
        }}>
            <Animated.View
                style={[
                    styles.header,
                    {
                        height: translateInterpolation.value,
                    },
                ]}
            >
                <ChatHead />
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
});



export default ChatHederWithAnimation