import React,{useState,useEffect} from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { ContentPageMain } from '../../Component/Layout/ContentPageMain/ContentPageMain'
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
          }    
        })
    }

    const ret = () => {
      if(products == null){
        return (
          <div></div>
        )
      }else{
        return (
          <GetCardsFilter products={products}/>
        )
      }
    }
    function createElements(){
      const containerFilter = document.getElementById("containerFilter");
      const prodContainer = document.getElementById("prodContainer")
      containerFilter.appendChild(ret)
      document.getElementById("containerProd").classList.add("hide")
    }

    return (
    <div>
        <button onClick={filterPrice} className='btnFiltro'>Filtrar</button>
        {ret}
    </div>
  )
}
