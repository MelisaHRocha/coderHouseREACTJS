import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { FaWifi } from "react-icons/fa"
import { FaUmbrellaBeach } from "react-icons/fa"
import { FaSmokingBan } from "react-icons/fa"
import { FaBroom } from "react-icons/fa"
import { FaTree } from "react-icons/fa"
import { GiWashingMachine } from "react-icons/gi"
import { ImArrowLeft2 } from "react-icons/im";

const ItemDetail = ({item}) => {

  const [cantidad,setCantidad] = useState(0)
  const [finalizar,setFinalizar] = useState(true)

  const stock=15;
  const initial=1;

  const { addItem, itemsCart} = useContext( CartContext)

  const onAdd = (counter) =>{
      console.log('On add');
      setCantidad(counter)
      console.log("El counter enviado es: ", counter)
      addItem(item,Number(counter))
      setFinalizar(false)
      console.log("Esto es finalizar", finalizar)
  }

  
  console.log( "Dentro de ItemDetail",itemsCart )

  console.log("La cantidad del estado es: ", cantidad)

  return (
    <>
    <div className="p-6 flex justify-center ...">
    <div className="m-5">  
    <div className="p-5"><p className="card-title">Detalle de Habitación</p></div>
    <div className="card lg:card-side bg-base-120 shadow-xl">
        <figure><img src={item.img} alt="Room" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p >Precio x noche: $ {item.price}</p>
          <div class="flex flex-row ...">
            <div><FaWifi style={{color: 'green', fontSize: '20px'}}/></div>
            <div class="ml-2"><a style={{color: 'green', fontSize: '12px'}}>WiFi gratis</a></div>
            <div class="ml-2"><FaUmbrellaBeach style={{color: 'green', fontSize: '20px'}}/></div>
            <div class="ml-2"><a style={{color: 'green', fontSize: '12px'}}>Situado frente a la playa</a></div>           
            <div class="ml-2"><FaSmokingBan style={{color: 'green', fontSize: '20px'}}/></div>
            <div class="ml-2"><a style={{color: 'green', fontSize: '12px'}}>Habitaciones sin humo</a></div>
            <div class="ml-2"><FaBroom style={{color: 'green', fontSize: '20px'}}/></div>
            <div class="ml-2"><a style={{color: 'green', fontSize: '12px'}}>Servicio de Limpieza diario</a></div>
          </div>
          <div class="flex flex-row ...">
            <div><GiWashingMachine style={{color: 'green', fontSize: '20px'}}/></div>
            <div class="ml-2"><a style={{color: 'green', fontSize: '12px'}}>Servicio de lavandería</a></div>
            <div class="ml-2"><FaTree style={{color: 'green', fontSize: '20px'}}/></div>
            <div class="ml-2"><a style={{color: 'green', fontSize: '12px'}}>Jardín</a></div>          
          </div>
          {finalizar ?
          <div><div><ItemCount onAdd={onAdd} finaliza={finalizar} stock={stock} initial={initial}/></div>         
          <Link to='/' className="btn m-5 btn-secondary button-trn"><ImArrowLeft2/></Link></div>
          : <Link to='/cart' className="btn m-5 btn-secondary button-trn">Finalizar Compra</Link>}   
        </div>
      </div>
    </div>
    </div> 
    {(cantidad>0) ? <Link to='/cart'></Link> : ""}
    </>
  )
}
export default ItemDetail