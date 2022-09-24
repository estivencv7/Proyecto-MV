import { useEffect, useState } from 'react'
// import { Button } from 'primereact/button';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import { Dialog } from 'primereact/dialog'
import { Modal } from './Modal';
import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito';
// import { Favorites } from '../Favorites/Favorites';
import { ServicioRegistrar_Favoritos } from '../../../service/ServicioFavoritos/ServicioRegistrar_Favoritos';
import { ServicioList_Favorites } from '../../../service/ServicioFavoritos/ServicioList_Favorites';
// import { useEffect } from 'react';
// import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito';
// import { get } from 'jquery';
// import { Modal } from './Modal';
import { GiPriceTag } from 'react-icons/gi'

export const GetCards = ({ getCards = [], onClick }) => {

    const [visible2, setVisible2] = useState(false);

    const accion = () => {

    }
    // const onHide = () => {

    //     if (visible2 == false) {
    //         setVisible2(true)
    //     } else {
    //         setVisible2(false)
    //     }
    // }

    useEffect(() => {

    }, [visible2])

    return (
        <div className='conter_car' id='conter_car'>
            {
                getCards.map((item, index,) => (

                    <div >


                        <div className='car-product' style={{ position: 'relative' }}>

                            <div style={{ position: 'relative' }} className='content-card-m'>
                                <ServicioRegistrar_Favoritos classN='heart' codigoF={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} precioP={item.precio_producto} imagenP={item.foto_producto} />
                                <GiPriceTag className='etiqueta' />
                                <img className='img-cardGif' src={item.foto_producto} alt="" />
                                <div >
                                    <Modal classN='observar-m' url={item.foto_producto} name={item.nombre_producto} description={item.descripcion_producto} press={item.precio_producto} codigo={item.codigo_producto} />
                                </div>
                            </div>

                            <div>
                                <h2 className='card-name-img'>{item.nombre_producto}</h2>
                            </div>

                            <div className='content-press'>
                                <h2 className='press'>${item.precio_producto}</h2>
                            </div>
                            <RegistrarCarrito classN='register-cart-product' codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} imagenP={item.foto_producto} precioP={item.precio_producto} text='AGREGAR AL CARRITO' />


                        </div>


                    </div>

                    // </div>

                ))
            }

        </div>
    )
}
