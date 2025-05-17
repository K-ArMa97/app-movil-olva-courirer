const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
// mínimo 6 caracteres, al menos una letra y un número

export const login = async (email: string, password: string): Promise<void> => {
  if (!emailRegex.test(email)) throw new Error('Correo no válido');
  if (!passwordRegex.test(password)) throw new Error('La contraseña debe tener al menos 6 caracteres, con letras y números');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@empresa.com' && password === 'admin123') {
        resolve();
      } else {
        reject(new Error('Credenciales inválidas'));
      }
    }, 1000);
  });
};

export const register = async (email: string, password: string): Promise<void> => {
  if (!emailRegex.test(email)) throw new Error('Correo no válido');
  if (!passwordRegex.test(password)) throw new Error('La contraseña debe tener al menos 6 caracteres, con letras y números');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
