import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const handleLoginLogout = () => {
    const userId = localStorage.getItem('user_id');

    if (userId) {
      // Si el usuario está autenticado (user_id presente en localStorage), hacer logout
      localStorage.removeItem('user_id');
      localStorage.removeItem('is_admin');
      localStorage.removeItem('user_token');
      navigate('/login');
    } else {
      // Si el usuario no está autenticado, redirigir a la página de login
      navigate('/login');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div className="container bg-danger">
        <button className="navbar-brand btn btn-link bg-danger ps-5" onClick={goToHome}>Inicio</button>
        <div className="collapse navbar-collapse justify-content-end bg-danger">
          <ul className="navbar-nav bg-danger">
            <li className="nav-item bg-danger">
              <button className="nav-link navbar-brand btn btn-link bg-danger pe-5" onClick={handleLoginLogout}>
                {localStorage.getItem('user_id') ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
