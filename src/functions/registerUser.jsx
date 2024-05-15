import { API_URL } from "../../config";

const registerUser = async (name, email, password) => {
    try {
        const registerUrl = `${API_URL}/users/register`
        const response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Error al registrar');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      throw error;
    }
  };
  
  export default registerUser;