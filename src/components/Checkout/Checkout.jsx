import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import "./checkout.css"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  })
  const [idOrder, setIdOrder] = useState(null)
  const { cart, totalPrice, deleteCart } = useContext(cartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()


    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    }

    const response = await validateForm(dataForm)
    if(response.status === "success"){
      uploadOrder(order)
    }else{
      toast.error("Complete todos los campos")
    }

  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => {
        setIdOrder(response.id)
      })
      .finally(() => {
        deleteCart()
      })
  }

  return (
    <div className="checkout">
      {
        idOrder === null ? (
          <form onSubmit={handleSubmitForm} className="form-checkout" >
            <h2 className="title-checkout">¡Completá con tus datos!</h2>
            <div className="content-input">
              <label className="label">Nombre completo: </label>
              <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">Telefono:</label>
              <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">Email:</label>
              <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
            </div>
            
            <button type="submit" className="button-send-order">Enviar orden</button>
          </form>
        ) : (
          <div>
            <h2>¡Orden generada correctamente!</h2>
            <p>Su número de orden es: {idOrder}. Por favor, guardelo ante cualquier consulta o inconveniente futuro.</p>
            <Link to="/" className="button-to-home">Volver al inicio</Link>
          </div>
        )
      }

    </div>
  )
}
export default Checkout