import {useEffect, useState} from "react";

const ItemCount = ({onAdd, initial, item}) => {
 
    const [counter, setCounter] = useState(initial)

    const clickHandlerInc = () =>{
        console.log('Incrementaste');
        (counter < item.stock) && (setCounter(counter +1))
    }
    
    const clickHandlerDec = () =>{
        console.log('Decrementaste');
        (counter > initial) && setCounter(counter -1)
    }

    return (
        <div>
        <button onClick={clickHandlerInc} className="btn mx-3 btn-ghost button-custom">+</button>
        {counter}
        <button onClick={clickHandlerDec} className="btn mx-3 btn-ghost button-custom-counter">-</button>
        <button disabled={counter === 0} onClick={()=>{onAdd(counter)}} className="btn ml-6 btn-ghost button-trn button-custom">Reservar ahora</button>       
        </div>
    )
}
export default ItemCount