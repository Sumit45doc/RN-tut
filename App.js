import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/encapsulation/AppButton';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/shared/Card';
import FlatlistTut from './src/flatlistTut';


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <ListingDetailsScreen /> */}
      {/* <ViewImageScreen /> */}
      <FlatlistTut />
      {/* <Text>A</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'andriod' ? 20 : 44
  },
  text: {
    marginHorizontal: 10,
  }
});
