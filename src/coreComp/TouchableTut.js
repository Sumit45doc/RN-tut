import { View, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';

function TouchableTut() {
    return (
        <View>
            <TouchableHighlight  onPress={() => console.log("on TouchableHightlight press")}>
                <Image source={{ width: 200, height: 200, uri: "https://picsum.photos/200/300?grayscale" }} />
            </TouchableHighlight>
            <TouchableOpacity onPress={() => console.log("on TouchableOpacity press")}>
                <Image source={{ width: 200, height: 200, uri: "https://picsum.photos/200/300" }} />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => console.log("on TouchableWithoutFeedback press")}>
                <Image source={{ width: 200, height: 200, uri: "https://picsum.photos/200/300" }} />
            </TouchableWithoutFeedback>
            <TouchableNativeFeedback onPress={() => console.log("on TouchableNativeFeedback press")}>
                <View style={{ height: 70, width: 200, backgroundColor: "dodgerblue" }}></View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default TouchableTut