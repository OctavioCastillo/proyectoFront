import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from '../functions/getMovies';
import Comment from './Comment';
import Navbar from './Navbar';

const MovieInfo = () => {
  const { id } = useParams(); // Obtener el ID de la película de la URL
  console.log(`id de la película ${id}`)
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
    <>
    < Navbar />
      <div className='d-flex container pt-4' style={{ backgroundColor: 'black', color: 'white' }}>
        {movie ? (
          <div className='justify-content-evenly'>
            <h1 className='text-capitalize text-center'>{movie.title}</h1>
            <div className='row mt-5'>
              <div className="col-md-6">
                <img 
                  className='mx-5'
                  src={movie.img} 
                  alt={movie.title} 
                  style={{ width: '18rem', height: '400px' }} // Establecer el tamaño de la imagen
                />
              </div>
              <div className="col-md-6 pt-4">
                <h3>Director: {movie.director}</h3>
                <h3>{movie.year}</h3>
                <p>{movie.sinopsis}</p>
              </div>
            </div>
            <div className='d-flex'>
              <div className='justify-content-center'>
                <h3 className='justify-content-center mt-5 ms-3'>Comentarios</h3>
                < Comment /> 
              </div>
            </div>
          </div>
        ) : (
          <div className='text-center'>Cargando...</div>
        )}
      </div>
    </>
  );
};

export default MovieInfo;
