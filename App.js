import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ height: 50, backgroundColor: 'blue' }}>
        <Text>This is a text</Text>
      </View>
      <View style={{ height: 50, backgroundColor: 'green' }}>
        <Text
          style={{
            color: 'white',
            padding: 10,
            fontWeight: 'bold',
            fontSize: 24,
          }}
        >
          This is another text
        </Text>
      </View>

      <Image
        style={{ height: 80, width: 120 }}
        source={require('./assets/favicon.png')}
      />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
