import React from 'react'
import { Image, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from './style';
import colors from '../../config/colors';

function ViewImage() {
    return (
        <View style={styles.container} >
            <View style={styles.closeIcon} >
                <MaterialCommunityIcons name='close' color={colors.white} size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={30} />
            </View>
            <Image resizeMode='contain' source={require("../../../assets/chair.jpg")} style={styles.image} />
        </View>
    )
}

export default ViewImage