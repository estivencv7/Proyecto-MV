import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react'
import { count } from 'rsuite/esm/utils/ReactChildren';
import { ServicieDeleteCart } from '../../../service/ServiceCarrito/ServicieDeleteCart'
import './style.css'

function lis() {
    let guardar2 = []
    return guardar2
}









export const IteratCart = ({ listsCart = [], conut }) => {
    let guardar = []
    let [v,setv]=useState(0);

    let t = 0;
    // const [variable, setVariable] = useState(0);
    useEffect(() => {
        document.getElementById('cantidad').innerHTML = conut
    }, [conut])


    // e,item.codigo_Carrito,item.precio_producto, item.imagen_producto
    function editCart(e,codigo, nameP,precioP, imagenP) {
        let cantidad=e.target.value;
        setv(precioP*cantidad)
        // document.getElementById(nameP).innerHTML=precioP*cantidad

        // if(cantidad==0){
        //     cantidad=1

        // }else{
        //     cantidad=e.target.value
        // }
        const urlRegister = 'http://localhost:8080/carritoCompras/actualizarCarrito/'+codigo;
        fetch(urlRegister, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                codigo_Carrito: codigo,
                nombre__producto: nameP,
                imagen_producto: imagenP,
                precio_producto:precioP,
                cantidad_cart:cantidad,
                precio_total:precioP*cantidad

            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.ok) {
                    alert("Registro exitoso")
                } else {
                    alert("Registro exitoso")
                }
            })
    
    }


    // const operation = (event, press, codigo) => {
    //     let valor = lis()
    //     let i = 0;

    //     let o = press * event.target.value
    //     valor.push(o)
    //     let [...dos] = valor


    //     guardar.push(dos)

    //     let [...tres] = guardar



    //     tres.forEach(item => {
    //         //   setVariable(Number(item))
    //         t += Number(item)

    //     })
    //     document.getElementById("press").textContent = t

    //     document.getElementById(codigo).textContent = "" + press * event.target.value
    //     let ñ = document.getElementById(codigo).document.getElementById(codigo).textContent = "" + press * event.target.value

    //     guardar3.push(ñ)
    //     guardar3.forEach(item => {
    //         i = Number(item)
    //         setVariable(t += Number(item))

    //     })

    //     // document.getElementById("press").innerHTML-=i

    //     console.log("ñ" + guardar3)

    //     // t=press*event.target.value 

    // }
    return (
        <div className='sectionCart'  >
            <div>


                {


                    listsCart.length > 0 ?
                        listsCart.map((item) => (
                            <div key={item.codigo_Carrito} id={item.codigo_Carrito} >
                                <div className='card-cart' >
                                    <img src={item.imagen_producto} alt="" className='img-cart' id='h2' />
                                    <div className='content-cart-nameProduct' id='h3'>
                                        <h2 id='padre'>{item.nombre__producto}</h2>
                                        {item.precio_total>item.precio_producto ? <h4 id='precio'>${item.precio_producto} unidad</h4> : <h4 id='precio'>${item.precio_producto}</h4>}
                                        {item.precio_total<=item.precio_producto ? <h2></h2> : <h2 > {item.precio_producto*item.cantidad_cart}</h2>}

                                        {

                                            <select onChange={e =>editCart(e,item.codigo_Carrito,item.nombre__producto,item.precio_producto, item.imagen_producto)} >
                                                <option>{item.cantidad_cart}</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option>4</option>
                                            </select>
                                        }
                                    </div>
                                    <div className='content-delete-cart' id='h6'>
                                        <ServicieDeleteCart codigo={item.codigo_Carrito} press={item.precio_total} />
                                        {

                                            console.log( guardar.push(item.precio_total))
                                        }
                                    </div>
                                </div>
                                <hr />

                            </div>
                        ))
                        :
                        <div className='Cart-empty'><i className='ca pi pi-shopping-cart' style={{ fontSize: '100px' }}></i><h5>SU CARRITO ESTA VACIO</h5></div>
                }

                {
                    guardar.forEach(total => {
                        console.log("total de compra" + `${t += total}`)
                    })


                }
            </div>
            {

                // t > 0 ?
                <div className='Total-press'>
                    <div className='section-operation' >
                        <p >TOTAL DE COMPRA</p>
                        <p className='item-total' id='press'>{t}</p>
                    </div>

                    <Button>FINALIZAR COMPRA</Button>

                </div>
                // // :
                // <div> </div>
            }

        </div>
    )
}