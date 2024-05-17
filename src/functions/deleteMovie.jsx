import { API_URL } from "../../config";

const deleteMovie = async (id_movie) => {
    try {
        const moviesUrl = `${API_URL}/movies/${id_movie}`;
        const userToken = localStorage.getItem('user_token');

        if (!userToken) {
            throw new Error('No se encontró el token de usuario');
        }

        const response = await fetch(moviesUrl, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error al borrar película');
        }
    } catch (error) {
        console.error('Error al borrar película:', error);
        throw error;
    }
};

export default deleteMovie;
