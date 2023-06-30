
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const BasicPinchGesture = () => {
  return (
    <View>
      <Stack.Screen options={{
        title: 'Basic Pinch Gesture',
      }}/>
      <Text>BasicPinchGesture</Text>
    </View>
  )
}

export default BasicPinchGesture

const styles = StyleSheet.create({})