import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Constants from "expo-constants";
console.log(Constants);

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    }
})

export default Screen