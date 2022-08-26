import React, { useState } from 'react'
import CarouselDemo from './Carousel'
import './CarouselDemo.css'
import { Service_ListProduct } from '../../../service/ServiceProduct/Service_ListProduct'
// import { CarouselPrime } from './CarouselPrime'
import { ServicioList_Favorites } from '../../../service/ServicioFavoritos/ServicioList_Favorites.js'


export const ContentPageMain = () => {

   

   return (

      <div className='content-page-main'>
         <CarouselDemo />
         {/*==============card=====================*/}
         <div className='car' id='containerProd'>
            <Service_ListProduct/>
         </div >
         <div id='containerFilter'>

         </div>
      </div> 

   )
}