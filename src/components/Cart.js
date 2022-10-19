import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount"



const Cart = () => {

  const {itemsCart} = useContext( CartContext);

  return (
    <>
    <div>
      {itemsCart.map((item) => {
       return (
          <div className="p-6 flex justify-center ...">
            <div className="m-5">  
            <div className="p-5"><p className="card-title">Detalle de Habitación</p></div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={item.img} alt="Room" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>Precio: $ {item.price}</p>    
                  <Link to='/' className="btn m-5 btn-secondary button-trn">Volver</Link>
                </div>
              </div>
            </div>
            </div>        
       );

      }) }
      
      </div>
  </>
  )
}
export default Cart