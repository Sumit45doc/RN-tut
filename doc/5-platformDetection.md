To detect platform we can use api Platform from react native
- Platform.os === "ios" ? for ios : for andriod
- To detect statusbar there is statusbar api from react native

Dimension is the Api from react native which provide dimesion of the window & screen and many more..
Dimension.get("window);
Limitaion: Doesn't get updated dimension
To remove this limitation we need to use useDimension() hook  from  "react-native-community/hook" pkg

Orientation:
For Both landscape and portrait mode we need to change orientation: "default" in app.json file
To detect orientation of the device use useDeviceOrientation() from "react-native-community/hook" pkg which return {landscape: Boolean, potrait: Boolean}

Image Dimension:
To get dimension of external doamin use useImageDimensions() hooks from react-native-community/hook pkg which return {dimensions, error, loading}


Platform select styling:
Platform.select({}) return the object with styling properties by detecting platform
Syntax - 
    Platform.select({
        ios: {
            ...styling properties like flex:1
        },
        andriod: {
            ...styling
        }
    })
