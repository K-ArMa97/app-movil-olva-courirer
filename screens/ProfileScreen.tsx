// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = () => {
  const handleLogout = () => {
    // Aquí debes limpiar el token/context y redirigir
    console.log('Cerrar sesión');
  };

  return (
    <View>
      <Text>Perfil de Usuario</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
