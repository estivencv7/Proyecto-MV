
import React, { useState } from 'react'
import { Service_ProductRegis } from '../../../service/ServiceProduct/Service_ProductRegis'
import { Logo } from '../../Ui/Logo/Logo'
// import{ DataTableTemplatingDemo} from '../DataTableTemplatingDemo/DataTableTemplatingDemo'
import { Button } from 'primereact/button'
import './style.css'
import { DataTableProducts } from '../DataTableTemplatingDemo/DataTableProducts'
import { Service_Update } from '../../../service/ServiceProduct/Service_Update'
import { Service_DeleteProduct } from '../../../service/ServiceProduct/Service_DeleteProduct'




export const PaginaRegisterProduct = () => {

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
          <header style={{ height: '12em', display: 'flex', alignItems: 'center' }}>
            <Logo classN='title-main'></Logo>
          </header>
          <DataTableProducts/>
         
        </div>
      </main>
    </>

  )
}
