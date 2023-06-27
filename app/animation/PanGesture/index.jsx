import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import Head from "expo-router/head";
import { useSearchParams } from "expo-router";

const SIZE = 100;
const CIRCLE_RADIUS = SIZE * 2;

const PanGesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const params = useSearchParams();
  

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event) => {
      const distance = Math.sqrt(
        Math.pow(translateX.value, 2) + Math.pow(translateY.value, 2)
      );
      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <>
      <Head>
        <title>{params.title}</title>
      </Head>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={styles.circle}>
            <Animated.View style={[styles.square, animatedStyle]} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "rgba(0,0,0,0.8)",
  },
});

export default PanGesture;
