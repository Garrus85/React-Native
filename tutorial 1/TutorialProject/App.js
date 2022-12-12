import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, Image } from 'react-native';
import { useState } from 'react';
import Styles from './Components/Styling';
import Greeting from './Components/Greeting'
import Crypto from './Components/Crypto';
import Menu from './Menu';

const Stack = createStackNavigator();

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <View style={Styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image source={require('./Images/logo.png')} style={{ width: '100%', height: '100%' }} />
        <Text>CLICK COUNT {count} times</Text>
        <Button onPress={() => setCount(count + 1)} title="Click Me" />

        <Text style={Styles.MainText}>Welcome to my Tutorial app</Text>
        <StatusBar style="auto" />
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Greeting' headerMode='off'>

          <Stack.Screen name='Greeting' options={{ headerShown: false }}>
            {(props) => <Greeting {...props} name='Jin Sakai' />}
          </Stack.Screen>

          <Stack.Screen name='CryptoList' component={Crypto} options={{
            headerTitleAlign: 'center'
          }}>

          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
   
    </>
  );
}
export default App;