import React, { useState } from 'react'

const UserForm = ({setUser, OnOrder}) => {

    const updateUser = ( event ) => {
        setUser( user => ({...user, [event.target.name]: event.target.value }))
        console.log( event.target.value );
        console.log( event.target.name );
      }
  return (
    <>
    <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
            Name
        </label>
        <input onChange={updateUser} name='name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>

        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
            Apellido
        </label>
        <input onChange={updateUser} name='apellido' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>

        <div className="mb-4">
        <label  className="block text-gray-700 text-sm font-bold mb-2" >
            Email
        </label>
        <input onChange={updateUser} name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        <div className="flex items-center justify-between">
        <button onClick={()=>{OnOrder()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Finalizar Compra
        </button>
        </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
    </p>
    </div>

    </>
  )
}
export default UserForm