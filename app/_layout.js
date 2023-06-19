import { Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default () => {
    return (
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="home"
          options={{
            headerTitle: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <MaterialIcons
                  name="motion-photos-on"
                  size={24}
                  color="#000"
                />
                <Text style={{ fontWeight: 600, color:"#000" }}>Home</Text>
              </View>
            ),

          }}
        />
      </Stack>
    );
}