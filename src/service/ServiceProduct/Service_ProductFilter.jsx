import React,{useState} from 'react'
import { Modal } from '../../Component/Layout/ContentPageMain/Modal'
import { RegistrarCarrito } from '../ServiceCarrito/RegistrarCarrito'
import { ServicioRegistrar_Favoritos } from '../ServicioFavoritos/ServicioRegistrar_Favoritos'

export const Service_ProductFilter = ({minimum , maximum}) => {

  const [products , setProducts] = useState([])
  const filterPrice = () => {
    const urlFilter = "http://localhost:8080/producto/filtrar/" + minimum + "/" + maximum
    fetch(urlFilter, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
    },
    })
    .then(response => response.json())
    .then(prods => {
      setProducts(prods)
    })
  
  }
  
  function createElements(){
    const prodContainer = document.getElementById("prodContainer")
    if(document.getElementById("conter_car") == null){
      const div = document.createElement("div")
      if(document.getElementById("prodContainer") == null){
        document.getElementById("supportContainer").replaceWith(document.getElementById("prodContainer"))
      }else if(document.getElementById("conter_car") == null){
        document.getElementById("prodContainer").replaceWith(div)
      }
    }else{
      document.getElementById("conter_car").replaceWith(prodContainer)
    }
  }

  return (
    <div>
      <button onClick={filterPrice} onMouseDown={createElements} className='btnFiltro'>Filtrar</button>
      <div className='conter_car' id='prodContainer'>
            {
                products.map((item, index,) => (

                    <div key={index} >

                        {/* <div className='sud-content' > */}
                        
                        <div className='car' style={{ position: 'relative' }}>
                            
                            <ServicioRegistrar_Favoritos codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} precioP={item.precio_producto} imagenP={item.foto_producto}/>
                           
                            <div>
                                <img className='img-cardGif' src={item.foto_producto} alt="" />
                            </div>  

                            <div>
                                <h2>{item.nombre_producto}</h2>
                            </div>
                            <hr />
                            <div className='content-press'>
                                <h2 className='press'>${item.precio_producto}</h2>

                                
                                <RegistrarCarrito codigoP={item.codigo_producto} nameP={item.nombre_producto} descripcionP={item.descripcion_producto} imagenP={item.foto_producto} precioP={item.precio_producto} />

                            </div>
                           
                            <div >
                                <Modal url={item.foto_producto} name={item.nombre_producto} description={item.descripcion_producto} press={item.precio_producto} />
                            </div>

                        </div>

                    </div>

                    // </div>
                    
                ))
            }
        </div>
    </div>
  )

}
