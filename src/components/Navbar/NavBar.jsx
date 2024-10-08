import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="divPrincipal">

        <div className="logo">
            <h2>Game_Store</h2>
        </div>

        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#about">Acerca de</a></li>
        </ul>

      <CartWidget />
    </div>
  );
};

export default NavBar;