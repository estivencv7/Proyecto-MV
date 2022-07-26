// import { FormRegister } from "../../Layout/FormRegisterUsers/FormRegister";

import React from 'react'

import '../../Layout/FormRegisterUsers/FormDemo.css'
import { FormRegister } from '../../Layout/FormRegisterUsers/FormRegister';
import { HeaderHome } from "../../Layout/HeaderHome/HeaderHome";


export const RegisterUser = () => {
  return (
    <div className="page-register-user" >
        <HeaderHome/>
      <div className="page-formUser">
        <div>
            <h1  className="title-form">¡¡Bienvenido se parte de Nosotros!!</h1>
        </div> 
        <div className="page-fom">
            <FormRegister/>
        </div> 
      </div>  
    </div>
  )
}
