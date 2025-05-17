import { useState } from 'react';
import { login } from '../services/AuthService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      await login(email, password);
      // Navegar o actualizar estado global aquí
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};
