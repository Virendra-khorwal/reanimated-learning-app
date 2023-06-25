import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");
const SIZE = width * 0.7;

const InterpolateScrollViewComponent = ({ word, index, translateX }) => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    const rotateZ = interpolate(
      translateX.value,
      inputRange,
      [-180, 0, 180],
      Extrapolate.CLAMP
    );
    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale: scale }, { rotateZ: `${rotateZ}deg` }],
      borderRadius: borderRadius,
    };
  });

  const rTextStyle = useAnimatedStyle(() => {

    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2.5, 1, -2.5],
      Extrapolate.CLAMP
    );

    return {
        transform: [
            {translateY: translateY}
        ],
        opacity: opacity
    }
  });

  return (
    <View
      style={[
        styles.contianer,
        { backgroundColor: `rgba(0,0,256, 0.${index + 2})` },
      ]}
    >
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[{ position: "absolute" }, rTextStyle]}>
        <Text style={styles.text}>{word}</Text>
      </Animated.View>
    </View>
  );
};

export default InterpolateScrollViewComponent;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: width,
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "rgba(0,0,256, 0.4)",
  },
  text: {
    fontSize: 40,
    color: "#fff",
  }
});
