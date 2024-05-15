import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import getName from "../functions/getUserName";

const UserName = ({ userId }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (userId) {
          const userName = await getName(userId);
          setName(userName);
        }
      } catch (error) {
        console.error('Error al obtener el nombre del usuario:', error);
      }
    };

    fetchUserName();
  }, [userId]);

  return (
    <div>{name}</div>
  );
}

// Agrega validación de tipo para userId
UserName.propTypes = {
  userId: PropTypes.string.isRequired // Asigna el tipo de userId y especifica que es obligatorio
};

export default UserName;
