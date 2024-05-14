import { useState, useEffect } from "react";
import getMovies from "../functions/getMovies";

const Movie = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center mx-auto">
          {movies.map(movie => (
            <div key={movie._id} className="col-md-3 mb-4">
              <div className="card text-bg-dark" style={{ maxWidth: "16rem", height: "380px" }}>
                <img
                  src={movie.img}
                  className="card-img-top"
                  alt={movie.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{movie.title}</h5>
                  <button className="btn btn-danger mt-auto mb-2">Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
