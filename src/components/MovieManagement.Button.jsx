import { useNavigate } from 'react-router-dom';

const ManageButton = () => {
  const userId = localStorage.getItem('user_id');
  const navigate = useNavigate();

  // Verifica si el usuario tiene el ID específico y muestra el botón solo en ese caso
  if (userId === '6641b31f404fd8f7ebbd0d79') {
    return (
      <button
        className="btn btn-danger ms-3 mb-4"
        onClick={() => navigate('/manageMovies')}
      >
        Administrar películas
      </button>
    );
  } else {
    // Si no cumple la condición, retorna null para no renderizar nada
    return null;
  }
};

export default ManageButton;
