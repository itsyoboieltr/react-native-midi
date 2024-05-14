import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeMidi from 'react-native-midi';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeMidi.hello()}</Text>
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
});
