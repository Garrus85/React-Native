import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image } from 'react-native';
import { useState } from 'react'
import Styles from './Components/Styling';
import Greeting from './Components/Greeting'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={Styles.container}>
      <Image source={require('./Images/logo.png')} />
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click Me" />

      <Text style={Styles.MainText}>Welcome to my Tutorial app</Text>
      <StatusBar style="auto" />


      <Greeting name="Jin" />
      <Greeting name="Skar" />
      <Greeting name="Geralt" />

    </View>
  );
}