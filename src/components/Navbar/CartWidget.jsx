import imgCarrito from "../../assets/carrito.png"

const CartWidget = () => {

    const styleCarrito = {width: "25px"}
    return (
      <div>
        <img src={imgCarrito} style={styleCarrito}/>
        <span className="numberFijo">1</span>
      </div>
    );
  };
  
  export default CartWidget;