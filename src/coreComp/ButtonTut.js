import React from 'react'
import { Button, View } from 'react-native'

function ButtonTut() {
  return (
      <View>
          <Button title='buttons' onPress={() => console.log("pressed button")} />
    </View>
  )
}

export default ButtonTut