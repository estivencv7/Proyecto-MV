import { Button } from 'primereact/button'
import React, { useEffect, useState } from 'react'
import { ContentShoppingCart } from '../../Component/Layout/ShoppingCart/ContentShoppingCart'

export const RegistrarCarrito = ({ codigoP ,nameP = '', descripcionP = '', precioP = 0, imagenP }) => {

    const [visible2, setVisible2] = useState(false)

    function saveCart() {
        
        
        const url = 'http://localhost:8080/carritoCompras'
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                codigo_Carrito: codigoP,
                nombre__producto: nameP,
                descripcion_producto: descripcionP,
                imagen_producto: imagenP,
                cantidad_cart:1,
                precio_producto:precioP,
                
            })
        })
            .then(response =>{
                if(response.status==201){
                    
                    setVisible2(true)
                    
                }
            })
            .then(data => data)

    }




    return (
        <>
            <Button onClick={(e)=>saveCart()}codigoP namePb descripcionP precioP imagenP  press className='button-cart-register'><i className='pi pi-shopping-cart cart-shopping' cantidad></i></Button>
            <ContentShoppingCart visible2={visible2} onHide={() => { setVisible2(false) }} />
        </>

    )
}
