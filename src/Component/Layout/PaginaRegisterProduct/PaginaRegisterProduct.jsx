
import React, { useState } from 'react'
import { Service_ProductRegis } from '../../../service/ServiceProduct/Service_ProductRegis'
// import{ DataTableTemplatingDemo} from '../DataTableTemplatingDemo/DataTableTemplatingDemo'
import { Button } from 'primereact/button'
import './style.css'
import { DataTableProducts } from '../DataTableTemplatingDemo/DataTableProducts'
import { Service_Update } from '../../../service/ServiceProduct/Service_Update'
import { Service_DeleteProduct } from '../../../service/ServiceProduct/Service_DeleteProduct'
import { Emblema } from '../../Ui/Logo/Emblema'
import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
import { HeaderDataTables } from '../../Ui/HeaderDataTables/HeaderDataTables'
import { FooterMain } from '../../Ui/FooterMain/FooterMain'


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
          <HeaderDataTables text={<h1 style={{color:'#008037'}}>Inventario Productos</h1>} />
          <DataTableProducts />
          <div style={{ display: 'flex', justifyContent: 'center', background: 'red' }}>
          <FooterMain></FooterMain>   
          </div>
         
        </div>
      </main>
    </>
  )
}
