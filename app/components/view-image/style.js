import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: "75%"
    },
    closeIcon: {
        position: "absolute",
        top: 20,
        left: 30
    },
    deleteIcon: {
        position: "absolute",
        top: 20,
        right: 30
    }
})

export default styles;