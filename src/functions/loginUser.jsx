import { API_URL } from "../../config";

const loginUser = async (email, password) => {
    try {
        const loginUrl = `${API_URL}/users/login`
        const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };
  
  export default loginUser;
  