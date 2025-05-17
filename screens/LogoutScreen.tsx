import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      {/* Otros datos de perfil */}
      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
