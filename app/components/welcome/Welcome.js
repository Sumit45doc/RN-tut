import React from 'react'
import { Button, Text, Image, ImageBackground, View } from 'react-native'
import styles from './style';

function Welcome() {
  return (
    <ImageBackground source={require('../../../assets/background.jpg')} style={styles.background}>
      <View style={styles.content} >
        <Image source={require('../../../assets/logo-red.png')} style={styles.image} />
        <Text>text tect text text</Text>
      </View>
      {/* <View style={styles.buttonGroup} >
        <Button title='Login' style={styles.loginButton} />
        <Button color={'red'} title='register' />
      </View> */}
      <View style={styles.loginButton} ></View>
      <View style={styles.registerButton} ></View>
    </ImageBackground>
    )
}

export default Welcome