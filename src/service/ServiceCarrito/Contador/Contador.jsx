// import { get } from 'jquery'
import React,{useEffect,useState} from 'react'

export const Contador = () => {
    const [count,SetCount]=useState([])
    
    const getCart = async () => {
        const response = await fetch('http://localhost:8080/carritoCompras/listarcarrito')
        const data = await response.json();
        SetCount(data)
        return data;
    }

    useEffect(()=>{
        getCart()
    },[])
    return (
        <p>{count.length}</p>
    )
}
