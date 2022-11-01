import { Link, Navigate } from "react-router-dom"
import DatePicker2 from "./DatePicker/DatePicker2"
import Swal from 'sweetalert2'
import {useContext} from "react"
import {CartContext} from "../context/CartContext"
import { useNavigate } from "react-router-dom";


const Home = () => {
   
  const {existeReserva, setExisteReserva, setItemsCart} = useContext(CartContext);
  const navigate = useNavigate();

  const cambiarFechaHospedaje = () => {
     
  Swal.fire({
    title: 'Ya elegiste tu fecha de reserva. Deseas cambiarla?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si, cambiar fechas de reserva.',
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success').then((result)=>{
        if(result.isConfirmed){
            setItemsCart([])
            setExisteReserva(false)           
        }
    })        

    } else if (result.isDenied) {
      Swal.fire('Continua con tus reservas', '', 'info')
      navigate('/itemListContainer')
    }
  })
  } 

  return (
    <div> 
        <div className="carousel w-full">
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://firebasestorage.googleapis.com/v0/b/react-hosteldomoro.appspot.com/o/Carrusel%2F4.png?alt=media&token=ef151c43-cfb0-40e6-8c10-345ec3beb408" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://firebasestorage.googleapis.com/v0/b/react-hosteldomoro.appspot.com/o/Carrusel%2F3.png?alt=media&token=d6c5bb34-f67d-42fd-9c15-080d73c7d184" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://firebasestorage.googleapis.com/v0/b/react-hosteldomoro.appspot.com/o/Carrusel%2F2.png?alt=media&token=59b782ae-aa88-4bc2-abea-b032608bea2e" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        {existeReserva && cambiarFechaHospedaje()}
        <div class="flex flex-row ...">
        <div className="mt-10 ml-60">
        <DatePicker2/>
        </div>
        <div>
        <Link to='/itemListContainer'><button className="rounded-none ... button-search mt-10 ml-2">Search</button></Link></div>
        </div>
    </div>
  )
}
export default Home