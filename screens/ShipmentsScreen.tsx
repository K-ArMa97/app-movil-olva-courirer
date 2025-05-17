// src/screens/ShipmentsScreen.tsx
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<DrawerParamList, 'Shipments'>;

const shipments = [
  { id: '1', title: 'Paquete 1' },
  { id: '2', title: 'Paquete 2' },
];

const ShipmentsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={shipments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('ShipmentDetail', { shipmentId: item.id })
            }
          >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Crear Envío"
        onPress={() => navigation.navigate('CreateShipment')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  item: {
    padding: 16,
    backgroundColor: '#f3f3f3',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
});

export default ShipmentsScreen;
