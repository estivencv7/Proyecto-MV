// import React from 'react'

// export const Service_update_Cart = ({ codigo, nameP, pressP, imagenP, pressT, cantidad }) => {

//   let t=0;
//   let guardar=[]
//   const editCart = (e, codigo, nameP, precioP, imagenP, pressT) => {//la (e) es el valor que captura (1234)
//     let cantidad = e.target.value;
//     let precioTotal = precioP * cantidad
   
    

//     const urlRegister = 'http://localhost:8080/carritoCompras/actualizarCarrito/' + codigo;//se le pasa por parametro el codigo del carrito
//     fetch(urlRegister, {
//       method: 'PUT',
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify({
//         codigo_Carrito: codigo,
//         nombre__producto: nameP,
//         imagen_producto: imagenP,
//         precio_producto: precioP,
//         cantidad_cart: cantidad,
//         precio_total: precioTotal

//       })

//     })
//       .then(response => {

//         if (response.ok) {
//           guardar.push((pressP*cantidad))
    
//     guardar.forEach(total => {
//       t += total
//     })
       
//         }
//       })

//       document.getElementById(nameP).innerHTML = pressP * cantidad
//       document.getElementById("press").innerHTML=(t)-(precioP*cantidad)
//   }


//   return (
//     <select onChange={(e) => editCart(e, codigo, nameP, pressP, imagenP, pressT, cantidad)} >
//       {/* <option>{item.cantidad_cart}</option>
//       {item.cantidad_cart == 1 ? <div></div> : <option value={1}>1</option>}
//       {item.cantidad_cart == 2 ? <div></div> : <option value={2}>2</option>}
//       {item.cantidad_cart == 3 ? <div></div> : <option value={3}>3</option>}
//       <option>4</option> */}
//       <option></option>
//       <option value={1}>1</option>
//       <option value={2}>2</option>
//       <option value={3}>3</option>
//       <option>4</option>
//     </select>
//   )
// }
