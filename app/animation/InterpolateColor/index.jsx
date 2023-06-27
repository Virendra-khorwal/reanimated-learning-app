import { Stack } from 'expo-router'
import React from 'react'
import { useSearchParams } from 'expo-router'
import { StyleSheet, View } from 'react-native'

const InterpolateColor = () => {
  const params = useSearchParams()
  return (
    <>
    <Stack.Screen options={{
      headerTitle: params.title,
    }} />
    <View style={styles.container}>
      Inter Polate Color
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: 'center',
  }
})

export default InterpolateColor