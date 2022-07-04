import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/encapsulation/AppText';
import colors from '../config/colors';
import ListItem from '../shared/ListItem';

function ListingDetailsScreen() {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/jacket.jpg")} style={styles.image} />
            <View style={styles.detailsContainer} >
                <AppText style={styles.title} >Red jacket for sale</AppText>
                <AppText style={styles.price} >$100</AppText>
                <View style={styles.userContainer} >
                    <ListItem image={require("../../assets/mosh.jpg")} title="Mosh hamedami" subTitle="5 listings" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 15
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 15
    }
})

export default ListingDetailsScreen