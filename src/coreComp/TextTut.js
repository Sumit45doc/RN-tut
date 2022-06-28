import { View, StyleSheet, Text } from "react-native";

function TextTut() {
    return (
        <View style={[styles.container, styles.subContainer]}>
            <Text onPress={() => console.log("Text")}>Hello Text</Text>
            <Text numberOfLines={1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the</Text>
            <Text onLongPress={() => console.log("long Text")}>Long press Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lavender"
    },
    subContainer: {
        // override
        backgroundColor: "whitesmoke"
    }
})

export default TextTut