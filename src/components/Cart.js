import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';
import { IoTrashSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Cart = () => {

  const {itemsCart, limpiarReserva, limpiarReservas, confirmCartDelate, getCostoTotal} = useContext( CartContext);
  const navigate = useNavigate();

  console.log("itemsCart de Cart", itemsCart)

  return (
    <>
    <div className="p-4 flex justify-center ..."><h2 className="Intro">Carrito</h2></div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio por Noche</th>
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
                    <button onClick={()=>limpiarReserva(item)} className="btn btn-ghost btn-xxl"> <IoTrashSharp style={{color: 'green', fontSize: '20px'}}/></button>
                  </th>
                </tr>   
                );
                })} 
                <tr><td></td><td></td><td>
                  <p>Cantidad de Reservas</p></td><td>{itemsCart.length}</td>
                </tr>
                <tr><td></td><td></td><td>
                  <p>TOTAL</p></td><td>$ {getCostoTotal()}</td>
                </tr>
                <tr><td>
                <div class="flex flex-row ...">
                    <div><button onClick={limpiarReservas}><MdDeleteForever style={{color: 'green', fontSize: '25px'}}/></button></div>
                    <div class="ml-2"><a style={{color: 'green', fontSize: '14px'}} onClick={limpiarReservas}>Limpiar Carrito</a></div>
                    <div class="ml-16"><Link to='/' className="btn btn-wide">Seguir Reservando</Link></div>
                </div></td>
                <td></td>
                <td>
                {confirmCartDelate && navigate('/')}
                <Link to='/order' className="btn btn-wide">CHECKOUT</Link></td>
                </tr>
            </tbody>          
          </table>
        </div>            
    </>
  )
}
export default Cart