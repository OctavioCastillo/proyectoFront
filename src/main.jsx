import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import Dashboard from './routes/Dashboard.jsx';
import MovieInfo from './components/MovieInfo.jsx';
import MovieDoc from './routes/MoviePage.jsx';
import NewComment from './routes/NewComment.jsx';
import ManageMovies from './routes/ManageMoviesRoute.jsx';

export const movieInfoRoute = {
  path: '/movieInfo/:id',
  element: <MovieInfo />,
  errorElement: <div>Error componente MovieInfo</div>
}

export const dashboard ={
  path: '/',
    element: < Dashboard />,
    errorElement: <div>Error componente dashboard</div>
}

const router = createBrowserRouter([
  dashboard,
  {
    path: '/register',
    element: < Register />,
    errorElement: <div>Error componente register</div>
  },
  {
    path: '/newComment',
    element: < NewComment />,
    errorElement : <div>Error componenete NewComment</div>
  },
  {
    path: '/login',
    element: < Login />,
    errorElement: <div>Error componente login</div>
  },
  movieInfoRoute,
  {
    path: 'movieInfo',
    element: < MovieDoc />,
    errorElement: <div>Error componente MovieDoc</div>
  },
  {
    path: '/manageMovies',
    element: < ManageMovies />,
    errorElement: <div>Error componenete ManageMovies</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
