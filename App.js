import React from "react";
import {
  extendTheme
} from "native-base";
const Stack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import XiaomiScreen from './screens/XiaomiScreen'
import HuaweiScreen from './screens/HuaweiScreen'
import WatchScreen from './screens/WatchScreen'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const customTheme = extendTheme({ config });


export default function App() {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home',  headerStyle: {
            backgroundColor: '#00823d' }}}
            
        />
        <Stack.Screen name="XiaomiModel" component={XiaomiScreen} />
        <Stack.Screen name="HuaweiModel" component={HuaweiScreen} />
        <Stack.Screen name="WatchModel" component={WatchScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}