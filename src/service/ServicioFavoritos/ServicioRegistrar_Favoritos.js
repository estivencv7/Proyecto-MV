import React from 'react'
import { Button } from 'primereact/button'
// import React, { useEffect, useState } from 'react'
// import { ContentShoppingCart } from '../../Component/Layout/ShoppingCart/ContentShoppingCart'
import '../ServicioFavoritos/css/style.css'
export const ServicioRegistrar_Favoritos = ({ codigoF ,nameP = '', descripcionP = '', precioP = 0, imagenP }) => {
    
        // const [visible2, setVisible2] = useState(false)
        // const [visible, setVisible] = useState(false)
        function saveFavorite() {
            let cantidad=1
            console.log( codigoF ,nameP,descripcionP , precioP, imagenP)
            const url = 'http://localhost:8080/favoritos'
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    codigo:codigoF,
                    nombreProducto:nameP,
                    descripcionProducto:descripcionP,
                    imagenProducto: imagenP,
                    cantidadCart:cantidad,
                    precioProducto:precioP,
                    precioTotal:precioP*cantidad,
                    
                })
            })
                .then(response =>{
                    if(response.status==201){
                        // setVisible2(true)  
                    }
                })
                .then(data => data)
    
        }
    
        // //esta funcion le llega por parametro el tiempo de espera
        // function timeout(ms) { 
        //     return new Promise((resolve) => setTimeout(resolve, ms));
        // }
        
        // //esta funcion nos permite actualizar el carrito 
        // const re=async()=>{
        //     setVisible2(false)
        //     await timeout(400)//se le envia por parametro los el tiempo que se requier
    
        //     if(visible==false){
        //         setVisible2(true)
        //     }
        // }
    
        
        return (
            <>
                <button onClick={(e)=>saveFavorite()} className='button-cart-register'><i className='pi pi-heart heart-icon'></i></button>
            </>
    
        )
    }
    

