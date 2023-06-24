import { View, Text, StyleSheet } from "react-native";
import Head from "expo-router/head";

const InterPolateWithScrollView = () => {
  return (
    <>
    <Head>
        <title>Interpolate With ScrollView</title>
    </Head>
      <View style={styles.container}></View>
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
