
import { Stack } from 'expo-router'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ScrollViewPanGesture from '../../../components/ScrollViewPanGesture'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { cancelAnimation, event, useAnimatedGestureHandler, useDerivedValue, useSharedValue, withDecay } from 'react-native-reanimated'

const { width } = Dimensions.get("window");

const titles = ["What's", "up", "mobile", "devs?", "😎"]

const maxTranslateX = -(titles.length - 1) * width;

const ScrollViewWithPanGesture = () => {

  const transalteX = useSharedValue(0)

  const clampedTransalateX = useDerivedValue(() => {

    

    return Math.max(Math.min(transalteX.value, 0), maxTranslateX);
  })

  const panGestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.x = clampedTransalateX.value
      cancelAnimation(transalteX)
    },
    onActive: (event, context) => {
      transalteX.value = event.translationX + context.x
    },
    onEnd: (event) => {
      transalteX.value = withDecay({velocity:event.velocityX})
    },
  })

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Scroll view With Pan Gesture",
          headerShown: false,
        }}
      />
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View style={{flex:1, flexDirection: 'row'}}>
          {titles.map((title, index) => (
            <ScrollViewPanGesture key={index} title={title} index={index} transalteX={clampedTransalateX} />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default ScrollViewWithPanGesture

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})