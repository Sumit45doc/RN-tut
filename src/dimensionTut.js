import React from 'react'
import { View, Text, Image } from 'react-native'
import { useDimensions, useDeviceOrientation, useImageDimensions } from "@react-native-community/hooks";
function DimensionTut() {
    
    const dimension = useDimensions();
    console.log(dimension);
    
    const orientations = useDeviceOrientation();
    console.log("orientations ", orientations);
    
    const image = { uri: "https://picsum.photos/200/300?grayscale" };
    
    const { dimensions, loading, error } = useImageDimensions(image);
    console.log("image dimension ", dimensions, "loading ", loading);

    if(loading || error || !dimensions) {
        return null
      }
    return (
        <View>
            <Text>Dimension</Text>
            {<Image source={{width: dimensions.width , height: dimensions.height, uri: "https://picsum.photos/200/300?grayscale"}} />}
        </View>
    )
}

export default DimensionTut