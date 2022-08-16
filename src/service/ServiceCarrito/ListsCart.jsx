import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
// import { GetCards } from '../../Component/Layout/ContentPageMain/GetCards';
import { IteratCart } from '../../Component/Layout/ShoppingCart/IteratCart';

export const ListsCart = () => {
  
  
  const [carrito, setCarrito] = useState([])
  const [car, setCar] = useState([])

  
  
  function timeout(ms) {
    console.log("tiempo")
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const peticion = () => {
    const url = 'http://localhost:8080/carritoCompras/listarcarrito';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("esta en listar carrito\n" + data)
        setCar(data)
        pasar(data)
      })
  }

  function pasar(data){
    if(carrito.length!=data.length){
      setCarrito(data)
    }else{
      setCarrito(data)
      // alert("ojo")
    }
    
  }
  useEffect(() => {
   
    let isCancelled = false;


    // const peticion = () => {
    //     const url = 'http://localhost:8080/carritoCompras/listarcarrito';
    //     fetch(url)
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log("esta en listar carrito\n" + data)
    //         setCar(data)
    //         pasar(data)
    //       })
    //   }

    // const peticion =async () => {
    //   console.log("esta en la funcion ")
    //   const response=await fetch('http://localhost:8080/carritoCompras/listarcarrito')
    //   const data =await  response.json();
    //   setCar(data)
    //   console.log("esta aqui ")
     
    //   await timeout(1000);


    //   if(!isCancelled) {
    //     pasar(data)
    //   //   console.log("tiempo")
      
        
    //   }


    // }
    peticion()
    
    // return () => {
    //   isCancelled = true;
      
    //   console.log("Limpiando")
      
    // };

  },[carrito])

  return (
    <div>
      <IteratCart listsCart={carrito} conut={car.length} />
    </div>
  )
}
