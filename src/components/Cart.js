import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';
import { IoTrashSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";


const Cart = () => {

  const {itemsCart, limpiarReserva, limpiarReservas, confirmCartDelate, getCostoTotal, differenceInDays} = useContext( CartContext);
  const navigate = useNavigate();

  console.log("itemsCart de Cart", itemsCart)

  return (
    <>
    <div className="p-4 flex justify-center ..."><h2 className="Intro">Carrito</h2></div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr align="center">
                <th>Producto</th>
                <th>Precio por Noche</th>
                <th>Cantidad de Noches</th>
                <th>Cantidad de Personas</th>
                <th>Subtotal</th>
                <th>Eliminar Reserva</th>
              </tr>
            </thead>
            <tbody>         
                {itemsCart.map((item) => {  
                return (
                <tr key={item.id} align="center">             
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
                  <td><p>{differenceInDays}</p></td>
                  <td><p>{item.quantity}</p></td>
                  <td><p>$ {item.price*item.quantity*item.diasReserva}</p></td>
                  <th>
                    <button onClick={()=>limpiarReserva(item)} className="btn btn-ghost btn-xxl"> <IoTrashSharp style={{color: 'green', fontSize: '20px'}}/></button>
                  </th>
                </tr>   
                );
                })} 
                <tr><td></td><td></td><td></td>
                  <td>
                  <div class="flex flex-col ...">
                    <div><p>Cantidad de Reservas</p></div>
                    <div><p>TOTAL</p></div>
                    <div></div>
                  </div>
                  </td>
                  <td>
                  <div class="flex flex-col ...">
                    <div><p>{itemsCart.length}</p></div>
                    <div><p>$ {getCostoTotal()}</p></div>
                    <div></div>
                  </div>
                   </td>
                </tr>
            </tbody>          
          </table>
          <div className="p-4 flex justify-center ...">
          <div class="flex flex-col ...">
                <div class="flex flex-row ...">
                    <div><button onClick={limpiarReservas}><MdDeleteForever style={{color: 'green', fontSize: '25px'}}/></button></div>
                    <div class="ml-2"><a style={{color: 'green', fontSize: '14px'}} onClick={limpiarReservas}>Limpiar Carrito</a></div>
                    <div  class="ml-16"><Link to='/order' className="btn btn-ghost  btn-wide button-trn button-custom">CHECKOUT</Link></div>
                    {confirmCartDelate && navigate('/')}
                </div>
                <div class="ml-16"><Link to='/itemListContainer' className="btn m-5 btn-secondary button-trn"><ImArrowLeft2/></Link>Agregar mas Reservas</div>
                </div>
          </div>

   

        </div>            
    </>
  )
}
export default Cart