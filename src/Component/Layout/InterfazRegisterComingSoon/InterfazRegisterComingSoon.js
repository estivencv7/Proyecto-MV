
import React, { useState } from 'react'
import { Service_ProductRegis } from '../../../service/ServiceProduct/Service_ProductRegis'
// import{ DataTableTemplatingDemo} from '../DataTableTemplatingDemo/DataTableTemplatingDemo'
import { Button } from 'primereact/button'



import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
import { DataTableComingsoon } from '../DataTableTemplatingDemo/DataTableComingsoon'
import { FooterMain } from '../../Ui/FooterMain/FooterMain'
import { HeaderDataTables } from '../../Ui/HeaderDataTables/HeaderDataTables'
import { BsCloudUploadFill } from "react-icons/bs"

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

  const text = () => {
    return (
      <div>
        <h1>Proximos</h1>
      </div>
    )
  }
  return (

    <div className='content-main'>
      <HeaderDataTables text={
        
          <h1 style={{color:'#008037'}}>Próximos Lanzamientos</h1>
        
      } />
      <div>
        <DataTableComingsoon />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', background: 'red' }}>
        <FooterMain />
      </div>
    </div>
  )
}
