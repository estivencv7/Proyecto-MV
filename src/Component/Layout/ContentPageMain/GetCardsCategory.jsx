import React from 'react'
import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito'
import { ServicioRegistrar_Favoritos } from '../../../service/ServicioFavoritos/ServicioRegistrar_Favoritos'
import { Modal } from './Modal'
import { GiPriceTag } from 'react-icons/gi'
export const GetCardsCategory = ({ getCards = [] }) => {
    if (getCards == null) {
        return (
            document.getElementById("conter_car")
        )
    } else {
        return (
            <div className='conter_car' id='categoryContainer'>
                {
                    getCards.map((item, index,) => (

                        <div key={index} >

                            {/* <div className='sud-content' > */}
                            <div className='car-product' style={{ position: 'relative' }}>
                                
                                <div style={{ position: 'relative' }} className='content-card-m' >
                                <ServicioRegistrar_Favoritos classN='heart' codigoF={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} precioP={item.precio_producto} imagenP={item.foto_producto} />
                                <GiPriceTag className='etiqueta' />
                                    <img className='img-cardGif' src={item.foto_producto} alt="" />
                                    <div >
                                        <Modal classN='observar-m' url={item.foto_producto} name={item.nombre_producto} description={item.descripcion_producto} press={item.precio_producto} />
                                    </div>

                                </div>

                                <div>
                                    <h2  className='card-name-img'>{item.nombre_producto}</h2>
                                </div>
                               
                                <div className='content-press'>
                                    <h2 className='press'>${item.precio_producto}</h2>
                                    <RegistrarCarrito codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} imagenP={item.foto_producto} precioP={item.precio_producto} />
                                </div>


                            </div>


                        </div>

                        // </div>

                    ))
                }

            </div>
        )
    }
}
