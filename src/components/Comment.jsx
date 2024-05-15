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
    <div>
      {comments ? (
        comments.map(comment => (
          <div key={comment._id}>
            <div>
              <UserName userId={comment.user} />
            </div>
            <div>
              {comment.comment}
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
