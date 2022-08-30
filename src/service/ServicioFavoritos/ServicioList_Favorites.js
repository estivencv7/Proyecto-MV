import React, { useEffect, useState } from 'react'
import { Modal } from '../../Component/Layout/ContentPageMain/Modal'
import { GetFavoritos } from '../../Component/Layout/Favorites/GetFavoritos'
import { RegistrarCarrito } from '../ServiceCarrito/RegistrarCarrito'
import { ServiceEmail } from '../ServiceEmail/ServiceEmail'
import { ServicieDelete_Favorite } from './ServicieDelete_Favorite'
import {GiPriceTag} from 'react-icons/gi'

export const ServicioList_Favorites = ({ accion }) => {


    const [favorites, setFavorites] = useState([])
    const [fa, setFa] = useState(false)

    const getFavorites = () => {

        const url = 'http://localhost:8080/favoritos/listfavoritos';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("guardado")
                console.log(data)
                setFavorites(data)
                //  m.lista.push(data)
            })

    }

    useEffect(() => {
        getFavorites()

        console.log(accion)
    }, [fa])


    return (
        //    <GetFavoritos listFavorites={favorites} />
        <div className='conter_car-favorite' >
            {
                favorites.map((item, index) => (

                    <div>

                        <div id={item.codigo} className='car-favorite' style={{ position: 'relative' }}>
                            <GiPriceTag className='etiqueta' />

                            <ServicieDelete_Favorite className='delete-favoritos' codigo={item.codigo} />
                            <div className='content-img-favorite'>
                                <img className='img-favorito' src={item.imagenProducto} alt="" />
                                <div id='propiedad' >
                                    <Modal classN='observar' url={item.imagenProducto} name={item.nombreProducto} description={item.descripcionProducto} press={item.precioProducto} />
                                </div>
                            </div>

                            <div>
                                <h2>{item.nombreProducto}</h2>
                            </div>
                            <div>
                                
                                <ServiceEmail nameProduct={item.nombreProducto} descriptionProduct={item.descripcionProducto} photoProduct={item.imagenProducto} priceProduct={item.precioProducto} />
                            </div>
                            <hr />
                            <div className='content-price-favoritos'>
                                <h2 className='preci'>${item.precioProducto}</h2>
                                <RegistrarCarrito codigoP={item.codigo} nameP={item.nombreProducto} descripcionP={item.descripcionProducto} imagenP={item.imagenProducto} precioP={item.precioProducto} />
                            </div>
                            
                        </div>


                    </div>
                ))
            }


        </div>
    )
}

