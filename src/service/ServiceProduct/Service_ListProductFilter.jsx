import React,{useState,useEffect} from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { ContentPageMain } from '../../Component/Layout/ContentPageMain/ContentPageMain'
import { PageProductsFilter } from '../../Component/Page/PageProductsFilter/PageProductsFilter'

export const Service_ListProductFilter = ({minimum , maximum}) => {
    let navigate = useNavigate()

    const redirect = () => {
      localStorage.setItem("minimo" , minimum)
      localStorage.setItem("maximo" , maximum)
      navigate("/pageProductsFilter")
    }

    return (
    <div>
        <button onClick={redirect} className='btnFiltro'>Filtrar</button>
    </div>
  )
}
