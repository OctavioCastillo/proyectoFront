import { API_URL } from "../../config";

const updateMovie = async (id, title, year, director, sinopsis, img) => {
    try {
        const updateMovieUrl = `${API_URL}/movies/${id}`
        const userToken = localStorage.getItem('user_token');

        if (!userToken) {
            throw new Error('No se encontró el token de usuario');
        }

        const response = await fetch(updateMovieUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({ title, year, director, sinopsis, img })
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error al actualizar película');
        }
    } catch (error) {
        console.error('Error al actualizar película:', error);
        throw error;
    }
};

export default updateMovie;
