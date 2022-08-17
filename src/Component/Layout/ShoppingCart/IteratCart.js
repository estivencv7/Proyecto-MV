import React, { useEffect } from 'react'
import { ServicieDeleteCart } from '../../../service/ServiceCarrito/ServicieDeleteCart'
import './style.css'
export const IteratCart = ({ listsCart = [], conut }) => {

    let guardar = [];
    let t = 0;
    useEffect(() => {
        document.getElementById('cantidad').innerHTML = conut
    }, [conut])
    return (
        <div className='sectionCart'  >

            <div  >

                {
                    listsCart.map((item) => (
                        <div key={item.codigo_Carrito} id='padre' >
                            <div className='card-cart' id='h1'>
                                <img src={item.imagen_producto} alt="" className='img-cart' id='h2' />
                                <div className='content-cart-nameProduct' id='h3'>
                                    <h2 id='padre'>{item.nombre__producto}</h2>
                                    <h4 id='padre'>${item.precio_total}</h4>
                                    <input id='h5' type="number" className='cart-quantity' placeholder='Cantidad' />
                                </div>
                                <div className='content-delete-cart' id='h6'>
                                    <ServicieDeleteCart codigo={item.codigo_Carrito} />
                                    {

                                        // t+=item.precio_total
                                        console.log(guardar.push(item.precio_total))
                                    }
                                </div>
                            </div>
                            <hr />
                            {guardar.forEach(total => {
                                console.log("total de compra" + `${t += total}`)
                            })}
                        </div>
                    ))

                }




            </div>
            <div className='Total-press'>
                    <p className='title-total'>TOTAL DE COMPRA</p>
                    <p>{t} </p>
            </div>
        </div>
    )
}
