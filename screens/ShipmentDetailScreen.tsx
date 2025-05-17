// src/screens/ShipmentDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailRouteProp = RouteProp<DrawerParamList, 'ShipmentDetail'>;
type NavigationProp = NativeStackNavigationProp<DrawerParamList>;

export default function ShipmentDetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { shipmentId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del Envío</Text>
      <Text>ID: {shipmentId}</Text>
      {/* Aquí puedes mostrar más detalles del envío */}
      <Button
        title="Editar Envío"
        onPress={() => navigation.navigate('EditShipment', { shipmentId })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});
