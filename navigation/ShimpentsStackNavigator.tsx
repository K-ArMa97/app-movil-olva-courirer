// src/navigation/ShipmentsStackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShipmentsScreen from '../screens/ShipmentsScreen';
import ShipmentDetailScreen from '../screens/ShipmentDetailScreen';
import CreateShipmentScreen from '../screens/CreateShipmentScreen';
import EditShipmentScreen from '../screens/EditShipmentScreen';

type ShipmentsStackParamList = {
  Shipments: undefined;
  ShipmentDetail: { shipmentId: string };
  CreateShipment: undefined;
  EditShipment: { shipmentId: string };
};

const Stack = createNativeStackNavigator<ShipmentsStackParamList>();

const ShipmentsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Shipments" component={ShipmentsScreen} options={{ title: 'Gestión de Envíos' }} />
    <Stack.Screen name="ShipmentDetail" component={ShipmentDetailScreen} options={{ title: 'Detalle Envío' }} />
    <Stack.Screen name="CreateShipment" component={CreateShipmentScreen} options={{ title: 'Crear Envío' }} />
    <Stack.Screen name="EditShipment" component={EditShipmentScreen} options={{ title: 'Editar Envío' }} />
  </Stack.Navigator>
);

export default ShipmentsStackNavigator;
