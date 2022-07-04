import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/encapsulation/AppButton';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/shared/Card';


export default function App() {
  
  return (
    <>
      <ListingDetailsScreen />
    </>
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
