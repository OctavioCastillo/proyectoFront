import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import registerUser from '../functions/registerUser';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envía los datos del formulario al servidor
      const userData = await registerUser(name, email, password);
      console.log('Datos del usuario:', userData);
      
      // Redirige al usuario a la página de inicio de sesión
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar:', error);
      // Aquí puedes manejar el error de registro, por ejemplo, mostrando un mensaje de error al usuario
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center mt-1" style={{ minHeight: '100vh', backgroundColor: '#000', color: 'white' }}>
        <div className="container-sm border border-danger" style={{ maxHeight: '80vh', maxWidth: '30vw' }}>
          <h2 className="text-center mb-4 mt-3">Ingresa tus datos</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                <button type="submit" className="btn btn-danger  mb-3">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
