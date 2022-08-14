import React, { useEffect } from 'react'
import { ServicieDeleteCart } from '../../../service/ServiceCarrito/ServicieDeleteCart'
import  './style.css'
export const IteratCart = ({ listsCart = [],conut}) => {


    useEffect(()=>{
        document.getElementById('cantidad').innerHTML= conut
    },[conut])
    return (
        <div  >
           
            {
                listsCart.map((item,index)=>(
                    <div key={index} >
                        <div className='card-cart'  id={item.nombre__producto}>
                            <img src={item.imagen_producto}  alt=""  className='img-cart'/>
                            <div className='content-cart-nameProduct'>
                                <h2 >{item.nombre__producto}</h2>
                                <h4>${item.precio_total}</h4>
                                <input type="number" className='cart-quantity' v />
                            </div>
                            <div className='content-delete-cart'>
                                <ServicieDeleteCart codigo={item.codigo_Carrito}/>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))
               
            }
        </div>
    )
}
