import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';
import { IoTrashSharp } from "react-icons/io5";

const Cart = () => {

  const {itemsCart, setItemsCart} = useContext( CartContext);

  const limpiarReservas = () =>{
    setItemsCart(itemsCart => itemsCart.splice(0,itemsCart.legth - 1) )
  }


  return (
    <>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-80 h-60">                
                        <figure key={item.id}><img src={item.img} alt="Room" /></figure>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                  <p>$ {item.price}</p>
                  </td>
                  <td><p>{item.quantity}</p></td>
                  <td><p>$ {item.price*item.quantity}</p></td>
                  <th>
                    <button className="btn btn-ghost btn-xxl"> <IoTrashSharp /></button>
                  </th>
                </tr>
     
                );
                })} 


            </tbody>          
          </table>
        </div>
        <button onClick={limpiarReservas} className="btn m-3 btn-primary">LIMPIAR RESERVAS</button>          
       
    </>
  )
}
export default Cart