import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext";
import {useContext} from "react"

const PurchaseDetail = ({order,idSeguimiento}) => {

  const {setItemsCart, setExisteReserva} = useContext( CartContext);

  console.log("Order", {order},{idSeguimiento})

  const vaciarCarrito = () => {
    setItemsCart([])
    setExisteReserva(false)
  }
  return (
    <>
    <div className="p-6 flex justify-center ...">
    <div style={{fontSize:'90px'}}><FcApproval/></div>
    </div>
    <div style={{fontSize:'17px', color:'green'}} class="p-6 flex justify-center ...">Felicidades ha realizado su reserva con Exito!!</div>
    <div class="p-6 flex justify-center ...">
    <div className="card w-96 bg-primary text-primary-content">
    <div className="card-body">
        <h2 className="card-title">¡Gracias,{order.buyer.name}!</h2>
        <h2 className="card-title">Tu reserva en Hostel do Moro esta confirmada.</h2>
        <p>La misma ya ha sido confirmado y se le enviará un correo electrónico a {order.buyer.email} con el detalle de la misma.</p>
        <p>Con un costo total de $ {order.total}.</p>
        <p>Código de seguimiento de envío: {idSeguimiento}.</p>
        <div className="card-actions justify-end">
        <Link to='/' onClick={vaciarCarrito} className="btn">Finalizar</Link>
        </div>
    </div>
    </div>
    </div>
   </>
  )
}
export default PurchaseDetail