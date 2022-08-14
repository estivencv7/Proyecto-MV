import { Button } from 'primereact/button'
import React,{useEffect,useState} from 'react'
import { ContentShoppingCart } from '../../Component/Layout/ShoppingCart/ContentShoppingCart'

export const RegistrarCarrito = ({nameP='',descripcionP='',precioP=0,imagenP}) => {
    
    const [visible2, setVisible2] = useState(false)
    const saveCart=async()=>{
        if(visible2==false){
            setVisible2(true)
        }
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
    useEffect(()=>{
        
    },[])

    

    return (
        <div>
           
            <Button  onClick={saveCart} namePb descripcionP precioP imagenP className='button-cart-register'><i className='pi pi-shopping-cart cart-shopping' cantidad></i></Button>
            <ContentShoppingCart visible2={visible2} onHide={()=>{setVisible2(false)}}/>
        </div>
    )
}
