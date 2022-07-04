import React from 'react'
import { Button, Text, Image, ImageBackground, View } from 'react-native'
import AppButton from '../encapsulation/AppButton';
import styles from './style';

function Welcome() {
  return (
    <ImageBackground blurRadius={5} source={require('../../../assets/background.jpg')} style={styles.background}>
      <View style={styles.content} >
        <Image source={require('../../../assets/logo-red.png')} style={styles.image} />
        <Text style={styles.tagline}>sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer} >
        <AppButton title='Login'  />
        <AppButton title='register' color='secondary' />
      </View>
    </ImageBackground>
    )
}

export default Welcome