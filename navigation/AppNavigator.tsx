import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AuthenticatedScreen from '../screens/AuthenticatedScreen';
import HomeScreen from '../screens/HomeScreen';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AppNavigator() {
  return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Authenticated" component={AuthenticatedScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />

  </Stack.Navigator>
  );
}
