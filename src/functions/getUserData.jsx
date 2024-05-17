import { API_URL } from "../../config";

const getUserData = async () => {
    try {
        const userDataUrl = `${API_URL}/users/showdata`;
        const userToken = localStorage.getItem('user_token');

    if (!userToken) {
        throw new Error('No se encontró el token de usuario');
    }

    const response = await fetch(userDataUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
    });

    if (response.ok) {
      const user_data = await response.json();
      console.log(user_data)
      return user_data;
    } else {
      throw new Error('Error al obtener datos del usuario: No se pudo obtener una respuesta exitosa de la API.');
    }
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

export default getUserData;
