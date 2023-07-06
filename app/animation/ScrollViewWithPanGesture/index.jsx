
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const ScrollViewWithPanGesture = () => {
  return (
    <View>
        <Stack.Screen options={{
            headerTitle: "Scroll view With Pan Gesture",
        }} />
      <Text>ScrollViewWithPanGesture</Text>
    </View>
  )
}

export default ScrollViewWithPanGesture

const styles = StyleSheet.create({})