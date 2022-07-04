import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/encapsulation/AppButton';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <ViewImageScreen /> */}
      <AppButton title={'login'} onPress={() => console.log("Tapped")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 10,
  }
});
