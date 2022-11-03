import { Link } from "react-router-dom"

const ItemCard = ({id, name, img}) => {
  return (
    <Link to={`/item/${id}`}>   
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="rooms" /></figure>
        <div className="card-body">
          <h2 className="card-title detalle">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost button-custom">Ver Detalle</button>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ItemCard