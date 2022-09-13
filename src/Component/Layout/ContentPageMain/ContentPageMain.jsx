import React, { useState } from 'react'
import CarouselDemo from './Carousel'
import './CarouselDemo.css'
import { Service_ListProduct } from '../../../service/ServiceProduct/Service_ListProduct'
// import { CarouselPrime } from './CarouselPrime'
import { ServicioList_Favorites } from '../../../service/ServicioFavoritos/ServicioList_Favorites.js'
import { Service_ListProductFilter } from '../../../service/ServiceProduct/Service_ListProductFilter'
import { Link } from 'react-router-dom'
import { FooterMain } from '../../Ui/FooterMain/FooterMain'
import { CarouselPrime } from './CarouselPrime'

export const ContentPageMain = ({ prods }) => {

   return (

      <div className='content-page-main'>

         <CarouselDemo />
         {/*==============card=====================*/}
         <div className='car' id='containerProd'>
            <Service_ListProduct />
         </div >
         <div id='containerFilter'>
            {/* <Service_ListProductFilter/>             */}
         </div>
         <br /><br /><br />
         <div className='setion-proximos'>
            <CarouselPrime></CarouselPrime>
         </div>

         <div className='section-footer'>
            <FooterMain></FooterMain>
         </div>

      </div>

   )
}