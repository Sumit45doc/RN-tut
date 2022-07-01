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
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#E57373",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    buttonGroup: {
        
    }
})

export default styles;