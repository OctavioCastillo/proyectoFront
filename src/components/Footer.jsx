const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-danger text-white">
      <div className="bg-dangerr">
        <div className="d-flex justify-content-evenly bg-danger">
          <div className='bg-danger'>
            <a href="/aviso_privacidad.pdf" download className="text-white bg-danger">Aviso de Privacidad</a>
          </div>
          <div className='bg-danger'>
            <div className='bg-danger'>Contacto: <a href="mailto:contacto@email.com" target="_blank" rel="noopener noreferrer" className="text-white bg-danger">contacto@email.com</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
