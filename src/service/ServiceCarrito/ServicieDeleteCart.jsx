import { Button } from 'primereact/button'
import React from 'react'
import './css/Style.css'
export const ServicieDeleteCart = ({codigo=0}) => {

  function registerProduct() {
    console.log("estoy eliminando un producto")
    const urlRegister = 'http://localhost:8080/carritoCompras/eliminarCarrito/';
    fetch(urlRegister+codigo, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        },
    })
      .then(response => response.json())
      .then(data=>data)
  }

  return (
    <div>
        <Button onClick={registerProduct} className='delete-product-cart' codigo><i className='pi pi-trash delete'></i></Button>
    </div>
  )
}
