import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImageTut from './src/coreComp/ImageTut';
import TextTut from './src/coreComp/TextTut';
import TouchableTut from './src/coreComp/TouchableTut';
import ViewTut from './src/coreComp/ViewTut';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text} >Hey, React Native</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <ImageTut /> */}
      <TouchableTut />
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
