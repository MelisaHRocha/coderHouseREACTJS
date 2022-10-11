import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { products } from "./data/products"
import ItemCount from "./ItemCount"

const ItemDetail = () => {

    const {id : itemId} = useParams()
    const [item,setItem] = useState({})

    useEffect(() => {
       getItemDetail().then( response =>
        {
            setItem(response)
            console.log(response)
        }
       )
    }, [])

    const getItemDetail = () => {
        return new Promise((resolve)=>{
                resolve( products.find(p => p.id === Number(itemId)))
        })
    }
    


  return (
    
    <div className="p-6 flex justify-center ...">
    <div className="m-5">  
    <div className="p-5"><p className="card-title">Detalle de Habitación</p></div>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={item.img} alt="Room" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>Precio: $ {item.price}</p>
          <ItemCount/>
          <Link to='/' className="btn m-5 btn-secondary button-trn">Volver</Link>
        </div>
      </div>
    </div>
    </div>
  )
}
export default ItemDetail