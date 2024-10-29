import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">

      <Link to="/" className="brand primary-font-color">
        
        <p className="title-brand ">Gamer_Store</p>
      </Link>

      <ul className="categories">
        <li className="category">
          <Link to="/category/procesadores">Procesadores</Link>
        </li>
        <li className="category">
          <Link to="/category/placas-madre">Placa Mother</Link>
        </li>
        <li className="category">
          <Link to="/category/memorias-ram">Memorias RAM</Link>
        </li>
        <li className="category">
          <Link to="/category/placas-video">Placas de Vídeo</Link>
        </li>
        <li className="category">
          <Link to="/category/almacenamiento">Almacenamiento</Link>
        </li>
        <li className="category">
          <Link to="/category/fuentes">Fuentes de Alimentación</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}
export default NavBar