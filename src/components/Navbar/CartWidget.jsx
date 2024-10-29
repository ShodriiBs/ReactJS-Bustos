import imgCarrito from "../../assets/carrito.png"
import "./cartwidget.css"

const CartWidget = () => {

    return (
      <div>
        <img src={imgCarrito} className="imgstyle"/>
        <span className="numberFijo">1</span>
      </div>
    );
  };
  
  export default CartWidget;