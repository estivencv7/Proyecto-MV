import React from 'react'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import './Help.css'

export const Help = () => {
  return (
    <div>
        <HeaderHome/>
        <h1 className='ayuda'>AYUDA</h1>
        <div>
        <p className='preguntas'>
            <span className='interogacion'>1-¿QUE MADERA ES? <br/></span>
            Todos o casi todos los productos que vendemos estan hechos de MDF(Madera del futuro).
        </p>
        <p className='preguntas1'>
            <span className='interogacion'>2-¿CUANTO TIEMPO DE GARANTÍA TIENE LE PRODUCTO? <br/></span>
            Dependiendo de los productos que combre pero casi siempre tiene un año de garantia <br/>
            y para poder pedir la garantia tiene que ir con la factura del producto.
        </p>
        <p className='preguntas2'>
            <span className='interogacion'>3-¿TIENE TRANSPORTE HASTA SU CASA? <br/></span>
            Dependiendo de la ubicacion donde quiera mandar el producto <br/> 
            ahi o no ahi transporte.
        </p>
        <p className='preguntas3'>
            <span className='interogacion'>4-¿CUANTO TIEMPO SE LE DEMORA EL PRODUCTO? <br/></span>
            Dependiendo del producto se puede demorar entre 8 o 5 dias en hacerce el producto. <br/> 
        </p>
        </div>
    </div>
  )
}
