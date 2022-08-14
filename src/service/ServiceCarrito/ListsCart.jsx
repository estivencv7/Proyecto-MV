import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
// import { GetCards } from '../../Component/Layout/ContentPageMain/GetCards';
import { IteratCart } from '../../Component/Layout/ShoppingCart/IteratCart';

export const ListsCart = () => {
  const [carrito, setCarrito] = useState([])

  function timeout(ms) {
    console.log("tiempo")
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // const getCart = () => {
  //   const url = 'http://localhost:8080/carritoCompras/listarcarrito';
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("esta en listar carrito\n" + data)
  //       setCarrito(data)
  //     })
  // }

  useEffect(() => {
    let isCancelled = false;

    const peticion = async () => {
      console.log("esta en la funcion ")
      const response = await fetch('http://localhost:8080/carritoCompras/listarcarrito')
      const data = await response.json();
      setCarrito(data)
      console.log("esta aqui ")
     
      await timeout(1000);


      if(!isCancelled) {
        alert(`A name was changed: ${1}`)
        console.log("nose")
      }

    }

    peticion()
    
    return () => {
      isCancelled = true;
      console.log("Limpiando")
      
    };

  },[carrito])

  return (
    <div>
      <IteratCart listsCart={carrito} conut={carrito.length} />
    </div>
  )
}
