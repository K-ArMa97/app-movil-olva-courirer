// src/screens/EditShipmentScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { DrawerParamList } from '../navigation/types';

type EditRouteProp = RouteProp<DrawerParamList, 'EditShipment'>;

export default function EditShipmentScreen() {
  const route = useRoute<EditRouteProp>();
  const { shipmentId } = route.params;

  const handleSave = () => {
    Alert.alert('Actualizado', `El envío ${shipmentId} ha sido editado`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Envío</Text>
      <Text>ID: {shipmentId}</Text>
      {/* Inputs para modificar datos */}
      <Button title="Guardar Cambios" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});
