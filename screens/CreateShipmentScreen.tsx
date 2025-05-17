// src/screens/CreateShipmentScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function CreateShipmentScreen() {
  const handleCreate = () => {
    Alert.alert('Envío creado', 'El nuevo envío fue registrado.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Envío</Text>
      {/* Aquí podrías usar componentes de formulario personalizados */}
      <Button title="Crear" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});
