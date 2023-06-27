import { Stack } from "expo-router";
import { useState } from "react";
import { useSearchParams } from "expo-router";
import { Dimensions, StyleSheet, Switch, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text } from "react-native";

const Colors = {
  dark: {
    background: "#1e1e1e",
    text: "#f8f8f8",
    circle: "#252525",
  },
  light: {
    background: "#f8f8f8",
    text: "#1e1e1e",
    circle: "#fff",
  },
};

const SWITCH_TRACK_COLOR = {
  true: "rgba(256,0,256,0.2)",
  false: "rgba(0,0,0,0.1)",
};

const InterpolateColor = () => {
  const params = useSearchParams();
  const [theme, setTheme] = useState("light");

  // const progress = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return theme === "dark" ? withTiming(1) : withTiming(0);
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background]
    );

    return { backgroundColor: backgroundColor };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle]
    );

    return { backgroundColor: backgroundColor };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const textColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text]
    );

    return { color: textColor };
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: params.title,
        }}
      />
      <Animated.View style={[styles.container, rStyle]}>
        <Animated.Text style={[styles.text, rTextStyle]}>Theme</Animated.Text>
        <Animated.View style={[styles.circle, rCircleStyle]}>
          <Switch
            value={theme === "dark"}
            onValueChange={(toggle) => {
              setTheme(toggle ? "dark" : "light");
            }}
            trackColor={SWITCH_TRACK_COLOR}
            thumbColor={"violet"}
          />
        </Animated.View>
      </Animated.View>
    </>
  );
};

const SIZE =Dimensions.get("window").width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text : {
    fontSize: 70,
    fontWeight: "bold",
    letterSpacing: 10,
    marginBottom: 20,
  }
});

export default InterpolateColor;
