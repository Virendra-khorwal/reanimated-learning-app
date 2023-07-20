import { Stack } from "expo-router";
import { useCallback } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import Svg, { Circle } from "react-native-svg";

const BACKGROUND_COLOR = "#444B6F";
const BACKGROUND_STROKE_COLOR = "#303858";
const STROKE_COLOR = "#A6E1FA";

const { width, height } = Dimensions.get("window");

const CIRCLE_LENGTH = 1000;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgressBar = () => {
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const onPressStart = useCallback(() => {
    progress.value = withTiming(1, { duration: 2000 });
  }, []);
  const onPressReset = useCallback(() => {
    progress.value = withTiming(0, { duration: 2000 });
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Circular Progress Bar",
        }}
      />

      <ReText style={styles.progressText} text={progressText} />
      <Svg style={{ position: "absolute" }}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={20}
          strokeDasharray={CIRCLE_LENGTH}
          strokeDashoffset={CIRCLE_LENGTH * 0.2}
          strokeLinecap="round"
          animatedProps={animatedProps}
        />
      </Svg>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: STROKE_COLOR }]}
          onPress={onPressStart}
        >
          <Text
            style={{
              fontSize: 20,
              color: BACKGROUND_STROKE_COLOR,
            }}
          >
            Run
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressReset}
        >
          <Text
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CircularProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    fontSize: 80,
    color: "rgba(256,256,256,0.7)",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    gap: 10,
  },
  button: {
    width: width * 0.7,
    height: 60,
    backgroundColor: BACKGROUND_STROKE_COLOR,

    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
