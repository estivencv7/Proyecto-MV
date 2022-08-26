import React from 'react'
import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito'
import { Modal } from '../ContentPageMain/Modal'
// import './style.css'
export const GetFavoritos = ({ listFavorites=[] }) => {

    console.log(listFavorites.length)


    return (
       <div className='conter_car' id='conter_car'>
            {
                listFavorites.map((item) => (

                    <div>

                        <div className='car' style={{ position: 'relative' }}>
                            {/* <ServicioRegistrar_Favoritos codigoF={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} precioP={item.precio_producto} imagenP={item.foto_producto} /> */}

                            <div >

                                <img className='img-cardGif' src={item.imagenProducto} alt="" />

                            </div>

                            <div>
                                <h2>{item.nombreProducto}</h2>
                            </div>
                            <hr />
                            <div className='content-press'>
                                <h2 className='press'>${item.precioProducto}</h2>


                                {/* <RegistrarCarrito codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} imagenP={item.foto_producto} precioP={item.precio_producto} /> */}
                                <RegistrarCarrito   codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} imagenP={item.foto_producto} precioP={item.precio_producto}/>
                            </div>

                            <div >
                               
                                <Modal url={item.imagenProducto} name={item.nombreProducto} description={item.descripcionProducto} press={item.precioProducto} /> 
                            </div>

                        </div>

                    </div>

                    // </div>
                ))
            }
        </div>
    )
}






