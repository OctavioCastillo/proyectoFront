import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import createMovie from '../functions/createMovie';
import updateMovie from '../functions/updateMovie';
import deleteMovie from '../functions/deleteMovie';

const MovieForm = () => {
  const [movieId, setMovieId] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // Verifica si la variable user_id tiene el valor específico
      const userId = localStorage.getItem('user_id');
      if (userId !== '6641b31f404fd8f7ebbd0d79') {
        throw new Error('El usuario no tiene permisos para realizar esta acción');
      }

      // Crea la película con los datos del formulario
      await createMovie(title, year, director, sinopsis, img);
      alert('La película fue creada');
      navigate('/');
    } catch (error) {
      console.error('Error al crear película:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Verifica si la variable user_id tiene el valor específico
      const userId = localStorage.getItem('user_id');
      if (userId !== '6641b31f404fd8f7ebbd0d79') {
        throw new Error('El usuario no tiene permisos para realizar esta acción');
      }

      // Actualiza la película con los datos del formulario
      await updateMovie(movieId, title, year, director, sinopsis, img);
      alert('La película fue actualizada');
      navigate('/');
    } catch (error) {
      console.error('Error al actualizar película:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  };

  const handleDelete = async () => {
    try {
      // Verifica si la variable user_id tiene el valor específico
      const userId = localStorage.getItem('user_id');
      if (userId !== '6641b31f404fd8f7ebbd0d79') {
        throw new Error('El usuario no tiene permisos para realizar esta acción');
      }

      // Elimina la película con el ID proporcionado
      await deleteMovie(movieId);
      alert('La película fue eliminada');
      navigate('/');
    } catch (error) {
      console.error('Error al eliminar película:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center mt-1 mb-5" style={{ minHeight: '100vh', backgroundColor: '#000', color: 'white' }}>
        <div className="container-sm border border-danger" style={{ minHeight: '80vh', maxWidth: '50vw' }}>
          <h2 className="text-center mb-4 mt-3">Ingresa los datos de la película</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="movieId" className="form-label">ID de la película:</label>
              <input
                type="text"
                className="form-control"
                id="movieId"
                value={movieId}
                onChange={(e) => setMovieId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Título:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">Año:</label>
              <input
                type="text"
                className="form-control"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="director" className="form-label">Director:</label>
              <input
                type="text"
                className="form-control"
                id="director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sinopsis" className="form-label">Sinopsis:</label>
              <textarea
                className="form-control"
                id="sinopsis"
                value={sinopsis}
                onChange={(e) => setSinopsis(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="img" className="form-label">Imagen (Url):</label>
              <input
                type="text"
                className="form-control"
                id="img"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className='d-flex justify-content-center mb-3'>
              <button type="button" className="btn btn-danger me-3" onClick={handleCreate}>Crear</button>
              <button type="button" className="btn btn-primary me-3" onClick={handleUpdate}>Modificar</button>
              <button type="button" className="btn btn-warning" onClick={handleDelete}>Borrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieForm;
