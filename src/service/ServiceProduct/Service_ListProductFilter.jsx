import React,{useState,useEffect} from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { GetCardsFilter } from '../../Component/Layout/ContentPageMain/GetCardsFilter'
import { PageProductsFilter } from '../../Component/Page/PageProductsFilter/PageProductsFilter'


export const Service_ListProductFilter = ({minimum , maximum}) => {
    
    const [products , setProducts] = useState([])
    
    const filterPrice = () => {
        const urlFilter = "http://localhost:8080/producto/filtrar/" + minimum + "/" + maximum
        fetch(urlFilter, {
          method: 'GET',
          headers: {
            "Content-type": "application/json"
        },
        })
        .then(response => response.json())
        .then(prods => {
          console.log(prods);
          try {
            setProducts(prods)   
            createElements() 
          } catch (error) {
            console.log("entra al catch " + error);
            document.getElementById("containerProd").classList.remove("hide")
            document.getElementById("containerFilter").classList.add("hide")  
          }    
        })
    }

    function createElements(){
      const containerFilter = document.getElementById("containerFilter");
      const prodContainer = document.getElementById("prodContainer")
      containerFilter.appendChild(prodContainer)
      document.getElementById("containerProd").classList.add("hide")
    }

    return (
    <div>
        <button onClick={filterPrice} className='btnFiltro'>Filtrar</button>
        <GetCardsFilter products={products}/>
    </div>
  )
}
