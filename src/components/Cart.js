import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';
import { IoTrashSharp } from "react-icons/io5";

const Cart = () => {

  const {itemsCart, limpiarReserva, limpiarReservas} = useContext( CartContext);

  const getTotal = () =>{
    const subtotales = itemsCart.map(ic => ic.quantity*ic.price)
    const total = subtotales.reduce((total, cant) => total + cant, 0 )
    return total
         
  }

  return (
    <>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>         
                {itemsCart.map((item) => {  
                return (
                <tr key={item.id} >             
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-80 h-60">                
                        <figure key={item.id}><img src={item.img} alt="Room" /></figure>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                  <p>$ {item.price}</p>
                  </td>
                  <td><p>{item.quantity}</p></td>
                  <td><p>$ {item.price*item.quantity}</p></td>
                  <th>
                    <button onClick={()=>limpiarReserva(item)} className="btn btn-ghost btn-xxl"> <IoTrashSharp /></button>
                  </th>
                </tr>   
                );
                })} 
                <tr><td></td><td></td><td>
                  <p>Cantidad de Reservas</p></td><td>{itemsCart.length}</td>
                </tr>
                <tr><td></td><td></td><td>
                  <p>TOTAL</p></td><td>$ {getTotal()}</td>
                </tr>
            </tbody>          
          </table>
        </div>
        <button onClick={limpiarReservas} className="btn m-3 btn-primary">LIMPIAR RESERVAS</button>                
    </>
  )
}
export default Cart