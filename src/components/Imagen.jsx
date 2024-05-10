import React from 'react'
import "./Imagen.css"
import Imagen2doParcial from '../public/Imagen2doParcial.jpeg'
const Imagen = () => {
  return (
        <div className='imagen'>
            <img src={Imagen2doParcial} className="imagen"/>
        </div>
  )
}

export default Imagen