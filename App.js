import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/encapsulation/AppButton';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/shared/Card';


export default function App() {
  
  return (
    <View style={{backgroundColor: "#f8f4f4",  padding: 20, paddingTop: 100}} >
      <Card title="Red jacket for sale" subTitle="$100" image={require('./assets/jacket.jpg')} />
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
