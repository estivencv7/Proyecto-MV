import { Button } from 'primereact/button'
import React,{useEffect,useState} from 'react'

export const RegistrarCarrito = ({nameP='',descripcionP='',precioP=0,imagenP}) => {
    
    
    const saveCart=async()=>{
        const url='http://localhost:8080/carritoCompras'
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                // codigo_producto : code,
                nombre__producto:nameP ,
                descripcion_producto:descripcionP ,
                precio_total:precioP ,
                imagen_producto:imagenP
            })
        })


    }
    

    return (
        <div>
            <Button  onClick={saveCart} namePb descripcionP precioP imagenP className='button-cart-register'><i className='pi pi-shopping-cart cart-shopping'></i></Button>
        </div>
    )
}
