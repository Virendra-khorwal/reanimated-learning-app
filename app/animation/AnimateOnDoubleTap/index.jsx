import { StyleSheet, Text, View } from "react-native";
import { Stack, useSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TapGestureHandler } from "react-native-gesture-handler";
import { useCallback, useRef } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from "react-native-reanimated";

const SIZE = 80;

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const AnimateOnDoubleTap = () => {
  const params = useSearchParams();
  const scale = useSharedValue(0);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: Math.max(scale.value, 0) }],
    };
  })

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, { duration: 200 }, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  },[])

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: params.title,
        }}
      />
      <TapGestureHandler
        waitFor={doubleTapRef}
        onActivated={() => {
          console.log("Single Tap");
        }}
      >
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}
        >
          <Animated.View>
            <View style={styles.square}>
              {/* <Text style={styles.text}>Double Tap Me</Text> */}
              <Ionicons
                name="heart-outline"
                size={SIZE}
                color="white"
                style={{
                  elevation: 10,
                  position: "absolute",
                  opacity: 0,
                }}
              />
              <AnimatedIcon
                name="heart-sharp"
                size={SIZE}
                color="rgba(255,255,255,0.8)"
                style={[{ elevation: 0, position: "absolute" }, rStyle]}
              />
            </View>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

export default AnimateOnDoubleTap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: "rgba(0,0,255,0.5)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
