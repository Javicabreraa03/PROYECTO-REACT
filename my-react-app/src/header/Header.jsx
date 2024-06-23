import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">MiTienda</h1>
        <nav className="header-nav">
          <a href="#inicio" className="nav-link">INICIO</a>
          <a href="#categorias" className="nav-link">CATEGORÍAS</a>
          <a href="#ofertas" className="nav-link">OFERTAS</a>
          <a href="#contacto" className="nav-link">CONTACTO</a>
        </nav>
        <div className="header-search">
          <input type="text" placeholder="Buscar productos" />
        </div>
        <div className="header-icons">
          <a href="#cart" className="icon-link">🛒</a>
          <a href="#account" className="icon-link">🔒</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
