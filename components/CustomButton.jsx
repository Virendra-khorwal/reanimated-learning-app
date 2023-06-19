import { Pressable, View } from "react-native"


const CustomButton = ({ children, style, onPress }) => {

    return (
      <Pressable onPress={onPress}>
        <View style={style}>{children}</View>
      </Pressable>
    );
}

export default CustomButton