import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AuthenticatedScreen({ navigation }: any) {
  useEffect(() => {
    // Redirige al usuario a la pantalla principal una vez autenticado
    navigation.replace('Home'); // Cambia 'Home' por el nombre de tu pantalla principal
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Autenticando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});