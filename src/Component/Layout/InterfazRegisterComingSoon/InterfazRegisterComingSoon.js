
import React, { useState } from 'react'
import { Service_ProductRegis } from '../../../service/ServiceProduct/Service_ProductRegis'
// import{ DataTableTemplatingDemo} from '../DataTableTemplatingDemo/DataTableTemplatingDemo'
import { Button } from 'primereact/button'



import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
import { DataTableComingsoon } from '../DataTableTemplatingDemo/DataTableComingsoon'


export const InterfazRegisterComingSoon = () => {

  const [value, setValue] = useState(false);

  const data = [
    { codigo: 1, nombre: 'cama', descripcion: 'barato', image: 'fdfafada', precio: 1500, categoria: 2, provedor: 9 },
    { codigo: 2, nombre: 'cam', descripcion: 'ba', image: 'fdfaf', precio: 1500, categoria: 8, provedor: 7 }
  ]



  const inputSarch = () => {
    console.log("hola")
    setValue(true)

  }
  return (
    <>
      <main className='content-Page'>
        <div className='content-main'>
            <NavigationAdmin/>
          <DataTableComingsoon/>
        </div>
      </main>
    </>
  )
}
