import {useEffect, useState} from "react";

const ItemCount = ({onAdd, stock, initial, finalizar}) => {
 
    const [counter, setCounter] = useState(initial)
    
    useEffect( () =>{
        console.log('se montó el componente');
    },[])
    

    const clickHandlerInc = () =>{
        console.log('Incrementaste');
        (counter < stock) && (setCounter(counter +1))

    }
    
    const clickHandlerDec = () =>{
        console.log('Decrementaste');
        (counter > initial) && setCounter(counter -1)
    }

    return (
        <div>
        <button onClick={clickHandlerInc} className="btn m-3 btn-primary">+</button>
        {counter}
        <button onClick={clickHandlerDec} className="btn m-3 btn-primary">-</button>
        <button disabled={counter === 0} onClick={()=>{onAdd(counter)}} className="btn m-5 btn-primary button-trn">Agregar a Carrito</button>       
        </div>
    )
}
export default ItemCount