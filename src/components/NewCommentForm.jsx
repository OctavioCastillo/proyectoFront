import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createComment from '../functions/createComment';

const NewCommentForm = () => {
  const [comment, setComment] = useState('');
  const [score, setScore] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const movieId = localStorage.getItem('selectedMovieId');
      if (!movieId) {
        throw new Error('No se encontró el ID de la película seleccionada');
      }
      
      // Llama a la función createComment con los datos del formulario
      const response = await createComment(comment, score, movieId);
      console.log('Respuesta de la creación del comentario:', response);
      
      // Limpiar los campos después de enviar el comentario exitosamente
      setComment('');
      setScore(1);

      // Redirige al usuario a la página de información de la película con el ID seleccionado
      navigate(`/movieInfo/${movieId}`);
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
      // Aquí puedes manejar el error de enviar el comentario, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-1" style={{ minHeight: '100vh', backgroundColor: '#000', color: 'white' }}>
      <div className="container-sm border border-danger m-auto" style={{ maxHeight: '60vh', maxWidth: '30vw' }}>
        <h2 className='mt-3 text-center mb-4'>Nuevo Comentario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">Comentario:</label>
            <input
              type="text"
              className="form-control"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="score" className="form-label">Puntuación:</label>
            <select
              className="form-select"
              id="score"
              value={score}
              onChange={(e) => setScore(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className="btn btn-danger mb-3">Enviar Comentario</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCommentForm;
