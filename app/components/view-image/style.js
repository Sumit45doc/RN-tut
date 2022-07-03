import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    closeIcon: {
        backgroundColor: "#fc5c65",
        position: "absolute",
        width: 50,
        height: 50,
        top: 30,
        left: 30
    },
    deleteIcon: {
        backgroundColor: "#4ecdc4",
        position: "absolute",
        width: 50,
        height: 50,
        top: 30,
        right: 30
    }
})

export default styles;