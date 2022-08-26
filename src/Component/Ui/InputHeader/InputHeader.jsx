import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import {AutoComplete, Button}from 'rsuite'
import { InputText } from 'primereact/inputtext';
import './style.css'
import { Input } from '@material-ui/core';

import { Navigate, useNavigate } from 'react-router-dom';
import { GetCardsCategory } from '../../Layout/ContentPageMain/GetCardsCategory';

export const InputHeader = () => {

  let navigate = useNavigate()
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilters] = useState('');
  const [products, setProducts] = useState([]);

  function listProducts() {

    console.log("LISTANDO PRODUCTOS")
    const urlRegister = 'http://localhost:8080/producto/listaProductos';
    fetch(urlRegister, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(product => setProducts(product))
  }

  function filtersCategory() {
    console.log("CATEGORIA " );
    const value = document.getElementById("inpuText").value
    console.log(document.getElementById("inpuText").value);
    console.log("LISTANDO PRODUCTOS")
    const urlRegister = 'http://localhost:8080/producto/filtrarNombre/' + document.getElementById("inpuText").value;
    fetch(urlRegister, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
          console.log("data" + data)
          console.log("value" + value)
          if (value != "" ){
            console.log("entro a create Element")
            setProducts(data)
            createElements()
          }
          else{
            listProducts()
          }
        })

      }
  function createElements(){
    try {
      <GetCardsCategory getCards={products}/>
      const containerFilter = document.getElementById("containerFilter")
      const categoryContainer = document.getElementById("categoryContainer")
      containerFilter.appendChild(categoryContainer)
      document.getElementById("containerProd").classList.add("hide")
    } catch (error) {
      navigate("/")
    }
    
  }

  return (
    <div className='input-wrapper'>
     
      <div>
      
          <i className="pi pi-search input-icon"></i>
      
        <InputText id='inpuText' placeholder='¿Qué estás buscando?' className='autoInput' onChange={filtersCategory}></InputText>
      </div>
      <GetCardsCategory getCards={products}/>
    </div>
  )
}
