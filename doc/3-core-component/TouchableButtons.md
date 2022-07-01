There are 3 native touchable buttons.
1. TouchableOpacity
2. TouchableHighlight
3. TouchableWithoutFeedback

- All are use for press button with some effects.
- As Image component don't have onPress event so we need to wrap it with touchable component for event handling.
- main props -> onPress

> There is one more touchable component only supported in andriod ->  TouchableNativeFeedback  (only work with view). 
> All the touchable component cann't take multiple children as view so we need to wrapp the child of touchable with view.