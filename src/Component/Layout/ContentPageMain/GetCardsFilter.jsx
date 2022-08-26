// import React from 'react'
// import { RegistrarCarrito } from '../../../service/ServiceCarrito/RegistrarCarrito'
// import { ServicioRegistrar_Favoritos } from '../../../service/ServicioFavoritos/ServicioRegistrar_Favoritos'
// import { Modal } from './Modal'
// import './CarouselDemo.css'

// export const GetCardsFilter = ({products = []}) => {
//     const containerProd = document.getElementById("containerProd")
//     console.log(products);
//     try {
//             return (
//                 <div className='conter_car' id='prodContainer'>
//                     {
//                         products.map((item, index,) => (
                            
//                             <div key={index} >
//                                 {/* <div className='sud-content' > */}
//                                 <div className='ca' style={{ position: 'relative' }}>
//                                     <ServicioRegistrar_Favoritos codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} precioP={item.precio_producto} imagenP={item.foto_producto} classN="iconHeart"/>
                                   
//                                     <div >
        
//                                         <img className='img-cardGif' src={item.foto_producto} alt="" />
        
//                                     </div>
        
//                                     <div>
//                                         <h2>{item.nombre_producto}</h2>
//                                     </div>
//                                     <hr />
//                                     <div className='content-press'>
//                                         <h2 className='press'>${item.precio_producto}</h2>
        
                                        
//                                         <RegistrarCarrito  codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} imagenP={item.foto_producto} precioP={item.precio_producto}/>
        
//                                     </div>
                                   
//                                     <div  >
//                                         <Modal  className='' url={item.foto_producto} name={item.nombre_producto} description={item.descripcion_producto} press={item.precio_producto} />
//                                     </div>
        
//                                 </div>
        
//                             </div>
        
//                             // </div>
                            
//                         ))
//                     }
               
<<<<<<< HEAD
                </div>
            )   
}
=======
//                 </div>
//             )   
//     } catch (error) {
//         console.log("CATCH EN EL CARDS FILTER " + error);
//         document.getElementById("containerProd").classList.remove("hide")
//         document.getElementById("containerFilter").classList.add("hide")  
//     }
    
// }
>>>>>>> a2a37f72fbd213b1fe7eb393c006763bdc8efe9e
