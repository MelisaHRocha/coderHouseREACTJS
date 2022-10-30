import '../App.css';
import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { Link } from 'react-router-dom';

function CardWidget(){

    const {getTotal,getCostoTotal,itemsCart} = useContext( CartContext);

    return(
        <>
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" style={{color: 'green'} }className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{getTotal()}</span>
                </div>
            </label>
            {getTotal()>0 ? 
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    
                     <div class="flex flex-row ..."></div>
                     
                    <span className="font-bold text-lg" style={{color: 'black', fontSize: '16px'}}>¡Acaba tu Reserva!</span>
                    <span className="font-bold text-lg" style={{color: 'black', fontSize: '14px' }}>{itemsCart.length} habitación/es</span>
                    <span className="text-info">Subtotal: ${getCostoTotal()}</span>
                    <div className="card-actions">
                    <Link to='/cart'><button className="btn btn-primary btn-block btn-xs">Ver Carrito</button></Link>
                    </div>
                </div>
            </div> 
            : 
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg" style={{color: 'black' }}>Oops! Agrega productos para poder continuar</span>
                    <span className="text-info">Carrito vacío</span>
                </div>
            </div> 
            }
        </>
    )
}

export default CardWidget