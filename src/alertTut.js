import React from 'react'
import { Alert, Button, View } from 'react-native'

function AlertTut() {
  return (
    <View>
        <Button onPress={() => alert("js alert works yeh!!")} title="alert" />      
        <View style={{marginVertical: 10}} ></View>
        <Button onPress={() => Alert.alert("title", "Here comes all message", [{text: "yes", onPress: () => console.log("yes")}, {text: "no", onPress: () => console.log("no")}])} title="Alert api" />      
        <View style={{marginVertical: 10}} ></View>
        <Button onPress={() => Alert.prompt("title", "Here comes all message", text=> console.log(text))} title="Alert api prompt" />      
    </View>
  )
}

export default AlertTut