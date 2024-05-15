import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div className="container bg-danger">
        <button className="navbar-brand btn btn-link bg-danger ps-5" onClick={goToHome}>Inicio</button>
        <div className="collapse navbar-collapse justify-content-end bg-danger">
          <ul className="navbar-nav bg-danger">
            <li className="nav-item bg-danger">
              <button className="nav-link btn btn-link bg-danger pe-5" onClick={goToLogin}>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
