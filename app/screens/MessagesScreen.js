import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../shared/ListItem';
import ListItemSeparator from '../shared/ListItemSeparator';
import Screen from '../shared/Screen';

function MessagesScreen() {
    const messages = [
        {id: 1, title: "T1", subTitle: "D1", image: require("../../assets/mosh.jpg")},
        {id: 2, title: "T2", subTitle: "D2", image: require("../../assets/mosh.jpg")},
    ]
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id}
                renderItem={({ item }) => (
                <ListItem title={item.title} subTitle={item.subTitle} image={item.image} />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {}
})

export default MessagesScreen