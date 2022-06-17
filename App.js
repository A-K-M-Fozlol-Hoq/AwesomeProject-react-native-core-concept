import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <View style={styles.view1} />
        <View style={styles.view2} />
        <View style={styles.view3} />
        <View style={styles.view4} />
        <View style={styles.view5} />
      </View>
      <StatusBar style="light"></StatusBar>
      {/* <StatusBar style="dark"></StatusBar> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  view1: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  view2: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  view3: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  view4: {
    backgroundColor: 'orange',
    height: 100,
    width: 100,
  },
  view5: {
    backgroundColor: 'black',
    height: 100,
    width: 100,
  },
});

// export const Button = ({ title }) => {
//   return (
//     <Pressable
//       style={{
//         backgroundColor: 'blue',
//         padding: 10,
//         alignItems: 'center',
//         marginTop: 20,
//       }}
//       onPress={() => {
//         alert('Pressed');
//       }}
//     >
//       <Text>{title}</Text>
//     </Pressable>
//   );
// };

// export default function App() {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View style={{ height: 50, backgroundColor: 'blue' }}>
//           <Text>This is a text</Text>
//         </View>
//         <View style={{ height: 50, backgroundColor: 'green' }}>
//           <Text
//             style={{
//               color: 'white',
//               padding: 10,
//               fontWeight: 'bold',
//               fontSize: 24,
//             }}
//           >
//             This is another text
//           </Text>
//         </View>

//         <View style={{ marginTop: 50, marginLeft: 40 }}>
//           <Image
//             style={{ height: 180, width: 200 }}
//             source={require('./assets/favicon.png')}
//             resizeMode="container"
//           />
//         </View>
//         <View style={{ marginTop: 50, marginLeft: 40 }}>
//           <Image
//             style={{ height: 180, width: 200 }}
//             source={{
//               uri: 'https://avatars.githubusercontent.com/u/61866994?v=4',
//             }}
//             resizeMode="cover"
//           />
//         </View>
//         <View style={{ marginTop: 50, marginLeft: 40 }}>
//           <Image
//             style={{ height: 180, width: 200 }}
//             source={{
//               uri: 'https://avatars.githubusercontent.com/u/61866994?v=4',
//             }}
//             resizeMode="cover"
//           />
//         </View>

//         <Button title="press"></Button>
//         <Button title="2nd-button"></Button>

//         <Pressable
//           onPress={() => {
//             alert('Pressed');
//           }}
//         >
//           <View
//             style={{ height: 60, width: 60, backgroundColor: 'red' }}
//           ></View>
//         </Pressable>

//         <View>
//           <Text>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
//             quisquam molestiae, itaque maxime vel illo reiciendis aliquid culpa!
//             Repellat tempora nesciunt dolorem ad tenetur id laborum est
//             laudantium iste neque error fugit possimus in incidunt, magnam
//             mollitia expedita quaerat vero!
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
