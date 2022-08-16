import { Button } from 'primereact/button'
import React from 'react'
import { useEffect } from 'react'
import './css/Style.css'
import { ListsCart } from './ListsCart'
export const ServicieDeleteCart = ({codigo}) => {

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
        if(response.status==200){
          console.log(codigo+"html"+document.getElementById('imagIterar').Value)
          
          if(document.getElementById().value==codigo){
            document.getElementById('imagIterar').innerHTML=""
            console.log('borro')
          }
        }
      })
  }

  useEffect(()=>{

    

  },[])
  

 
  
  return (
    <div>
        <Button onClick={deleteProduct} className='delete-product-cart' codigo><i className='pi pi-trash delete'></i></Button>
    </div>
  )
}
