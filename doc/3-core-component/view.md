 - View syntax looks like:- <br/>
   import { View } from "react-native" ;
 - View is like container same as div but doesn't follow concept like inline / block elements.
 - All the layout are default style to display flex and flex direction to column
 - As in div we can write text but we cannot write inside View. View is only for wrapping the widget.
 - Doesn't support event handler like onClick / onPress
 - To fire onPress use ToubleableOpacity / TouchableHightlights component instead of View component

> Below code will throw error as string should be wrapped inside Text
```code
    <View>Hello world</View>
```

For styling use style props
```code
  <View style={styles.container} >
    /// code
  </view>
```

For multiple styling make array of style:-
```code
  <View style={[styles.container, styles.nextStyle, {color: "blue"}]} >
    /// code
  </view>
```



###### Note: There is no concept of inherit parent style. Also inline style precedent rule doesn't apply.