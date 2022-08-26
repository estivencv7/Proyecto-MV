import React, { useEffect, useState } from 'react'
import { Modal } from '../../Component/Layout/ContentPageMain/Modal'
import { GetFavoritos } from '../../Component/Layout/Favorites/GetFavoritos'
import { RegistrarCarrito } from '../ServiceCarrito/RegistrarCarrito'
import { ServicieDelete_Favorite } from './ServicieDelete_Favorite'


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
        <div className='conter_car-favorite' id='conter_car'>
            {
                favorites.map((item) => (

                    <div>

                        <div id={item.codigo} className='car' style={{ position: 'relative' }}>
                
                            <ServicieDelete_Favorite className={'delete-product-cart'} codigo={item.codigo}/>
                            
                            <div  className='content-img-favorite'>
                                <img className='img-cardGif' src={item.imagenProducto} alt=""   />
                                <div id='propiedad' >
                                    <Modal  classN='observar' url={item.imagenProducto} name={item.nombreProducto} description={item.descripcionProducto} press={item.precioProducto}/> 
                               </div>
                            </div>

                            <div>
                                <h2>{item.nombreProducto}</h2>
                            </div>
                            <hr />
                            <div className='content-price'>
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

