import React from 'react'
import { Logo } from '../../Ui/Logo/Logo'
import { Link } from 'react-router-dom'
import './style.css'
export const HeaderFormRegisterUsuario = () => {
  return (
    <div>
        
   <header className='header-form-user'>
        <Logo classN="title-main"/>
        <Link className='icon' to="/"><i className="pi pi-home ico" ></i></Link> 
   </header>
   <hr />
   </div>
  )
}
