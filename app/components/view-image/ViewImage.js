import React from 'react'
import { Image, View } from 'react-native'
import styles from './style';

function ViewImage() {
    return (
        <View style={styles.container} >
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image resizeMode='contain' source={require("../../../assets/chair.jpg")} style={styles.image} />
        </View>
    )
}

export default ViewImage