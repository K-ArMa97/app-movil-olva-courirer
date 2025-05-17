import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { theme } from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
};

export default function LoginScreen({navigation}:Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, loading } = useAuth();

  const onSubmit = async () => {
    try {
      await handleLogin(email, password);
      navigation.replace('Authenticated'); // Redirige a la pantalla de autenticación
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Input placeholder="Correo" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title={loading ? 'Cargando...' : 'Entrar'} onPress={onSubmit} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    color: theme.colors.text,
    textAlign: 'center',
  },
  link: {
    marginTop: 16,
    color: theme.colors.primary,
    textAlign: 'center',
  },
});
