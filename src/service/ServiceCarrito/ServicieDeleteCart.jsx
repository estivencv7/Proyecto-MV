import { Button } from 'primereact/button'

import { useState } from 'react'
import { useEffect } from 'react'
import { ContentShoppingCart } from '../../Component/Layout/ShoppingCart/ContentShoppingCart'
import './css/Style.css'
import { ListsCart } from './ListsCart'


export const ServicieDeleteCart = ({codigo,press}) => {
  // const [status,setStatus]=useState(0)

  
  const [visible2, setVisible2] = useState(false)
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
        
        console.log("status"+response.status)
         if(response.status==200){
          document.getElementById(codigo).innerHTML=""
          document.getElementById("cantidad").innerHTML-=1
          document.getElementById("press").innerHTML-=press

         }
      })
  }
  
  return (
    <div>
        <Button onClick={deleteProduct} className='delete-product-cart' codigo><i className='pi pi-trash delete'></i></Button>
        <ContentShoppingCart visible2={visible2} onHide={() => { setVisible2(false) }} />

    </div>
  )
}
