import React from 'react'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import './ContactUs.css'

export const ContactUs = () => {
  return (
    <div>
        <HeaderHome/>
        <h1 className='contacto'>CONTACTANOS</h1>
        <p className='informacion'>
            Estamos ubicados en la Carrera 17 #21-46 <br/>
            Horario desde la 8:00 am hasta las 6:30pm <br/>
            Telefono: 3117969946 <br/>
            No abrimos los dias Domingos ni los dias Festivos <br/>
            Si quiere informacion mas detalla comuniquese <br/>
            al numero ya antes escrito 
        </p>
    </div>
  )
}
