import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";

const GestureNames = [
  {
    name: "Pan Gesture",
    path: "/animation/PanGesture/",
  },
  {
    name: "Interpolate with ScrollView",
    path: "/animation/InterPolateWithScrollView/",
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reanimated Different Animations</Text>
      <ScrollView style={styles.scrollView}>
        {GestureNames.map((gesture, index) => (
          <Card key={index} title={gesture.name} goTo={gesture.path} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    marginTop: 40,
    flex: 1,
  },
  scrollView: {
    marginVertical: 20,
    width: "100%",
    paddingHorizontal: 50,
  },
});

export default Home;
