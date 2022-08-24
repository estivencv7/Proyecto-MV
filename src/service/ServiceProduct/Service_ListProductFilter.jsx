import React,{useState,useEffect} from 'react'
import { GetCardsFilter } from '../../Component/Layout/ContentPageMain/GetCardsFilter'


export const Service_ListProductFilter = ({minimum , maximum}) => {
    
    const [products , setProducts] = useState([])
    
    
    function createElements(){
        <GetCardsFilter products={products}/>
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
          createElements()
          
        })
    }

    return (
    <div>
        <button onClick={filterPrice} className='btnFiltro'>Filtrar</button>
        <GetCardsFilter products={products}/>
    </div>
  )
}
