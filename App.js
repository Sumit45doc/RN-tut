import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import DimensionTut from './src/dimensionTut';


export default function App() {
  
  return (
    <View style={styles.container}>
      <DimensionTut />
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
