// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  token: string | null;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
  token: null,
});

type Props = { children: ReactNode };

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Cargar token de AsyncStorage al iniciar app
    const loadToken = async () => {
      const savedToken = await AsyncStorage.getItem('userToken');
      if (savedToken) setToken(savedToken);
    };
    loadToken();
  }, []);

  const login = async (newToken: string) => {
    await AsyncStorage.setItem('userToken', newToken);
    setToken(newToken);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        login,
        logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
