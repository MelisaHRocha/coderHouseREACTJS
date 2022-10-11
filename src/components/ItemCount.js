import {useEffect, useState} from "react";

const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const stock = 10;

    useEffect( () =>{
        console.log('se montó el componente');
    },[])
    

    const clickHandlerInc = () =>{
        console.log('Incrementaste');
        console.log('counter', +counter);
        console.log('Stock', +stock);
        (counter < stock) && (setCounter(counter +1))

    }
    
    const clickHandlerDec = () =>{
        console.log('Decrementaste');
        (counter >0 ) && setCounter(counter -1)
    }

    return (
        <div>
        <button onClick={clickHandlerInc} className="btn m-3 btn-primary">+</button>{counter}
        <button onClick={clickHandlerDec} className="btn m-3 btn-primary">-</button>
        <button className="btn m-5 btn-primary button-trn">Agregar a Carrito</button>
        </div>
    )
}
export default ItemCount