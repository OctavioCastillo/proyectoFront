import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from '../functions/getMovies';

const MovieInfo = () => {
  const { id } = useParams(); // Obtener el ID de la película de la URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movies = await getMovies();
        const selectedMovie = movies.find(movie => movie._id === id); // Buscar la película con el ID correspondiente
        setMovie(selectedMovie);
      } catch (error) {
        console.error('Error al obtener la película:', error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default MovieInfo;
