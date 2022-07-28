// import { FormRegister } from "../../Layout/FormRegisterUsers/FormRegister";

import React,{useState} from 'react'

import '../../Layout/FormRegisterUsers/FormDemo.css'
import { FormRegister } from '../../Layout/FormRegisterUsers/FormRegister';
import { HeaderFormRegisterUsuario } from '../../Layout/HeaderFormRegister/HeaderFormRegisterUsuario';
//import { HeaderFormRegisterUsuario } from '../../Layout/HeaderFormRegisterUsuario/HeaderFormRegisterUsuario';
//import { HeaderHome } from "../../Layout/HeaderHome/HeaderHome";


import './style.css'

export const RegisterUser = () => {
  

  return (
    <div className="page-register-user" >
         <HeaderFormRegisterUsuario/>
      <div className="page-formUser"> 
          <FormRegister/>
      </div>  
    </div>
  )
}
