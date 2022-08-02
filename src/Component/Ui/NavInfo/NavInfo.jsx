import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export const NavInfo = () => {
  return (
    <div className='navInf'>
        <Link className='information separar' to="Quienes-Somos">Quienes Somos</Link>
        <Link className="information separar " to="dudas-preguntas">Ayuda</Link>
        <Link className="information" to="Contactanos">Contacto</Link> 
    </div>
    
  )
}
