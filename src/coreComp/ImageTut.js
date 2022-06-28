import { Image, View, Text} from 'react-native';

function ImageTut() {
    return (
        <View>
            <Image source={require("../../assets/favicon.png")} />
            <Image source={{ width: 200, height: 300, uri: "https://picsum.photos/200/300?grayscale" }} />
            <Image blurRadius={5} onLoad={() => console.log("loaded")} fadeDuration={2000} loadingIndicatorSource={<Text>loading</Text>} source={{ width: 200, height: 300, uri: "https://picsum.photos/500/500?random=7" }} />
            {/* <Image blurRadius={5} defaultSource={require("./assets/favicon.png")} source={{width: 500,height: 500, uri: "https://picsum.photos/400/800?random=3"}} /> */}
        </View>
    )
}

export default ImageTut