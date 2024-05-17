import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getComments from '../functions/getComments';
import getMovies from '../functions/getMovies';
import UserName from './UserName';

const Comment = () => {
  const { id } = useParams(); 

  const [comments, setComments] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movies = await getMovies();
        const selectedMovie = movies.find(movie => movie._id === id); 
        setMovie(selectedMovie);
      } catch (error) {
        console.error('Error al obtener la película:', error);
      }
    };

    fetchMovie();
  }, [id]); 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (movie) { 
          const commentsData = await getComments(movie._id); 
          setComments(commentsData);
          // No es necesario almacenar los usuarios en localStorage aquí
        }
      } catch (error) {
        console.error('Error al obtener comentarios:', error);
      }
    };

    fetchComments();
  }, [movie]); 

  return (
    <div className='container my-5'>
    {comments ? (
        comments.map(comment => (
        <div key={comment._id} className='d-flex border border-danger border-2 w-100 rounded mb-3' style={{minHeight: '50px'}}>
            <div className='align-items-center justify-content-center mx-5  border-end border-white'>
                <div className='pe-5 pt-3' style={{minWidth: '180px'}}>
                    <UserName userId={comment.user} />
                </div>
            </div>
            <div style={{minWidth: '720px'}} className='mx-5 py-2'>
                {comment.comment}
                <div>Calificación: {comment.score}</div>
            </div>
        </div>
        ))
    ) : (
        <div>Cargando comentarios...</div>
    )}
    </div>
  );
};

export default Comment;
