import { Button } from 'primereact/button'

import { useState } from 'react'
import { useEffect } from 'react'
import './css/Style.css'
import { ListsCart } from './ListsCart'
export const ServicieDeleteCart = ({codigo}) => {
  // const [status,setStatus]=useState(0)
  function deleteProduct() {
    console.log("estoy eliminando un producto")
    const urlRegister = 'http://localhost:8080/carritoCompras/eliminarCarrito/';
    fetch(urlRegister+codigo, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        },
    })
      .then(response => response)
      .then(response=>{
       
         if(response.status){
          document.getElementById(codigo).innerHTML=""
         }
       
        

      })
  }

  
  

 
  
  return (
    <div>
        <Button onClick={deleteProduct} className='delete-product-cart' codigo><i className='pi pi-trash delete'></i></Button>
    </div>
  )
}
