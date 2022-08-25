import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import {AutoComplete}from 'rsuite'
import { InputText } from 'primereact/inputtext';
import './style.css'
import { Input } from '@material-ui/core';
import { GetCardsCategory } from '../../Layout/ContentPageMain/GetCardsCategory';
export const InputHeader = () => {

  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilters] = useState('');
  const [products, setProducts] = useState([]);

  function filtersCategory() {
    console.log("CATEGORIA " );
    console.log(document.getElementById("inpuText").value);
    console.log("LISTANDO PRODUCTOS")
    const urlRegister = 'http://localhost:8080/producto/filtrarCategoria/' + document.getElementById("inpuText").value;
    fetch(urlRegister, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
          setProducts(data)
          createElements()
        })

      }
  function createElements(){
    <GetCardsCategory getCards={products}/>
    const containerFilter = document.getElementById("containerFilter")
    const categoryContainer = document.getElementById("categoryContainer")
    containerFilter.appendChild(categoryContainer)
    document.getElementById("containerProd").classList.add("hide")
    
  }
  return (
    <div className='input-wrapper'>
      <div>
        <i className="pi pi-search input-icon" onClick={filtersCategory}></i>
      </div>
      <div>
        <InputText  id='inpuText' placeholder='¿Qué estás buscando?' className='autoInput' ></InputText>
      </div>
     <GetCardsCategory getCards={products}/>
    </div>
  )
}
