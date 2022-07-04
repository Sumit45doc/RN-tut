import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'


function AppText({children, style, ...rest}) {
    return (
        <Text style={[styles.Text, style]} {...rest} >{children}</Text>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fonntFamilt: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppText