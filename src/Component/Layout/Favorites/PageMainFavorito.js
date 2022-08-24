import React from 'react'
import { ServicioList_Favorites } from '../../../service/ServicioFavoritos/ServicioList_Favorites'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import './style.css'
export const PageMainFavorito = () => {
  return (
    <div>
        <HeaderHome/> 
        <div className='setionFavoritos'>
           <ServicioList_Favorites/> 
        </div>
    </div>
  )
}
