import { API_URL } from "../../config";

const getComments = async (id) => {
  const commentsUrl = `${API_URL}/comments/${id}`; // Ajustar la URL para incluir el parámetro 'movie'
  try {
    const response = await fetch(commentsUrl);

    if (response.ok) {
      const comments = await response.json();
      console.log(comments);
      return comments;
    } else {
      throw new Error('Error al obtener los comentarios: No se pudo obtener una respuesta exitosa de la API.');
    }
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
    throw error;
  }
};

export default getComments;
