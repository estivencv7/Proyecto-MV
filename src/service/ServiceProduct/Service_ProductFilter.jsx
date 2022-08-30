import React,{useState} from 'react'
// import { Modal } from '../../Component/Layout/ContentPageMain/Modal'
// import { RegistrarCarrito } from '../ServiceCarrito/RegistrarCarrito'
// import { ServicioRegistrar_Favoritos } from '../ServicioFavoritos/ServicioRegistrar_Favoritos'

export const Service_ProductFilter = ({minimum , maximum}) => {

  const [products , setProducts] = useState([])
    
  
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
      <button onClick={createElements} className='btnFiltro' >Filtrar</button>
    </div>
  )

}
