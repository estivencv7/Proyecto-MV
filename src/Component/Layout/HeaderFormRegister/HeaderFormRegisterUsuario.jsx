import React from 'react'
import { Logo } from '../../Ui/Logo/Logo'
import { Link } from 'react-router-dom'
import './style.css'
import { Emblema } from '../../Ui/Logo/Emblema'
export const HeaderFormRegisterUsuario = () => {
  return (
    <div>

      <header className='header-form-user'>
        <div>
         <Emblema classN ={'title-main'}/>

        </div>

        <Link className='icon' to="/"><i className="pi pi-home ico" ></i></Link>
      </header>
      <hr />
    </div>
  )
}
