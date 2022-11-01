import React, { useState } from 'react'
import Swal from 'sweetalert2'

const UserForm = ({setUser, OnOrder}) => {


    const updateUser = ( event ) => {
        setUser( user => ({...user, [event.target.name]: event.target.value }))
        console.log( event.target.value );
        console.log( event.target.name );
      }

      const handleChange = (event) => {

       console.log("handleChange value", event.target.value );
       console.log("handleChange name", event.target.name );

       var fmail = document.getElementById("mail").value;  
       var fname = document.getElementById("name").value;       
       var fapellido = document.getElementById("apellido").value; 

       if (fmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        console.log("Ingresa un correo electrónico válido");
      };

       if (fmail == "") {
         event.preventDefault();
         Swal.fire('Ingrese un email válido')

        

       } else if (fname == ""){ 
         event.preventDefault();
         Swal.fire('Ingrese su nombre.')   
       } else if (fapellido == "") {
        event.preventDefault();
        Swal.fire('Ingrese su apellido.')
       } 
       else { OnOrder() }
       
       console.log("Event", event)

      };


  return (
    <>
    <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
            Name
        </label>
        <input onChange={updateUser} name='name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Username"/>
        </div>

        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
            Apellido
        </label>
        <input onChange={updateUser} name='apellido' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apellido" type="text" placeholder="Apellido"/>
        </div>
        <div className="mb-4">
        <label  htmlFor="mail" className="block text-gray-700 text-sm font-bold mb-2" >
            Email
        </label>
        <input id="mail" type="email" onChange={updateUser} name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   placeholder="Email"/>
        </div>
    </form>
        <button  type="submit"  name='submit' onClick={handleChange} className=" button-custom text-white py-3 px-4  focus:outline-none focus:shadow-outline" style={{fontSize:'16px'}}>Finalizar Compra</button>
    </div>

    </>
  )
}
export default UserForm