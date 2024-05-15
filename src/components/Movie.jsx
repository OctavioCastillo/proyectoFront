import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import getMovies from "../functions/getMovies";
import { movieInfoRoute } from "../main";
import Navbar from "./Navbar";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error al obtener películas:", error);
      }
    };

    fetchData();
  }, []);

  const getMovieId = (id) => {
    const path = movieInfoRoute.path.split('/')
    // Guarda el _id de la película seleccionada en localStorage
    localStorage.setItem("selectedMovieId", id);
    // Redirige al usuario a movieInfoRoute.path con el _id adjunto
    navigate(`/${path[1]}/${id}`);
  };

  return (
    <>
    < Navbar />
      <div className="d-flex justify-content-center align-items-center pt-0" style={{ minHeight: "80vh" }}>
        <div className="container">
          <h1 className="mb-4 text-start text-danger ms-3">Mis Películas</h1>
          <div className="row justify-content-center mx-auto">
            {movies.map(movie => (
              <div key={movie._id} className="col-md-3 mb-2">
                <div className="card text-bg-dark" style={{ maxWidth: "16rem", height: "380px" }}>
                  <img
                    src={movie.img}
                    className="card-img-top"
                    alt={movie.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{movie.title}</h5>
                    <button onClick={() => getMovieId(movie._id)} className="btn btn-danger mt-auto mb-2">Ver más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
