import React, { useState } from 'react'

const UseForm3 = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        mail: "",
        phone: "",
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
      };
     
  return (
    <form>
    <label htmlFor="name">Nombre completo</label>
    <input
      name="name"
      type="text"
      value={userInfo.name}
      onChange={handleChange}
    />

    <label htmlFor="mail">Correo electrónico</label>
    <input
      name="mail"
      type="email"
      value={userInfo.mail}
      onChange={handleChange}
    />

    <label htmlFor="phone">Teléfono móvil</label>
    <input
      name="phone"
      type="tel"
      placeholder="+34"
      value={userInfo.phone}
      onChange={handleChange}
    />

    <input type="submit" />
  </form>
  )
}
export default UseForm3