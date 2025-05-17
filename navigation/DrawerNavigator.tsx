// src/navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from './types'; // 👈 importar los tipos
import HomeScreen from '../screens/HomeScreen';
import ShipmentsScreen from '../screens/ShipmentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShipmentsStackNavigator from './ShimpentsStackNavigator';

const Drawer = createDrawerNavigator<DrawerParamList>(); // 👈 aplicar el tipo

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Drawer.Screen name="Shipments" component={ShipmentsStackNavigator} options={{ title: 'Gestión de Envíos' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Mi Perfil' }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
