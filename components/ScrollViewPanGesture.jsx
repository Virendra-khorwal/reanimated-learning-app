import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const ScrollViewPanGesture = ({ title, index, transalteX }) => {
  
  const pageOffset = width * index;

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: transalteX.value + pageOffset }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { 
          ...StyleSheet.absoluteFillObject,
          backgroundColor: `rgba(0,0,255,0.${index + 2})` },
        rStyle,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

export default ScrollViewPanGesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height,
    // width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
