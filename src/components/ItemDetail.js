import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

  const [cantidad,setCantidad] = useState(0)

  const stock=15;
  const initial=1;

  const onAdd = (counter) =>{
      console.log('On add');
      setCantidad(counter)
      console.log("El counter enviado es: ", counter)

  }

  console.log("La cantidad del estado es: ", cantidad)

  return (
    <>
    <div className="p-6 flex justify-center ...">
    <div className="m-5">  
    <div className="p-5"><p className="card-title">Detalle de Habitación</p></div>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={item.img} alt="Room" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>Precio: $ {item.price}</p>
          <div><ItemCount onAdd={onAdd} stock={stock} initial={initial}/></div>         
          <Link to='/' className="btn m-5 btn-secondary button-trn">Volver</Link>
        </div>
      </div>
    </div>
    </div> 
    {(cantidad>0) ? <Link to='/cart'></Link> : ""}
    </>
  )
}
export default ItemDetail