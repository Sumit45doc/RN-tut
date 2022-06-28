import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextTut from './src/coreComp/TextTut';
import ViewTut from './src/coreComp/ViewTut';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text} >Hey, React Native</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <ViewTut /> */}
      <TextTut />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    marginHorizontal: 10,
  }
});
