import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import CustomButton from "../components/CustomButton";

export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <MaterialIcons name="motion-photos-on" size={50} color="#000" />
        <Text style={styles.title}>Reanimated</Text>
        <Text style={styles.subtitle}>
          This is the to practice animation using reanimated package. It will
          include all type of animation reanimated provide.
        </Text>
        <CustomButton
          style={styles.button}
          onPress={() => router.replace("/home")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "600",
              paddingHorizontal: 20,
            }}
          >
            Let's Start
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
        </CustomButton>
      </View>
      <StatusBar style="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    alignItems: "center",
  },
  title: {
    fontSize: 58,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 30,
    color: "#38434D",
    marginTop: 24,
  },
  button : {
    marginTop: 30,
    backgroundColor: "#000",
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 5,
  }
});
