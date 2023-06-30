import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { PinchGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const imageUrl =
  "https://images.unsplash.com/photo-1686482149769-f343ce33a613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const { width, height } = Dimensions.get("window");

const BasicPinchGesture = () => {

  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler = useAnimatedGestureHandler({
     onActive: (event) => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
     },
     onEnd: (event) => {
      scale.value = withTiming(1);
     }
  })

  const rStyle = useAnimatedStyle(() => {

    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -width / 2 },
        { translateY: -height / 2 },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: width / 2 },
        { translateY: height / 2 },
      ]
    }
  })

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Basic Pinch Gesture",
          headerStyle: {
            backgroundColor: "#002b54",
          },
          headerTintColor: "#fff",
        }}
      />
      <PinchGestureHandler onGestureEvent={pinchHandler} >
        <AnimatedImage style={[styles.image, rStyle]} source={{ uri: imageUrl }} />
      </PinchGestureHandler>
      <StatusBar style="light" />
    </View>
  );
};

export default BasicPinchGesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
  },
});
