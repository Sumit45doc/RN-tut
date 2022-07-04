import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AppText from '../components/encapsulation/AppText';
import colors from '../config/colors';

function Card(props) {
    const { image, title, subTitle } = props;
    return (
        <View style={styles.card} >
            <Image source={image} style={styles.image} />
            <View  style={styles.detailsContainer} >
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    detailsContainer: {
        padding: 18
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})

export default Card