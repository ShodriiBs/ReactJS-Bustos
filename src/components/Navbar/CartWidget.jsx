import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import imgCarrito from "../../assets/carrito.png"

const CartWidget = () => {
  const { totalQuantity } = useContext(cartContext)

  const total = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget">
      <img src={imgCarrito} className="imgstyle" width={50}/>
      <span className="number-cartwidget">{ total >= 1 && total }</span>
    </Link>
  )
}
export default CartWidget