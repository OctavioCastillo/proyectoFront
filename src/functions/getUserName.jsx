import { API_URL } from "../../config";

const getName = async (id) => {
  const usersUrl = `${API_URL}/users/${id}`;
  try {
    const response = await fetch(usersUrl);

    if (response.ok) {
      const userData = await response.json();
      // Verifica si hay algún usuario en la respuesta
      if (userData.length > 0) {
        // Devuelve el nombre del primer usuario en el array
        return userData[0].name;
      } else {
        throw new Error('No se encontró ningún usuario con el ID proporcionado.');
      }
    } else {
      throw new Error('Error al obtener el nombre: No se pudo obtener una respuesta exitosa de la API.');
    }
  } catch (error) {
    console.error('Error al obtener nombre:', error);
    throw error;
  }
};

export default getName;
