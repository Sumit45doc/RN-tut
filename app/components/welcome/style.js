import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    image: {
        width: 100,
        height: 100
    },
    content: {
        position: "absolute",
        top: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
  
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    tagline: {
        textTransform: "capitalize",
        fontWeight: "600",
        paddingVertical: 10,
        fontSize: 22,
    }
})

export default styles;