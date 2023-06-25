import { View, Text, StyleSheet, ScrollView } from "react-native";
import InterpolateScrollViewComponent from "../../../components/InterpolateScrollViewComponent";
import Animated,{ useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { Stack } from "expo-router";

const WORDS = ["What's", "up", "mobile", "devs?"]


const InterPolateWithScrollView = () => {

  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <>
      <Stack.Screen options={{
        headerTitle: "Interpolate With ScrollView",
        headerStyle: {
          backgroundColor: "rgb(0,80,230)",
        },
        headerTintColor: "#fff",
      }} />
      <Animated.ScrollView onScroll={scrollHandler} horizontal >
        {WORDS.map((word, index) => (
          <InterpolateScrollViewComponent
            key={index}
            word={word}
            index={index}
            translateX={translateX}
          />
        ))}
      </Animated.ScrollView>
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
});

export default InterPolateWithScrollView;
