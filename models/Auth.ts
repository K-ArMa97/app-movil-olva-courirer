// src/models/Auth.ts

// Reutilizable para todos los usuarios
export interface UserBase {
    email: string;
    name: string;
  }
  
  // Lo que envías al backend para iniciar sesión
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  // Lo que envías al backend para registrarte
  export interface RegisterRequest extends UserBase {
    password: string;
  }
  
  // Lo que recibes del backend
  export interface User extends UserBase {
    id: string;
    // ¡sin contraseña!
  }
  
  // Respuesta del backend cuando haces login o registro
  export interface AuthResponse {
    token: string;
    user: User;
  }
  