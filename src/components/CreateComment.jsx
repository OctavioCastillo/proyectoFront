import { useNavigate } from 'react-router-dom';

const NewCommentButton = () => {
  const navigate = useNavigate();

  const handleComentarioClick = () => {
    const userToken = localStorage.getItem('user_token');

    if (userToken) {
      navigate('/newComment');
    } else {
      // Redirige al usuario a la página de login
      navigate('/login');
      // Muestra una alerta
      alert('¡Tienes que hacer login antes!');
    }
  };

  return (
    <button className="btn btn-danger ms-3 mt-2" onClick={handleComentarioClick}>
      Crear Comentario
    </button>
  );
};

export default NewCommentButton;
