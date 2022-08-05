
import React, { useState } from 'react'
import { Service_ProductRegis } from '../../../service/ServiceProduct/Service_ProductRegis'
import { Logo } from '../../Ui/Logo/Logo'
// import{ DataTableTemplatingDemo} from '../DataTableTemplatingDemo/DataTableTemplatingDemo'
import { Button } from 'primereact/button'
import './style.css'
import { DataTableTemplatingDemo } from '../DataTableTemplatingDemo/DataTableTemplatingDemo'
import { Service_Update } from '../../../service/ServiceProduct/Service_Update'




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
        <div className='sildebar'>
          <Service_ProductRegis style='' />
          <Button className=''><i className='pi pi-trash icons-registerProduct'></i></Button>
          <Service_Update />
          <Button className='' onClick={inputSarch}><i className='pi pi-search icons-registerProduct'></i></Button>
          <div className='pared'></div>
          {value ? <input type='search' className='input-search' /> : <p />}

        </div>

        <div className='content-main'>
          <header style={{ height: '12em', display: 'flex', alignItems: 'center' }}>
            <Logo classN='title-main'></Logo>
          </header>
          <DataTableTemplatingDemo/>
         
        </div>
      </main>
    </>

  )
}
