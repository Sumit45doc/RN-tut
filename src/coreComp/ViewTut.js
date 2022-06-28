import { View, StyleSheet, Text } from "react-native";

function ViewTut() {
    return (
        <View style={[styles.container, styles.subContainer]}>
            <Text onPress={() => console.log("Text")}>Hello View</Text>
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
        backgroundColor: "dodgerblue"
    }
})

export default ViewTut