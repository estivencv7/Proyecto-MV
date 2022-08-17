import { Button } from 'primereact/button';
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
            <div>


                {
                    listsCart.length > 0 ?
                        listsCart.map((item) => (
                            <div key={item.codigo_Carrito} id='padre' >
                                <div className='card-cart' id={item.codigo_Carrito}>
                                    <img src={item.imagen_producto} alt="" className='img-cart' id='h2' />
                                    <div className='content-cart-nameProduct' id='h3'>
                                        <h2 id='padre'>{item.nombre__producto}</h2>
                                        <h4 id='padre'>${item.precio_total}</h4>
                                        <input id='h5' type="number" className='cart-quantity' />
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

                            </div>
                        ))
                        :
                        <div className='Cart-empty'><i className='ca pi pi-shopping-cart' style={{ fontSize: '100px' }}></i><h5>SU CARRITO ESTA VASIO</h5></div>
                }

                {
                    guardar.forEach(total => {
                        console.log("total de compra" + `${t += total}`)
                    })}
            </div>
            {

                t > 0 ?
                    <div className='Total-press'>
                        <div className='section-operation' >
                            <p >TOTAL DE COMPRA</p>
                            <p className='item-total'>${t} </p>
                        </div>

                        <Button>FINALIZAR COMPRA</Button>

                    </div>
                    :
                    <div> </div>
            }

        </div>
    )
}
