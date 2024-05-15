import { API_URL } from "../../config";

const createComment = async (comment, score, movie) => {
    try {
        const commentUrl = `${API_URL}/comments`
        const userToken = localStorage.getItem('user_token');

        if (!userToken) {
            throw new Error('No se encontró el token de usuario');
        }

        const response = await fetch(commentUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({ comment, score, movie })
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error al crear comentario');
        }
    } catch (error) {
        console.error('Error al crear comentario:', error);
        throw error;
    }
};

export default createComment;
