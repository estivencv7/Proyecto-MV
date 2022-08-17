import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
// import { GetCards } from '../../Component/Layout/ContentPageMain/GetCards';
import { IteratCart } from '../../Component/Layout/ShoppingCart/IteratCart';

export const ListsCart = () => {
  
  
  const [carrito, setCarrito] = useState([])

  const peticion = () => {
    const url = 'http://localhost:8080/carritoCompras/listarcarrito';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("esta en listar carrito\n" + data)
        setCarrito(data)
      })
  }

  
  useEffect(() => {
    peticion()
  },[])

  return (
    <div>
      <IteratCart listsCart={carrito} conut={carrito.length} />
    </div>
  )
}
