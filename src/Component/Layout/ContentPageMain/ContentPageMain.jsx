import React, { useState } from 'react'
import CarouselDemo from './Carousel'
import './CarouselDemo.css'
import { Service_ListProduct } from '../../../service/ServiceProduct/Service_ListProduct'
import { CarouselPrime } from './CarouselPrime'


export const ContentPageMain = () => {

   return (

      <div className='content-page-main'>
         <CarouselDemo />
         {/*==============card=====================*/}
         <div className='car'>
            
            <Service_ListProduct />

         </div>
         {/* <div>

         </div>

         <CarouselPrime /> */}

      </div> 

   )
}