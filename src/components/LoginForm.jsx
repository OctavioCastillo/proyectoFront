import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import loginUser from '../functions/loginUser';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envía los datos del formulario al servidor
      const userData = await loginUser(email, password);
      console.log('Datos del usuario:', userData);
      
      // Guarda el token en el localStorage
      localStorage.setItem('user_token', userData.token);

      // Redirige al usuario a la página principal
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Aquí puedes manejar el error de inicio de sesión, por ejemplo, mostrando un mensaje de error al usuario
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-1" style={{ minHeight: '100vh', backgroundColor: '#000', color: 'white' }}>
        <div className="container-sm border border-danger m-auto" style={{ maxHeight: '60vh', maxWidth: '30vw' }}>
          <h2 className="text-center mb-4 mt-3">Ingresa tus datos</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-danger">Login</button>
            </div>
          </form>
          <div className="d-flex justify-content-center">
            <button onClick={handleRegisterClick} className="btn btn-link text-white mb-2">Registrarse</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
