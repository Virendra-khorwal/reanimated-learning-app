import { useRouter } from "expo-router";
import { Pressable, Text, View, StyleSheet } from "react-native"

const Card = ({ title, goTo }) => {
    const route = useRouter();
    return (
      <Pressable style={styles.outerContainer} onPress={() => route.push(goTo)} >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 10,
    },
    innerContainer: {
        padding: 16,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
    },
})

export default Card;