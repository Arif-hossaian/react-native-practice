import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screen/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
