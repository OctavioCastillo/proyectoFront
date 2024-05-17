import { API_URL } from "../../config";

const createMovie = async (title, year, director, sinopsis, img) => {
    try {
        const createMoviesUrl = `${API_URL}/movies`
        const userToken = localStorage.getItem('user_token');

        if (!userToken) {
            throw new Error('No se encontró el token de usuario');
        }

        const response = await fetch(createMoviesUrl, {
            method: 'POST',
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
            throw new Error('Error al crear pelicula');
        }
    } catch (error) {
        console.error('Error al crear pelicula:', error);
        throw error;
    }
};

export default createMovie;
