import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} alt="" className="imgDetailContainer" />
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
      </div>
    </div>
  )
}
export default ItemDetail