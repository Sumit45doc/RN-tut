FlatList is the component of react-native which work similar to map in reactjs web.
It render the list of item.
Props:-
- data
- keyExtractor (unique key)
- renderItems (has list item for rendering the list)
- ItemSeparatorComponent (separator component between items)

Syntax:-
< FlistList data={Items} keyExtractor={item => item.id}  renderItems={({item, index}) =>  < component />} />



Package - expo-constants
This package give all the meta data of the phone.