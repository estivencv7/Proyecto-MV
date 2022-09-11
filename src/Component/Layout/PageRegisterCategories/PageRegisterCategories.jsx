import React from 'react'
import { FooterMain } from '../../Ui/FooterMain/FooterMain'
import { HeaderDataTables } from '../../Ui/HeaderDataTables/HeaderDataTables'
import { DataTableCategories } from '../DataTableTemplatingDemo/DataTableCategories'
import { NavigationAdmin } from '../NavigationAdmin/NavigationAdmin'
export const PageRegisterCategories = () => {
  return (
    <>
      <main className='content-Page'>
        <div className='content-main'>
          <HeaderDataTables text={<h1 style={{ color: '#008037' }}>Inventario Categorias</h1>} />
          <DataTableCategories />
          <div style={{ display: 'flex', justifyContent: 'center', background: 'red' }}>
            <FooterMain></FooterMain>   
          </div>
        </div>
      </main>
    </>
  )
}
