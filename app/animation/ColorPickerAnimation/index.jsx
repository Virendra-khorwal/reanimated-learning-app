import { Stack } from "expo-router";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ColorPicker from "../../../components/ColorPicker";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useCallback } from "react";

const COLORS = [
  "red",
  "purple",
  "blue",
  "cyan",
  "green",
  "yellow",
  "orange",
  "black",
  "white",
];

const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.9)";

const CIRCLE_SIZE = Dimensions.get("window").width * 0.8;
const PICKER_WIDTH = Dimensions.get("window").width * 0.9;

const ColorPickerAnimation = () => {

  const pickedColor = useSharedValue(COLORS[0]);

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pickedColor.value,
    }
  })

  const onColorSelected = useCallback((color) => {
    'worklet'
    pickedColor.value = color;
  }, []); 

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.topContainer} >
        <Animated.View style={[styles.circle, rStyle]}></Animated.View>
      </View>
      <View style={styles.bottomContainer}>
        <ColorPicker
          colors={COLORS}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
          onColorSelected={onColorSelected}
        />
      </View>
    </View>
  );
};

export default ColorPickerAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 3,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    height: 40,
    width: PICKER_WIDTH,
    borderRadius: 25,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  }
});
