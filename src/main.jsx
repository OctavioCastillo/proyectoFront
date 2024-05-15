import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import Dashboard from './routes/Dashboard.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import MovieInfo from './components/MovieInfo.jsx';

export const movieInfoRoute = {
  path: '/movieInfo/:id',
  element: <MovieInfo />,
  errorElement: <div>Error componente MovieInfo</div>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: < Dashboard />,
    errorElement: <div>Error componente dashboard</div>
  },
  {
    path: '/register',
    element: < Register />,
    errorElement: <div>Error componente register</div>
  },
  {
    path: '/login',
    element: < Login />,
    errorElement: <div>Error componente login</div>
  },
  movieInfoRoute,
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: < Dashboard />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
