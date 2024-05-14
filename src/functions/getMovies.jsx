import { API_URL } from "../../config";

const getMovies = async () => {
  const moviesUrl = `${API_URL}/movies`;
  try {
    const response = await fetch(moviesUrl);

    if (response.ok) {
      const movies = await response.json();
      return movies;
    } else {
      throw new Error('Error al obtener películas: No se pudo obtener una respuesta exitosa de la API.');
    }
  } catch (error) {
    console.error('Error al obtener películas:', error);
    throw error;
  }
};

export default getMovies;
