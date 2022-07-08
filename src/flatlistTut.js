import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

function FlatlistTut() {
    const messages = [
        { id: 1, item: 'shirt' },
        { id: 2, item: 't-shirt' },
        { id: 3, item: 'pant' },
        { id: 4, item: 'jacket' },
    ]
    return (
        <View style={styles.container}>
            <FlatList data={messages} keyExtractor={message => message.id} renderItem={({ item }) => <Text>{item.item}</Text>} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {}
})

export default FlatlistTut