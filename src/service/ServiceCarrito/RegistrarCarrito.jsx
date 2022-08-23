import { act } from '@testing-library/react'
import { Button } from 'primereact/button'
import React, { useEffect, useState } from 'react'
import { ContentShoppingCart } from '../../Component/Layout/ShoppingCart/ContentShoppingCart'

export const RegistrarCarrito = ({ codigoP ,nameP = '', descripcionP = '', precioP = 0, imagenP }) => {//le damos como propiedades al componente Para capturar su valor y registar 
                                                                                                        //en la Carpeta(GetCart)
    const [visible2, setVisible2] = useState(false)
    const [visible, setVisible] = useState(false)
    function saveCart() {
        let cantidad=1
        
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
                cantidad_cart:cantidad,
                precio_producto:precioP,
                precio_total:precioP*cantidad,
                
            })
        })
            .then(response =>response.json())
    }

    //esta funcion le llega por parametro el tiempo de espera
    function timeout(ms) { 
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    //esta funcion nos permite actualizar el carrito 
    const re=async()=>{
        setVisible2(false)
        await timeout(400)//se le envia por parametro los el tiempo que se requier

        if(visible==false){
            setVisible2(true)
        }
    }

    
    return (
        <>
            <Button onClick={(e)=>saveCart()}codigoP namePb descripcionP precioP imagenP  press className='button-cart-register'><i className='pi pi-shopping-cart cart-shopping' cantidad></i></Button>
            <ContentShoppingCart visible2={visible2} onHide={() => { setVisible2(false) }}   onClick={re}/>
        </>

    )
}
