import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/encapsulation/AppText';
import colors from '../config/colors';

function ListItem(props) {
    const { image, title, subTitle } = props;
  return (
    <View style={styles.container}>
        {image && <Image source={image} style={styles.image} />}     
          <View style={styles.detailsContainer}>
              <AppText style={styles.title} >{title}</AppText>
              <AppText style={styles.subTitle} >{subTitle}</AppText>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    detailsContainer: {
        marginLeft: 10,
    },
    title: {
        fontWeight: "500",
        fontSize: 18
    },
    subTitle: {
        fontSize: 16,
        color: colors.medium
    }

})

export default ListItem